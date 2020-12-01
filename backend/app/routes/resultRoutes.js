module.exports = app => {
  const results = require("../controllers/resultController.js");

  var router = require("express").Router();

  router.post("/", results.create);

  router.post("/:id", results.findOne);

  app.use('/api/results', router);
};