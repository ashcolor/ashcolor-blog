export class Util {
    static generateDateTimeID = () => {
        function getCurrentDate() {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, "0");
            const day = String(now.getDate()).padStart(2, "0");
            const hours = String(now.getHours()).padStart(2, "0");
            const minutes = String(now.getMinutes()).padStart(2, "0");
            const seconds = String(now.getSeconds()).padStart(2, "0");
            return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
        }

        function generateID(length: number = 8) {
            const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
            return Array.from(Array(length))
                .map(() => chars[Math.floor(Math.random() * chars.length)])
                .join("");
        }

        const datePart = getCurrentDate();
        const uuidPart = generateID();
        return `${datePart}_${uuidPart}`;
    };
}
