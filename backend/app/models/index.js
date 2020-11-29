const dbConfig = require("../config/database.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.exams = require("./examModel")(sequelize, Sequelize);
db.pacients = require("./pacientModel")(sequelize, Sequelize);
db.results = require("./resultModel")(sequelize, Sequelize);
db.treatments = require("./treatmentModel")(sequelize, Sequelize);
db.results.belongsTo(db.exams);
db.exams.hasMany(db.results);
db.treatments.hasMany(db.results);
db.treatments.belongsTo(db.pacients);
module.exports = db;