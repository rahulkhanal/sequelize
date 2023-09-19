const db = require("../models/connection");
var User = db.user;
var addUser = async (req, resp) => {
  const jane = User.build({ firstName: "Jane" });
  await jane.save();
  // OR use User.create() i.e build+save
  resp
    .json({ message: "product inserted successfully", data: jane.toJSON() })
    .status(200);
};

module.exports = { addUser };
