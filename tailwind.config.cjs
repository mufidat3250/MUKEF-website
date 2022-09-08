/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green900: "#070903",
        gray900: "#2D2D2D",
        gray1000: "#1D2319",
        lighgray2: "rgba(255, 255, 255, 0.2)",
        lighgray4: "rgba(255, 255, 255, 0.5)",
        gray200: "#F0F0F0",
        gray300: "#D8D8D8",
        gray400: "#E7E6E6",
        gray500: "#D5D5D5",
        gray600: "#F2F2F2",
        grayDark: "rgba(0, 0, 0, 0.3)",
        gray100: "#5F5F5F",
        gray1100: "#464646",
        gray1200: "#404040",
        greybutton: "#F2F2F2",
        textbutton: "#858585",
        haveaccount: "#696969",
        bluebuttontext: "#0B8EC2",
        gray1300: "rgba(255, 255, 255, 0.4)",
        gray1400: "#858585",
        gray1500: "#222222",
        mainblack: "#100C2A",
        gray1600: "#434343",
        bordergrey: "#F5F5F5",
      },
      backgroundImage: (theme) => ({
        "Home-Image": "url('/public/images/firstPageImage.png')",
        "About-Image": "url('/public/images/image 11.png')",
        "contact--image": "url(/public/images/googleMap.png)",
      }),
      boxShadow: {
        "3xl":
          "-4px 10px 42px rgba(0, 0, 0, 0.25), -10px 4px 42px 18px rgba(103, 175, 216, 0.24)",
      },
    },
  },
  plugins: [],
};
