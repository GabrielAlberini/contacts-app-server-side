import express from "express";
import { showForm } from "./utils/showForm.js";
import { router } from "./router/router.js";

const app = express();

//Ejs config
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", router);

//Server
app.listen(3000, () => {
  console.log("Started app in http://localhost:3000");
});
