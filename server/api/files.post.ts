import path from "path";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export default defineEventHandler(async (event) => {
    const files = await readMultipartFormData(event);

    const accessKeyId = import.meta.env.VITE_S3_ACCESS_KEY;
    const secretAccessKey = import.meta.env.VITE_S3_SECRET_KEY;

    const client = new S3Client({
        region: "ap-northeast-1",
        credentials: {
            accessKeyId,
            secretAccessKey,
        },
    });

    const filenames: Array<string> = [];

    try {
        files?.forEach(async (file) => {
            const filename = `${Util.generateDateTimeID()}${path.extname(file.filename || "")}`;
            filenames.push(filename);
            const command = new PutObjectCommand({
                Bucket: IMAGE_S3_BUCKET,
                Key: filename,
                Body: file.data,
                ContentType: file.type,
            });
            const response = await client.send(command);
            if (response.$metadata.httpStatusCode !== 200) {
                throw new Error("アップロードに失敗しました");
            }
        });
        return { filenames };
    } catch (err) {
        throw createError({
            statusCode: 400,
            statusMessage: "",
        });
    }
});
