import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{ts,tsx}',

  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {

               // my colors 

              //  "primary-500": "#AC4D39",
              //  "primary-400": "#CC604A",
              //  "bg-1100": "#F9F9F8",
              //  "bg-100": "#EEE",
              //  "bg-1200": "#111",
              //  "bg-200": "#B4B4B4",

              "bg-default": "var(--bg-default)",
              "bg-base": "var(--bg-base)",
              "bg-bg-subtle": "var(--bg-bg-subtle)",
              "bg-bg": "var(--bg-bg)",
              "bg-bg-hover": "var(--bg-bg-hover)",
              "bg-bg-active": "var(--bg-bg-active)",
              "fg-line": "var(--fg-line)",
              "fg-border": "var(--fg-border)",
              "fg-border-hover": "var(--fg-border-hover)",
              "fg-solid": "var(--fg-solid)",
              "fg-solid-hover": "var(--fg-solid-hover)",
              "fg-text": "var(--fg-text)",
              "fg-text-contrast": "var(--fg-text-contrast)",
              "fg-default": "var(--fg-default)",
            
            
              "primary-base": "var(--primary-base)",
              "primary-bg-subtle": "var(--primary-bg-subtle)",
              "primary-bg": "var(--primary-bg)",
              "primary-bg-hover": "var(--primary-bg-hover)",
              "primary-bg-active": "var(--primary-bg-active)",
              "primary-line": "var(--primary-line)",
              "primary-border": "var(--primary-border)",
              "primary-border-hover": "var(--primary-border-hover)",
              "primary-solid": "var(--primary-solid)",
              "primary-solid-hover": "var(--primary-solid-hover)",
              "primary-text": "var(--primary-text)",
              "primary-text-contrast": "var(--primary-text-contrast)",






      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ['var(--font-urbanist)'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config