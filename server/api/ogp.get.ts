import ogs from "open-graph-scraper";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const url = query?.url;

    if (!url) {
        throw createError({
            statusCode: 400,
            statusMessage: "",
        });
    }

    const options = { url };
    const data = await ogs(options);

    const { error, result } = data;

    if (error) {
        throw createError({
            statusCode: 400,
            statusMessage: "get OGP failed",
        });
    }

    return result;
});
