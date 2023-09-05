export class Util {
    static kebabToCamelCase = (kebabCase: string): string => {
        return kebabCase.replace(/-([a-z])/g, (_, match) => match.toUpperCase());
    };

    static isValidUrl = (url: string): boolean => {
        try {
            // eslint-disable-next-line no-new
            new URL(url);
            return true;
        } catch (err) {
            return false;
        }
    };

    static sleep = (ms: number) =>
        new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
}
