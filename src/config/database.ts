/* import { Sequelize } from 'sequelize';

// Cargar variables de entorno
import dotenv from 'dotenv';
dotenv.config();

// Configuración de la base de datos
const db = new Sequelize(
  process.env.DB_NAME as string,     // Nombre de la base de datos
  process.env.DB_USER as string,     // Usuario de la base de datos
  process.env.DB_PASSWORD as string, // Contraseña de la base de datos
  {
    dialect: 'mysql',               // Dialecto de la base de datos
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT), // Asegúrate de convertir el puerto a número
    define: {
      timestamps: false
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 3000000,
      idle: 10000
    },
    logging: false, // Desactiva el logging en producción
  }
);

export default db;
 */


import { Sequelize } from 'sequelize';

// Cargar variables de entorno
import dotenv from 'dotenv';
dotenv.config();

// Configuración de la base de datos
const db = new Sequelize(
  process.env.DB_NAME || 'PLANTA',     // Nombre de la base de datos
  process.env.DB_USER || 'sa',      // Usuario de la base de datos
  process.env.DB_PASSWORD || 'D0m5@5y5.', // Contraseña de la base de datos
  {
    dialect: 'mssql',               // Cambiar dialecto a mssql
    host: process.env.DB_HOST || 'domcar102.dragadosoffshoremexico.com',
    port: Number(process.env.DB_PORT) || 1433, // Puerto por defecto de SQL Server
    define: {
      timestamps: false
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 3000000,
      idle: 10000
    },
    dialectOptions: {
      options: {
        encrypt: false, // Cambiar a true si usas SSL
        trustServerCertificate: true, // Usar solo en desarrollo si no tienes un certificado
      },
    },
    logging: false, // Desactiva el logging en producción
  }
);

export default db;

