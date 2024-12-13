/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom right, #3b82f6, #a855f7, #ec4899)",
      },
      fontFamily: {
        video: ['"video"', "serif"],
      },
    },
  },
  plugins: [],
};
