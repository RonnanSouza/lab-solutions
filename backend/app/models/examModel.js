module.exports = (sequelize, Sequelize) => {
    const Exam = sequelize.define("exam", {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING,
        unique: true
      },
      value: {
        type: Sequelize.INTEGER
      },
      ref_value: {
        type: Sequelize.JSONB
      },
    });
  
    return Exam;
  };