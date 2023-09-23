const db = require("../models/connection");
var Contact = db.contact;

//add user
var addContact = async (req, resp) => {
  const data = req.body;
  if (Array.isArray(data)) {
    await Contact.bulkCreate(data); //if tablename is similar to req.body name
    // data.map(async (item) => {
    //     const { fname, lname } = item;
    //   requestDta = await User.create({ firstName: fname, lastName: lname });
    // });
    resp.json({ message: "product inserted successfully", data }).status(200);
  } else {
    const { address, number } = data;
    const jane = Contact.build({ address: address, number: number });
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

module.exports = { addContact };
