module.exports = (sequelize, Sequelize) => {
  const Pacient = sequelize.define("pacient", {
    name: {
      type: Sequelize.STRING
    },
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    age: {
      type: Sequelize.INTEGER
    },
    address: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
  });

  return Pacient;
};