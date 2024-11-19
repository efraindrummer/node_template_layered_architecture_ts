// src/index.ts
import express, { Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { User } from "../src/models/user.js"
import db from "../src/config/database.js";
import { config } from "dotenv";

const envFile = process.env.NODE_ENV === 'production' ? '.env.prod' : '.env';
config({ path: envFile });

const app = express();
const PORT = process.env.PORT;

db.authenticate()
    .then(() => { console.log('Base de datos conectada')})
    .catch(error => { console.log(error) });

app.use(express.urlencoded({ extended: true, limit: '50mb'}));
app.use(express.json({ limit: '50mb' }));

// Configurar __dirname para ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')))
// Configurar EJS
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views")) ;

// Ruta principal
app.get("/", async(req: Request, res: Response) => {
    console.log('desde el index primer controler...')
    try {
        const user = await User.findAll();
        const fecha = new Date()
        const logo_url: string = process.env.BASE_URL + "images/dragados_logo.png"

        const data = {
            user,
            base_url: process.env.BASE_URL,
            logo_url,
            fecha
        };

        res.render("index", data);
    } catch (error) {
        console.log("Error en la consulta de usuarios:", error);
        res.status(500).send("Error en la consulta de usuarios");
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
