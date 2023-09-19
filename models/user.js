const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      // allowNull defaults to true
      type: DataTypes.STRING,
      // defaultValue: ""
      // unique: true
    },
  },
  {
    freezeTableName: true, // same table name as model
    // timestamps: false, //if we want no createdAt and updatedAt
    // createdAt: true,
    // updatedAt: false
    // updatedAt: "updated_at", //change name
  }
);

module.exports = User;
