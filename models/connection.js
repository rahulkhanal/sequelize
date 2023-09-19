const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sequelize", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

try {
  sequelize.authenticate();
  console.log("Database connection successfull.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;


// sequelize.drop() // drop all table from database