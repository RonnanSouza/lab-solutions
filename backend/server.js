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
db.sequelize.sync({force: true});

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