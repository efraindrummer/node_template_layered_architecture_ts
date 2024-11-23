module.exports = {
  content: [
    "./src/views/**/*.ejs",  // O la ruta que corresponda a tus vistas EJS
    "./src/**/*.ts",         // Asegúrate de incluir también los archivos TypeScript
    "./src/public/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      }
    },
    fontFamily: {
      sans: ['Roboto', 'Arial', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    darkMode: 'class'
  },
  plugins: [],
}
