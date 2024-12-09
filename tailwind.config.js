/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to top, #fecdd3 0%, #e0e7ff 65%, #7dd3fc 100%)",
      },
      fontFamily: {
        video: ['"video"', "serif"],
      },
    },
  },
  plugins: [],
};
