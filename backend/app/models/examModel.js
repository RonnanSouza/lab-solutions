module.exports = (sequelize, Sequelize) => {
    const Exam = sequelize.define("exam", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      }
    });
  
    return Exam;
  };