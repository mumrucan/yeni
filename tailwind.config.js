module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        100: '22rem',
        101: '55rem',
        102: '80rem',
        103: '15rem',
      },
      outline: {
        black: '1px solid #000000',
      },
    },
    fontSize: {
      xxs: '.67rem',
      xs: '.72rem',
      xss: '.85rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      _2xl: '1.5rem',
      _3xl: '1.875rem',
      _4xl: '2.25rem',
      _5xl: '3rem',
      _6xl: '4rem',
      _7xl: '5rem',
    },
    height: {
      _5: '18px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      lgx: '40px',
      lgg: '70px',
      xl: '240px',
      xxl: '300px',
      _3xl: '500px',
      _2xl: '450px',
      smx: '10px',
      h140: '110px',
    },
    fontFamily: {
      roboto: ['Poppins'],
    },
    screens: {
      ssm: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      lgx: '1366px',
      xl: '1280px',
      xxl: '1920px',
      _2xl: '2440px',
    },
    maxHeight: {
      deneme: '140px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
