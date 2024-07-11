import path from "path";
import sharp from "sharp";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { IMAGE_S3_BUCKET_ORIGINAL, IMAGE_S3_BUCKET } from "../utils/const";

export default defineEventHandler(async (event) => {
    const files = await readMultipartFormData(event);

    const filenames: Array<string> = [];

    try {
        files?.forEach(async (file) => {
            const dateTimeID = Util.generateDateTimeID();
            const originalExtFilename = `${dateTimeID}${path.extname(file.filename || "")}`;
            const webpFilename = `${dateTimeID}.webp`;
            filenames.push(webpFilename);

            // オリジナル
            await uploadImage(IMAGE_S3_BUCKET_ORIGINAL, originalExtFilename, file.data, file.type);

            // PC
            const optimizedImageBufferPc = await optimizeImage(file.data, 800, 800);
            await uploadImage(
                IMAGE_S3_BUCKET,
                `img/pc/${webpFilename}`,
                optimizedImageBufferPc,
                "image/webp "
            );

            // モバイル
            const optimizedImageBufferSp = await optimizeImage(file.data, 600, 600);
            await uploadImage(
                IMAGE_S3_BUCKET,
                `img/sp/${webpFilename}`,
                optimizedImageBufferSp,
                "image/webp "
            );
        });
        return { filenames };
    } catch (err) {
        throw createError({
            statusCode: 400,
            statusMessage: "",
        });
    }
});

const uploadImage = async (
    bucket: string,
    key: string,
    body: Buffer,
    contentType: string | undefined
) => {
    const accessKeyId = import.meta.env.VITE_S3_ACCESS_KEY;
    const secretAccessKey = import.meta.env.VITE_S3_SECRET_KEY;

    const client = new S3Client({
        region: "ap-northeast-1",
        credentials: {
            accessKeyId,
            secretAccessKey,
        },
    });

    const command = new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: body,
        ContentType: contentType,
    });
    const response = await client.send(command);
    if (response.$metadata.httpStatusCode !== 200) {
        throw new Error("アップロードに失敗しました");
    }
};

const optimizeImage = async (buffer: Buffer, width: number, height: number) => {
    return await sharp(buffer)
        .resize({
            width,
            height,
            fit: "inside",
            withoutEnlargement: true,
        })
        .webp({
            quality: 80,
        })
        .toBuffer();
};
