// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

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
            sans: ["Noto Sans JP", ...defaultTheme.fontFamily.sans],
            logo: ['"M PLUS Rounded 1c"'],
        },
        extend: {
            colors: {},
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#6b7280",
                    secondary: "#fde68a",
                    accent: "#37cdbe",
                    neutral: "#3d4451",
                    "base-100": "#ffffff",

                    "--rounded-box": "0", // border radius rounded-box utility class, used in card and other large boxes
                    "--rounded-btn": "0", // border radius rounded-btn utility class, used in buttons and similar element
                    "--rounded-badge": "0.5rem", // border radius rounded-badge utility class, used in badges and similar
                    "--animation-btn": "0.25s", // duration of animation when you click on button
                    "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
                    "--btn-text-case": "uppercase", // set default text transform for buttons
                    "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
                    "--border-btn": "1px", // border width of buttons
                    "--tab-border": "1px", // border width of tabs
                    "--tab-radius": "0.5rem", // border radius of tabs
                },
            },
        ],
    },
};
