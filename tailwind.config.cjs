/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "openSans": ["Open Sans", "sans-serif"]
      },
      colors: {
        gray: "#949cb0",
        blueHover: "#24baef",
        bgMain: "#131722",
        bgPrimary: "#1B212D"
      },
      height: {
        'header': "80px"
      },
      boxShadow: {
        'shadowHover': '0px 0px 0px 1px #80bdff',
        'shadow': 'rgba(0, 0, 0, 0.35) 0px 5px 15px;'
      }
    },
  },
  plugins: [],
}
