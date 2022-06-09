module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#70ba65",
          secondary: "#68af62",
          accent: "#02162b",
          neutral: "#00283a",
          "base-100": "#dedee0",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
