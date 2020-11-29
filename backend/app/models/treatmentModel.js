module.exports = (sequelize, Sequelize) => {
  const Treatment = sequelize.define("treatment", {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true
    },
  });
  return Treatment;
};