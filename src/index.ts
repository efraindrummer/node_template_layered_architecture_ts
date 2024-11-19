// src/index.ts
import express, { NextFunction, Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";
import db from "../src/config/database.js";
import { config } from "dotenv";
import { index } from "./controllers/index/index_controller.js";
import router_training from "./routes/web/training_routes.js";

const envFile = process.env.NODE_ENV === 'production' ? '.env.prod' : '.env';
config({ path: envFile });

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
    res.locals.fecha = new Date().getFullYear(); // Pasamos el año actual
    next();
});

const PORT = process.env.PORT;

db.authenticate()
    .then(() => { console.log('Base de datos conectada')})
    .catch(error => { console.log(error) });

app.use(express.urlencoded({ extended: true, limit: '50mb'}));
app.use(express.json({ limit: '50mb' }));

// Configurar __dirname para ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'src/public')));

// Configurar EJS
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

/* ROUTES */

app.use('/training', router_training)

app.get("/login", index);
// Ruta principal
/* app.get("/login", (req: Request, res: Response, next: NextFunction) => {
    if (req.session.loged) {
        res.redirect("/"); // Si el usuario está logueado, redirigir a la página principal
    } else {
        res.render("index", { base_url: process.env.BASE_URL }); // Si no está logueado, renderizar el login
    }
}); */



// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
