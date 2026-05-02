/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        "inverse-on-surface": "#2f3131",
        "on-tertiary-container": "#626161",
        "surface-container-high": "#282a2b",
        "error": "#ffb4ab",
        "surface-container-low": "#1a1c1c",
        "surface-bright": "#37393a",
        "secondary-fixed-dim": "#c9c6c5",
        "on-error": "#690005",
        "on-primary-fixed-variant": "#095300",
        "outline-variant": "#3c4b35",
        "primary-fixed-dim": "#2ae500",
        "inverse-primary": "#106e00",
        "on-tertiary-fixed": "#1c1b1b",
        "on-surface-variant": "#baccb0",
        "primary": "#efffe3",
        "background": "#121414",
        "tertiary-fixed": "#e5e2e1",
        "secondary-fixed": "#e5e2e1",
        "on-secondary": "#313030",
        "on-primary": "#053900",
        "primary-container": "#39ff14",
        "on-primary-fixed": "#022100",
        "surface-variant": "#333535",
        "on-error-container": "#ffdad6",
        "on-secondary-fixed-variant": "#474646",
        "on-primary-container": "#107100",
        "surface-container-highest": "#333535",
        "tertiary-container": "#e0dddc",
        "tertiary-fixed-dim": "#c8c6c5",
        "on-tertiary": "#313030",
        "surface-tint": "#2ae500",
        "on-surface": "#e2e2e2",
        "secondary": "#c9c6c5",
        "primary-fixed": "#79ff5b",
        "secondary-container": "#4a4949",
        "surface-container-lowest": "#0c0f0f",
        "surface-container": "#1e2020",
        "outline": "#85967c",
        "on-tertiary-fixed-variant": "#474746",
        "on-background": "#e2e2e2",
        "surface-dim": "#121414",
        "surface": "#121414",
        "on-secondary-fixed": "#1c1b1b",
        "on-secondary-container": "#bab8b7",
        "tertiary": "#fdf9f9",
        "inverse-surface": "#e2e2e2",
        "error-container": "#93000a"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "sm": "8px",
        "gutter": "12px",
        "container-margin": "20px",
        "unit": "4px",
        "md": "16px",
        "xs": "4px",
        "xl": "40px",
        "lg": "24px"
      },
      fontFamily: {
        "display-xl": ["Lexend", "sans-serif"],
        "body-md": ["Lexend", "sans-serif"],
        "label-caps": ["Space Grotesk", "sans-serif"],
        "stat-value": ["Space Grotesk", "sans-serif"],
        "body-lg": ["Lexend", "sans-serif"],
        "headline-md": ["Lexend", "sans-serif"],
        "headline-lg": ["Lexend", "sans-serif"]
      },
      fontSize: {
        "display-xl": ["48px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "800" }],
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "1", letterSpacing: "0.1em", fontWeight: "700" }],
        "stat-value": ["28px", { lineHeight: "1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ]
};
