export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent:  "#635BFF",
        accentDark:"#5246E0",
        warn:    "#FFCA1B",
        black:   "#000000",
        white:   "#FFFFFF",
        gray900: "#1A1A1A",
        gray500: "#8C94A3",
      },
      borderRadius: {
        xlTop: "48px 48px 0 0",
      },
      fontFamily: { 
        inter: ["Inter", "sans-serif"] 
      },
    },
  },
  plugins: [],
}; 