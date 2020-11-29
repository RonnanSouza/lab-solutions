module.exports = app => {
  const results = require("../controllers/resultController.js");

  var router = require("express").Router();

  router.post("/", results.create);

  app.use('/api/results', router);
};