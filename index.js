import express from "express";
import {
  addNewContact,
  getAllContacts,
  deleteContact,
  showForm,
} from "./controllers/contacts.js";

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("styles"));
app.use(express.urlencoded({ extended: true }));

app.get("/", showForm);
app.get("/contacts", getAllContacts);
app.post("/agregar-contacto", addNewContact);
app.get("/borrar/:id", deleteContact);

app.listen(3000, () => {
  console.log("Aplicación iniciada en http://localhost:3000");
});
