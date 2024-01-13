/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container:{
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg:"6rem"
      }
    },
    extend: {
      colors:{
        custom: {
          primary: "#77905d",
          primaryLight: "#8a9d77",
          secondary: "#28245b",
          charcoal: "#7e7774",
          charcoalLight: "#959595"
        }
      },
      fontFamily: {
        ShabnamThin: "Shabnam Thin",
        ShabnamMedium: "Shabnam Medium",
        ShabnamBold: "Shabnam Bold",
        EstedadMedium: "Estedad Medium",
        EstedadLight: "Estedad Light",
        EstedadBold: "Estedad Bold",
        estefadeh1 : "estefadeh1"
      },
      fontSize: {
        xxs : '8px',
        xs: '10px',
        sm: '12px',
      }
    },
  },
  plugins: [],
}

