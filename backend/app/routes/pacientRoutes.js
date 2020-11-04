module.exports = app => {
  const pacients = require("../controllers/pacientController.js");

  var router = require("express").Router();

  router.post("/", pacients.create);

  app.use('/api/pacients', router);
};