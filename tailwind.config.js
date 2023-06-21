/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
        body: ["Montserrat"],
      },
      colors: {
        bgBlack: "#261E28",
        primary: "#A8A5A9",
        secondary: "#6592FE",
        footerBorder: "#E1E1E1",
        twitter: "#55ACEE",
        facebook: "#3B5998",
        linkedIn: "#007AB9",
      },
    },
  },
  plugins: [],
};