const db = require("../models");
const Result = db.results;
const Exam = db.exams;

exports.create = (req, res) => {
    if (!req.body.exam_id && !req.body.value) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
      const result = {
        value: req.body.value,
        examId: req.body.exam_id,
        treatmentId: req.body.treatment_id
      };
    
      Result.create(result)
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

exports.findOne = (req, res) => {
  const id = req.params.id;

  Result.findByPk(id)
  .then(data => {
    Exam.findByPk(data.dataValues.examId)
  }).then(data => {
    console.log(data)
    res.send(data)
  })
  .catch(err => {
    res.status(500).send({
      message: "[Erro recuperando Resultado]" + err.message
    });
  });
};