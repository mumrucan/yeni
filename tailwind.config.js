module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontSize: {
      xxs: '.67rem',
      xs: '.75rem',
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
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '245px',
      xxl: '410px',
    },
    fontFamily: {
      roboto: ['Roboto'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
