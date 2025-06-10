import amazonPaapi from "amazon-paapi";
import { AMAZON_ASSOCIATE_ID } from "@/utils/const";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const asin = query?.asin;

    if (!asin) {
        throw createError({
            statusCode: 400,
            statusMessage: "",
        });
    }

    const commonParameters = {
        AccessKey: import.meta.env.VITE_AMAZON_PRODUCT_ADVERTISING_API_ACCESS_KEY,
        SecretKey: import.meta.env.VITE_AMAZON_PRODUCT_ADVERTISING_API_SECRET_KEY,
        PartnerTag: AMAZON_ASSOCIATE_ID,
        PartnerType: "Associates",
        Marketplace: "www.amazon.co.jp",
    };

    const requestParameters = {
        ItemIds: [asin],
        Resources: ["ItemInfo.Title", "Offers.Listings.Price", "Images.Primary.Medium"],
    };

    try {
        const data = await amazonPaapi.GetItems(commonParameters, requestParameters);
        console.log(data.ItemsResult);

        const firstItem = data?.ItemsResult?.Items[0];

        const primaryImage = firstItem?.Images?.Primary;
        const price = firstItem?.Offers?.Listings[0]?.Price?.DisplayAmount;
        return {
            price,
            image: primaryImage,
        };
    } catch (error) {
        console.error(error);

        throw createError({
            statusCode: 400,
            statusMessage: "get Info failed",
        });
    }
});
