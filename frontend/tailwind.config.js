/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        neutral: "var(--color-neutral)",

        surface: "var(--bg-surface)",
        "primary-bg": "var(--bg-primary)",
        "secondary-bg": "var(--bg-secondary)",

        "inverse-text": "var(--color-inverse)",
        "inverse-text-active": "var(--color-inverse-active)",

        subtle: "var(--border-subtle)",
        semibold: "var(--border-semibold)",
      },
    },
  },
  plugins: [],
};
