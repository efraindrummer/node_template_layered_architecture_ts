module.exports = {
  content: [
    "./src/views/**/*.ejs",  // O la ruta que corresponda a tus vistas EJS
    "./src/**/*.ts",         // Asegúrate de incluir también los archivos TypeScript
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
