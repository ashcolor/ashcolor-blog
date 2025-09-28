export class Util {
    static kebabToCamelCase = (kebabCase: string): string => {
        return kebabCase.replace(/-([a-z])/g, (_, match) => match.toUpperCase());
    };

    static isValidUrl = (url: string): boolean => {
        try {
            const newUrl = new URL(url);
            return true;
        } catch (err) {
            return false;
        }
    };

    static sleep = (ms: number) =>
        new Promise((resolve) => {
            setTimeout(resolve, ms);
        });

    static affiliateDlSiteUrl = (dlSiteLink: string) => {
        const encodedUri = encodeURIComponent(dlSiteLink);
        return `https://www.dlsite.com/soft/dlaf/=/aid/${DLSITE_ASSOCIATE_ID}/url/${encodedUri}`;
    };

    static formatDate = (date: Date | string) => {
        const newDate = new Date(date);
        const year = newDate.getFullYear();
        const month = String(newDate.getMonth() + 1).padStart(2, "0");
        const day = newDate.getDate().toString().padStart(2, "0");
        const stringDate = `${year}/${month}/${day}`;
        return stringDate;
    };
}
