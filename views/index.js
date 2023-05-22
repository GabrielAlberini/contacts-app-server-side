import express from "express";
import path from "path";
import { router } from "./router";

const app = express();
const port = process.env.PORT || 3000;

// Configuración del motor de plantillas EJS
app.set("views", path.join(__dirname, "/"));
app.set("view engine", "ejs");

// Middleware para el manejo de formularios
app.use(express.urlencoded({ extended: true }));

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, "views")));

// Utilización del enrutador
app.use(router);

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).render("404");
});

// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});
