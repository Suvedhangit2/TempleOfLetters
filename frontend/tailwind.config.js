/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
            primary: "#FF8DC7", // Custom Blue Color
            secondary: "#146C94", // Custom Orange
            thirdy: "#AFD3E2",  // Custom Dark Green
            fourthy:"#F6F1F1",
          },
      },
    },
    plugins: [],
  };
  