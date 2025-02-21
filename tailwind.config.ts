import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require(
    "tailwindcss/lib/util/flattenColorPalette"
);

export default {
    content: [
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./pages/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
                sidebar: {
                    DEFAULT: "hsl(var(--sidebar-background))",
                    foreground: "hsl(var(--sidebar-foreground))",
                    primary: "hsl(var(--sidebar-primary))", "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
                    accent: "hsl(var(--accent-foreground))", "accent-foreground": "hsl(var(--accent-foreground))",
                    border: "hsl(var(--sidebar-border))",
                    ring: "hsl(var(--sidebar-ring))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius)) - 2px",
                sm: "calc(var(--radius)) - 4px",
            },
            fontFamily: {

            },
            keyframes: {
                "fade-up": {
                    "0%": {
                        transform: "translateY(10px)",
                    },
                    "100%": {
                        transform: "translateY(0)",
                    },
                },
                "move-up": {
                    "0%": {
                        transform: "translateY(90px)",
                        opacity: "0",
                    },
                    "100%": {
                        transform: "translateY(0)",
                        opacity: "1",
                    },
                },
                "fade-in": {
                    "0%": {
                        opacity: "0",
                    },
                    "100%": {
                        opacity: "1",
                    },
                },
            },
            animation: {
                "fade-up": "fade-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                "move-up": "move-up 3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                "fade-in": "fade-in 3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            },
        },
    },
    plugins: [addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme('colors'));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    )
}