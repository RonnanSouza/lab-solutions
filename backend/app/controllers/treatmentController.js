const db = require("../models");
const Treatment = db.treatments;

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