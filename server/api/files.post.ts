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

    try {
        files?.forEach(async (file) => {
            const command = new PutObjectCommand({
                Bucket: "ashcolor-test",
                Key: file.filename,
                Body: file.data,
                ContentType: file.type,
            });
            const response = await client.send(command);
            if (response.$metadata.httpStatusCode !== 200) {
                throw new Error("アップロードに失敗しました");
            }
        });
    } catch (err) {
        throw createError({
            statusCode: 400,
            statusMessage: "",
        });
    }
});
