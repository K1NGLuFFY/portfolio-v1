import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#050505", // Near-black
                foreground: "#FFFFFF",
                accent: "#3B82F6", // Used sparingly
                card: "rgba(255, 255, 255, 0.03)",
                border: "rgba(255, 255, 255, 0.1)",
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
            },
            animation: {
                'grain': 'noise 0.2s infinite',
            },
            keyframes: {
                noise: {
                    '0%, 100%': { transform: 'translate(0,0)' },
                    '10%': { transform: 'translate(-1%,-1%)' },
                    '20%': { transform: 'translate(1%,1%)' },
                }
            }
        },
    },
    plugins: [],
};
export default config;
