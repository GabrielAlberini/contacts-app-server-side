import express from "express";
import { showForm } from "../utils/showForm.js";
import {
  addNewContact,
  getAllContacts,
  deleteContact,
  getContact,
  updateContact,
} from "../controllers/contacts.js";

//App
const app = express();

//Router
export const router = express.Router();

//Default view
router.get("/", showForm);

//Routes
router.get("/contacts", getAllContacts);
router.get("/contacts/post/:id", getContact);
router.post("/contacts", addNewContact);
router.post("/contacts/:id", updateContact);
router.get("/contacts/:id", deleteContact);
