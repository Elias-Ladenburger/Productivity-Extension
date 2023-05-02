const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
      checkmark: 'checkmark',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    colors: {
      primary: colors.white, 
      primaryContrast: "#002147", 
      /*primaryContrast: "#21395e",*/
      primaryGradient1: "00344b",
      primaryGradient2: "#002b32",
      primaryGradient3: "#00211a",
      primaryGradient4: "#011601",

      navy: "#0A1C3D",
      darkGrey: "#3D3D3D",
      yellow: "#FBC02D",
      white: "#F5F5F5",
      lightRed: "#EABFBF",

      emphasis: "#C98D26",
      teal: "#008080",
      grey: "#808080",
      orange: "#FFA500",
		  blueMidnight: "#191970",
		  blueNavy: "#002147",
		  blueBlack: "#161633",
		  desertSun: "#C98D26",
      blueRoyal: "#4169e1",
      blueGrey: "#6699CC",
      blueGrotto: "#0476D0",
      blueBaby: "#89CFF0",
		  black: colors.black,
      //white: colors.white,
    },
    backgroundImage: {
      abstractBG: "url('../img/Abstract-mountains-bg.jpg')"
    },
    fontFamily: {
      sans: ["Helvetica"],
      serif: []
    }
  },
  plugins: [],
}
