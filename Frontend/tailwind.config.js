/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxs: '320px',
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '2536px',
  },
    extend: {},
  },
  fontSize: {
    md: '2.72em',
    xxs: '1.0em',
    xs: '1.2em',
    sm: '1.4em',
    tiny: '1.4em',
    base: '1.6em',
    lg: '1.8em',
    xl: '2.0em',
    '2xl': '2.4em',
    '3xl': '3.0em',
    '4xl': '3.6em',
    '5xl': '4.8em',
    '6xl': '6.4em',
    '7xl': '8.0em',
},
  plugins: [],
}

