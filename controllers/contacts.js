import { db } from "../config/configuration_firebase.js";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { showNewError } from "../utils/errors.js";

export const getAllContacts = async (_, res) => {
  try {
    const data = await getDocs(collection(db, "contacts"));
    const { docs } = data;
    const contacts = docs.map((c) => ({ id: c.id, data: c.data() }));
    res.render("contacts", { contacts });
  } catch (error) {
    res.render("404");
    showNewError("Error getting contacts", 404);
  }
};

export const getContact = async (req, res) => {
  try {
    const id = req.params.id;
    const docRef = doc(db, "contacts", id);
    const docSnap = await getDoc(docRef);
    const selected = docSnap.data();
    res.render("index", {
      action: `/contacts/${id}`,
      pageTitle: "Actualizar contacto",
      buttonLabel: "Actualizar contacto",
      selected,
      id,
    });
  } catch (error) {
    res.render("404");
    showNewError("Error getting contact", 404);
  }
};

export const addNewContact = async (req, res) => {
  try {
    const body = req.body;
    const newContact = { ...body };
    await addDoc(collection(db, "contacts"), newContact);
    res.redirect("/contacts");
  } catch (error) {
    res.render("404");
    showNewError("Error creating contact", 400);
  }
};

export const updateContact = async (req, res) => {
  try {
    const body = req.body;
    const id = req.params.id;
    const contactRef = doc(db, "contacts", id);
    await updateDoc(contactRef, body);
    res.redirect("/contacts");
  } catch (error) {
    res.render("404");
    showNewError("Error updating contact", 400);
  }
};

export const deleteContact = async (req, res) => {
  try {
    const id = req.params.id;
    await deleteDoc(doc(db, "contacts", id));
    res.redirect("/contacts");
  } catch (error) {
    res.render("404");
    showNewError("Error deleting contact", 400);
  }
};
