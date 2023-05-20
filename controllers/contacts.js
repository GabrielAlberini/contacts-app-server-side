import { db } from "../config/configuration_firebase.js";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const getAllContacts = async (req, res) => {
  try {
    const data = await getDocs(collection(db, "agenda_contactos"));
    const { docs } = data;
    let contacts = docs.map((c) => ({ id: c.id, data: c.data() }));
    res.render("contacts", { contacts });
  } catch (error) {
    console.error("Error al traer contactos", error);
  }
};

export const showForm = (req, res) => {
  res.render("index");
};

export const addNewContact = async (req, res) => {
  try {
    const body = req.body;
    const newContact = { ...body };
    await addDoc(collection(db, "agenda_contactos"), newContact);
    res.redirect("/");
  } catch (error) {
    console.error("Error al agregar el contacto:", error);
    res.redirect("/");
  }
};

// export const updateContact = async (req, res) => {
//   console.log(req.params.id);
// };

export const deleteContact = async (req, res) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, "agenda_contactos", id));
    res.redirect("/");
  } catch (error) {
    console.error("Error al eliminar el contacto:", error);
    res.redirect("/");
  }
};
