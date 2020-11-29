const db = require("../models");
const Treatment = db.treatments;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.pacient_id) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
      const t = {
        value: req.body.value,
        pacientId: req.body.pacient_id
      };
    
      Treatment.create(t)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the exam result."
          });
        });
};

exports.findAll = (req, res) => {
  const pacientId = req.query.pacient_id;
  var condition = pacientId ? { pacientId: { [Op.eq]: pacientId } } : null;
  
  Treatment.findAll( { where: condition }).then( data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Erro recuperando lista de exames"
    });
  });
  
};

exports.findResults = (req, res) => {
  const id = req.params.id;
  
  Treatment.findOne({ where : {
    id: id
  }}).then(treatment => {
    treatment.getResults()
  }).then(results => {
    res.send(results)
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Erro recuperando resultado de exame"
    });
  })
  
};