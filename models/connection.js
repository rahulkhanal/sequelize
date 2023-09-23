const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("sequelize", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
  logging: false, //hide message in terminal
});

try {
  sequelize.authenticate();
  console.log("Database connection successfull.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.user = require("./user")(sequelize, DataTypes);
db.contact = require("./contact")(sequelize, DataTypes);

db.contact.hasOne(db.user, {
  foreignKey: "myFooId",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
}), //custom foreign key name but you will het both myFoodId and contactID

db.user.belongsTo(db.contact); //contactID must be added to user

db.sequelize.sync({ force: false }); // sync all model instead individually

module.exports = db;

// sequelize.drop() // drop all table from database
