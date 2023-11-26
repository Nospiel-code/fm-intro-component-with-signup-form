/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryRed: "hsl(0, 100%, 74%)",
        primaryGreen: "hsl(154, 59%, 51%)",
        primaryGreenDark: "hsl(154, 59%, 42%)",
        secondaryBlue400:"hsl(248, 32%, 49%)",
        secondaryBlue100:"hsl(249, 10%, 26%)",
        secondaryBlue700:"hsl(246, 25%, 77%)",
        secondaryBlue900:"hsl(246, 25%, 92%)"
      },
      backgroundImage: {
        bgDesktop: "url(../images/bg-intro-desktop.png)",
        bgMobile: "url(../images/bg-intro-mobile.png)",
        error: "url(../images/icon-error.svg)"
      },
      backgroundPosition: {
        errorPos: "95% center"
      },
      screens: {
        xs: "375px"
      },
      boxShadow: {
        customShadow: "0 .375rem 0 0 hsla(14, 10%, 38%, .25)",
        customShadowDark: "0 .375rem 0 0 hsla(14, 10%, 38%, .35)",
      },
      fontSize: {
        xxs: ".5rem"
      },
    },
  },
  plugins: [],
}

