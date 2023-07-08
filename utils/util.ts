export class Util {
    static kebabToCamelCase = (kebabCase: string): string => {
        return kebabCase.replace(/-([a-z])/g, (_, match) => match.toUpperCase());
    };
}
