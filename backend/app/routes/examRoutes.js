module.exports = app => {
    const exams = require("../controllers/examController.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", exams.create);
  
    // Retrieve all Tutorials
    router.get("/", exams.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", exams.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", exams.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", exams.delete);
  
    // Delete all Tutorials
    router.delete("/", exams.deleteAll);
  
    app.use('/api/exams', router);
  };