const db = require("../models");
const Exam = db.exams;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
      // Create a Tutorial
      const exam = {
        name: req.body.name,
        description: req.body.description,
        code: req.body.code,
        value: req.body.value,
        ref_value: req.body.ref_value
      };
    
      // Save Tutorial in the database
      Exam.create(exam)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Exam."
          });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {

  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
  Exam.findAll( { where: condition }).then( data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Erro recuperando lista de exames"
    });
  });
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Exam.findByPk(id)
  .then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: "[Erro recuperando Exame]" + err.message
    });
  });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Exam.findByPk(id)
  .then(data => {
    data.update(req.body).then(data => res.send(data)).catch(err => res.status(500).send({message: err.message}))
    // res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: "[Erro recuperando Exame]" + err.message
    });
  });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};
