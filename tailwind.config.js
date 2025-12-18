module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        assetverse: {
          primary: "#1e40af",
          secondary: "#0f172a",
          accent: "#22c55e",
          neutral: "#1f2937",
          "base-100": "#ffffff",
          "base-200": "#f1f5f9",
          info: "#0ea5e9",
          success: "#22c55e",
          warning: "#facc15",
          error: "#ef4444",
        },
      },
    ],
  },
};
