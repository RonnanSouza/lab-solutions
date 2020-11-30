const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const seed = () => {
  return Promise.all([
    db.pacients.create({name: "Ronan", id: 111, age: 25, address: "Rua Wilson Pereira", gender: "male"}),
    db.pacients.create({name: "Fernanda", id: 112, age: 24, address: "Avenida Almirante Barroso", gender: "female"}),
    db.exams.create({name: "Glicose", code: "GLIC", ref_value: {male_upper: 120, male_lower: 60, female_upper: 120}, female_lower: 60}),
    db.exams.create({name: "Colesterol", code: "COL", ref_value: {male_upper: 120, male_lower: 60, female_upper: 120}, female_lower: 60}),
    db.exams.create({name: "Triglicerídeos", code: "TRIG", ref_value: {male_upper: 120, male_lower: 60, female_upper: 120}, female_lower: 60}),
    db.results.create({value: 80}),
    db.results.create({value: 90}),
    db.results.create({value: 150}),
    db.treatments.create({}),
    db.treatments.create({})
  ])
  .then(([ronan, fernanda, glic, col, trig, result1, result2, result3, t1, t2]) => {
    return Promise.all([
      result1.setExam(glic),
      result2.setExam(col),
      result3.setExam(trig),
      result1.setTreatment(t1),
      result2.setTreatment(t1),
      result3.setTreatment(t2),
      t1.setPacient(fernanda),
      t2.setPacient(ronan)
    ]);
  })
  .catch(error => console.log(error));
};

db.sequelize.sync({force: true}).then(() => seed());

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Lab Solutions." });
});

require("./app/routes/examRoutes.js")(app);
require("./app/routes/pacientRoutes.js")(app);
require("./app/routes/resultRoutes.js")(app);
require("./app/routes/treatmentRoutes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});