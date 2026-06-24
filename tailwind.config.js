/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#14b8a6",
        accent: "#ec4899",
        surface: "#f8fafc",
        muted: "#e2e8f0",
        highlight: "#fef3c7",
      },
    },
  },
  plugins: [],
}
