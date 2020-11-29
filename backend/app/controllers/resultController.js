const db = require("../models");
const Result = db.results;

exports.create = (req, res) => {
    if (!req.body.exam_id && !req.body.value) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
      const result = {
        value: req.body.value,
        exam_id: req.body.exam_id
      };
      console.log(result)
    
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