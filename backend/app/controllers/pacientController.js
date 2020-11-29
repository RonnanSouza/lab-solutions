const db = require("../models");
const Pacient = db.pacients;

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
      const pacient = {
        name: req.body.name,
        age: req.body.age,
        id: req.body.id,
        gender: req.body.gender,
        address: req.body.address,
      };
    
      Pacient.create(pacient)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Pacient."
          });
        });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Pacient.findByPk(id)
  .then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: "[Erro recuperando Paciente]" + err.message
    });
  });
};