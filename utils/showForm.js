export const showForm = (req, res) => {
  res.render("index", {
    action: "contacts",
    pageTitle: "Crear contacto",
    selected: undefined,
    buttonLabel: "Crear contacto",
  });
};
