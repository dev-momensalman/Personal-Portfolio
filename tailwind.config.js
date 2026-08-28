/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: {
          DEFAULT: "#f5fafd",
          subtle: "#F8F9FA",
        },
        foreground: "#171c1f",
        surface: {
          DEFAULT: "#f5fafd",
          dim: "#d5dbde",
          bright: "#f5fafd",
          container: {
            lowest: "#ffffff",
            low: "#eff4f7",
            DEFAULT: "#e9eff1",
            high: "#e3e9ec",
            highest: "#dee3e6",
          },
          variant: "#dee3e6",
          tint: "#00677d",
        },
        "on-surface": {
          DEFAULT: "#171c1f",
          variant: "#3d494d",
        },
        "inverse-surface": "#2b3134",
        "inverse-on-surface": "#ecf2f4",
        outline: {
          DEFAULT: "#6d797e",
          variant: "#bcc9ce",
        },
        primary: {
          DEFAULT: "#00677d",
          container: "#00b4d8",
          fixed: "#b3ebff",
          "fixed-dim": "#4cd6fb",
          foreground: "#ffffff",
        },
        "on-primary": {
          DEFAULT: "#ffffff",
          container: "#00414f",
          fixed: "#001f27",
          "fixed-variant": "#004e5f",
        },
        "inverse-primary": "#4cd6fb",
        secondary: {
          DEFAULT: "#5f5e5e",
          container: "#e5e2e1",
          foreground: "#ffffff",
          fixed: "#e5e2e1",
          "fixed-dim": "#c8c6c5",
        },
        "on-secondary": {
          DEFAULT: "#ffffff",
          container: "#656464",
          fixed: "#1c1b1b",
          "fixed-variant": "#474646",
        },
        tertiary: {
          DEFAULT: "#914d00",
          container: "#eb8f3b",
          foreground: "#ffffff",
          fixed: "#ffdcc3",
          "fixed-dim": "#ffb77d",
        },
        "on-tertiary": {
          DEFAULT: "#ffffff",
          container: "#5d2f00",
          fixed: "#2f1500",
          "fixed-variant": "#6e3900",
        },
        error: {
          DEFAULT: "#ba1a1a",
          container: "#ffdad6",
        },
        "on-error": {
          DEFAULT: "#ffffff",
          container: "#93000a",
        },
        "charcoal-muted": "#333333",
        "glass-border": "rgba(188, 201, 206, 0.4)",
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        glass: "0 10px 30px -10px rgba(0, 180, 216, 0.1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}