module.exports = (sequelize, DataTypes) => {
  try {
    const Contact = sequelize.define(
      "Contact",
      {
        address: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        number: {
          type: DataTypes.INTEGER,
        },
      },
      {
        freezeTableName: true,
      }
    );
    return Contact;
  } catch (error) {
    console.log(error.message);
  }
};
