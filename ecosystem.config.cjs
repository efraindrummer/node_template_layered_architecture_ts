module.exports = {
    apps: [
      {
        name: "migration-app", // Nombre de la aplicación
        script: "./dist/index.js", // Archivo de entrada de la aplicación (compilado)
        watch: false, // No monitorear cambios (para producción)
        instances: 1, // Cambia a "max" para usar todos los núcleos del CPU
        autorestart: true, // Reinicia si falla
        max_memory_restart: "500M", // Reinicia si usa más de 500 MB de RAM
        env: {
          NODE_ENV: "production" // Variable de entorno
        },
        env_development: {
          NODE_ENV: "development" // Variable de entorno para desarrollo
        }
      },
      {
        name: "tailwind-builder", // Proceso para generar estilos CSS
        script: "npx",
        args: "tailwindcss -i ./src/public/css/styles.css -o ./src/public/css/output.css --watch",
        autorestart: false, // No reiniciar automáticamente
        watch: false, // No monitorear cambios
      }
    ]
  };
  