module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: {
          1: "#F27323",
          2:  "#FAA63B",
        },
        dark:  {
          1: "#111111",
          2:  "#707070",
          3:  "#727272",
          4:  "#2B2B2B",
          5:  "#141414",
          6:  "#BCBCBC",
        },
        input: "#f2f2f2",
        asgreen:  "#1DD400",
            
      },
      spacing: {
        '5/100': '5%',
        '10/100': '10%',
        '15/100': '15%',
        '30/100': '30%',
        '35/100': '35%',
        '45/100': '45%',
        '55/100': '55%',
        '65/100': '65%',
        '75/100': '75%',
        '85/100': '85%',
        '95/100': '95%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
