const db = require("../models/connection");
var User = db.user;
var Contact = db.contact;

var oneToOne = async (req, resp) => {
  const data = await User.findAll({
    include: Contact,
  });
  resp.status(200).json({ data });
};

module.exports = { oneToOne };
