import path from "path";
import sharp from "sharp";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { IMAGE_S3_BUCKET_ORIGINAL, IMAGE_S3_BUCKET } from "../utils/const";

export default defineEventHandler(async (event) => {
    const files = (await readMultipartFormData(event)) ?? [];
    const filenames: Array<string> = [];

    try {
        for (const file of files) {
            const dateTimeID = Util.generateDateTimeID();
            const originalExtFilename = `${dateTimeID}${path.extname(file.filename || "")}`;
            const webpFilename = `${dateTimeID}.webp`;
            filenames.push(webpFilename);

            // オリジナル
            await uploadImage(
                event,
                IMAGE_S3_BUCKET_ORIGINAL,
                originalExtFilename,
                file.data,
                file.type
            );

            // PC
            const optimizedImageBufferPc = await optimizeImage(file.data, 800, 800);
            await uploadImage(
                event,
                IMAGE_S3_BUCKET,
                `img/pc/${webpFilename}`,
                optimizedImageBufferPc,
                "image/webp"
            );

            // モバイル
            const optimizedImageBufferSp = await optimizeImage(file.data, 600, 600);
            await uploadImage(
                event,
                IMAGE_S3_BUCKET,
                `img/sp/${webpFilename}`,
                optimizedImageBufferSp,
                "image/webp"
            );
        }

        return { filenames };
    } catch (err) {
        throw createError({
            statusCode: 400,
            statusMessage: "",
        });
    }
});

const uploadImage = async (
    event: Parameters<typeof defineEventHandler>[0],
    bucket: string,
    key: string,
    body: Buffer,
    contentType: string | undefined
) => {
    const config = useRuntimeConfig(event);
    const accountId = config.r2AccountId;
    const accessKeyId = config.r2AccessKeyId;
    const secretAccessKey = config.r2SecretAccessKey;

    if (!accountId || !accessKeyId || !secretAccessKey) {
        throw new Error("R2 credentials are not configured");
    }

    const client = new S3Client({
        region: "auto",
        endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
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
