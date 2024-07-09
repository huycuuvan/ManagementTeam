// the defined model is the class itself
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("teammanagement", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connect successfully");
  } catch (error) {
    console.log("Failed", error);
  }
};

module.exports = connectDb;
