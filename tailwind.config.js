/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      'verde-agua': '#D9EBEB',
      'verde-gris': '#56718C',
      'azul-oscuro': '#1F496F',
      'cafe-precio': '#C7B19C',
    },
    fontFamily: {
      'alice': 'Alice',
      'montserrat': 'Montserrat', 
      'h1': 'Alice',
      'h2': 'Alice',
      'h3': 'Alice',
      'h4': 'Alice',
      'h5': 'Alice',
      'h6': 'Alice',
      'body': 'Montserrat',
    },
    extend: {
      backgroundImage:{
        'foto1': "url('../img/01-Foto.jpg')",
        'foto2': "url('../img/02-Foto.jpg')",
        'foto3': "url('../img/03-Foto.jpg')",
        'foto4': "url('../img/04-Foto.jpg')",
        'foto5': "url('../img/05-Foto.jpg')",
      }
    },
  },
  plugins: [],
}

