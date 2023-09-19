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

var getAllUser = async (req, resp) => {
  const data = await User.findAll();
  resp.status(200).json({ data });
};
var getSingleUser = async (req, resp) => {
  const { id } = req.params;
  const data = await User.findOne({
    where: {
      id: id,
    },
  });
  resp.status(200).json({ data });
};
module.exports = { addUser, getAllUser, getSingleUser };
