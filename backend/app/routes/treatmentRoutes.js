module.exports = app => {
  const treatments = require("../controllers/treatmentController");

  var router = require("express").Router();

  router.post("/", treatments.create);

  router.get("/", treatments.findAll);

  router.get("/:id", treatments.findResults);

  router.get("/:id/details", treatments.details);

  app.use('/api/treatments', router);
};