/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{vue,js}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    theme: {
        fontFamily: {
            body: ["Roboto", "Hiragino Sans", "Meiryo", "Hiragino Kaku Gothic ProN", "sans-serif"],
        },
        extend: {
            colors: {},
        },
    },
    daisyui: {},
};
