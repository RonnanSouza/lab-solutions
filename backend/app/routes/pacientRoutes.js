module.exports = app => {
  const pacients = require("../controllers/pacientController.js");

  var router = require("express").Router();

  router.post("/", pacients.create);

  router.get("/", pacients.findAll);
  router.get("/:id", pacients.findOne);

  app.use('/api/pacients', router);
};