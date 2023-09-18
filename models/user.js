const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // same table name as model
    freezeTableName: true,
  }
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true
