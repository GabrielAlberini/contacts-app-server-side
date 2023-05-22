import express from "express";
import { showForm } from "./utils/showForm.js";
import { router } from "./router/router.js";

const app = express();
const port = process.env.PORT || 3000;

//Ejs config
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", router);

//Server
app.listen(port, () => {
  console.log("Started app in http://localhost:3000");
});
