// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"], // JSX ni albatta qo‘sh!
  theme: {
    extend: {
      animation: {
        marquee: "marquee 10s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
