const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./prod-extension/**/*.{html,js}'],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
      checkmark: 'checkmark'
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    },
    colors: {
      primary100: '#0077FF',
      primary200: '#006BE5',
      primary300: '#0060CF',
      primary400: '#0050AB',
      primary: '#00499E',
      primary600: '#00408A',
      primary700: '#003573',
      primary800: '#002A5A',
      primary900: '#002249',

      secondary: '#91009E',
      tertiary: '',

      success100: '#00F218',
      success200: '#00D715',
      success300: '#00C514',
      success400: '#00A611',
      success: '#009D10',
      success600: '#018E0F',
      success700: '#00710B',
      success800: '#00600A',
      success900: '#005C09',

      warning: '#9e9800',
      failure: '#9E0000',
      inactive: '#9E9E9E',
      black: colors.black,
      white: colors.white,

      bgGrey100: '#B3D6FF',
      bgGrey200: '#A1C0E5',
      bgGrey300: '#91ADCF',
      bgGrey400: '#7D95B2',
      bgGrey500: '#6F859E',
      bgGrey600: '#60748A',
      bgGrey700: '#506073',
      bgGrey800: '#3E4B59',
      bgGrey900: '#343E4A',

      neutral100: '#FFFFFF',
      neutral200: '#E6E6E6',
      neutral300: '#91D1D1D1',
      neutral400: '#B3B3B3',
      neutral: '#9E9E9E',
      neutral600: '#8A8A8A',
      neutral700: '#737373',
      neutral800: '#595959',
      neutral900: '#474747'
    },
    backgroundImage: {
      abstractBG: "url('../img/Abstract-mountains-bg.jpg')"
    },
    fontFamily: {
      sans: ['Helvetica'],
      serif: []
    }
  },
  plugins: []
};
