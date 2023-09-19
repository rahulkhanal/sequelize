const db = require("../models/connection");
var User = db.user;

//add user
var addUser = async (req, resp) => {
  const data = req.body;
  if (Array.isArray(data)) {
    await User.bulkCreate(data); //if tablename is similar to req.body name
    // data.map(async (item) => {
    //     const { fname, lname } = item;
    //   requestDta = await User.create({ firstName: fname, lastName: lname });
    // });
    resp.json({ message: "product inserted successfully", data }).status(200);
  } else {
    const { fname, lname } = data;
    const jane = User.build({ firstName: fname, lastName: lname });
    await jane.save();
    // OR use User.create(req.body) i.e build+save
    resp
      .json({
        message: "product inserted successfully",
        data: jane.toJSON(),
      })
      .status(200);
  }
};

//get all user
var getAllUser = async (req, resp) => {
  const data = await User.findAll();
  resp.status(200).json({ data });
};

// get one user
var getSingleUser = async (req, resp) => {
  const { id } = req.params;
  const data = await User.findOne({
    where: {
      id: id,
    },
  });
  resp.status(200).json({ data });
};

//delete user
var deleteSingleUser = async (req, resp) => {
  const { id } = req.params;
  const data = await User.destroy({
    where: {
      id: id,
    },
  });
  resp.status(200).json({ message: "Deleted Sucessfully", data });
};

//update user
var updateSingleUser = async (req, resp) => {
  const { id } = req.params;
  const updatedDta = req.body;
  const data = await User.update(updatedDta, {
    where: {
      id: id,
    },
  });
  resp.status(200).json({ message: "Updated Sucessfully", data });
};

module.exports = {
  addUser,
  getAllUser,
  getSingleUser,
  deleteSingleUser,
  updateSingleUser,
};
