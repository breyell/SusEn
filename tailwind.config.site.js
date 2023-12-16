//--------------------------------------------------------------------------
// Tailwind site configuration
//--------------------------------------------------------------------------
//
// Use this file to completely define the current sites design system by
// adding and extending to Tailwinds default utility classes.
//

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
    theme: {
        // Here we define the default colors available. If you want to include
        // all default Tailwind colors you should extend the colors instead.
        extend: {
            // Set default transition durations and easing when using the transition utilities.
            transitionDuration: {
                DEFAULT: "300ms",
            },
            transitionTimingFunction: {
                DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
            },
            colors: {
                black: "#000",
                white: {
                    DEFAULT: "#FFF",
                    off: "#F5F5ED",
                },
                green: {
                    off: "#076761",
                },
                beige: "#EFE9DE",
                orange: {
                    mellow: "#F29E37",
                },
                yellow: {
                    DEFAULT: "#FFDC61",
                },
                blue: {
                    light: "#C4DBE0",
                },
            },
            animation: {
                "marquee-0": "marquee0 25s linear infinite",
                "marquee-1": "marquee1 25s linear infinite",
                "marquee-2": "marquee2 25s linear infinite",
                "marquee-3": "marquee3 25s linear infinite",
            },
            keyframes: {
                marquee0: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(100%)" },
                },
                marquee1: {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(0%)" },
                },
                marquee2: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(200%)" },
                },
                marquee3: {
                    "0%": { transform: "translateX(-200%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
            },
        },
        // Remove the font families you don't want to use.
        fontFamily: {
            slussen: ["Slussen", ...defaultTheme.fontFamily.serif],
            "slussen-mono": ["Slussen Mono", ...defaultTheme.fontFamily.serif],
        },
        // The font weights available for this site.
        fontWeight: {
            // hairline: 100,
            // thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            // semibold: 600,
            bold: 700,
            // extrabold: 800,
            // black: 900,
        },
    },
    plugins: [
        plugin(function ({ addBase, theme }) {
            addBase({
                // Default color transition on links unless user prefers reduced motion.
                "@media (prefers-reduced-motion: no-preference)": {
                    a: {
                        transition: "color .3s ease-in-out",
                    },
                },
                html: {
                    color: theme("colors.neutral.DEFAULT"),
                    //--------------------------------------------------------------------------
                    // Set sans, serif or mono stack with optional custom font as default.
                    //--------------------------------------------------------------------------
                    // fontFamily: theme('fontFamily.mono'),
                    fontFamily: theme("fontFamily.sans"),
                    // fontFamily: theme('fontFamily.serif'),
                },
                mark: {
                    backgroundColor: theme("colors.primary.DEFAULT"),
                    color: theme("colors.white"),
                },
            });
        }),

        // Custom components for this particular site.
        plugin(function ({ addComponents, theme }) {
            const components = {};
            addComponents(components);
        }),

        // Custom utilities for this particular site.
        plugin(function ({ addUtilities, theme, variants }) {
            const newUtilities = {};
            addUtilities(newUtilities);
        }),
    ],
};
