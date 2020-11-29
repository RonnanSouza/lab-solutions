module.exports = app => {
  const treatments = require("../controllers/treatmentController");

  var router = require("express").Router();

  router.post("/", treatments.create);

  app.use('/api/treatments', router);
};