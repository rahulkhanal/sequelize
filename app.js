const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const {
  addUser,
  getAllUser,
  getSingleUser,
  deleteSingleUser,
  updateSingleUser,
} = require("./controllers/user");
require("dotenv").config();
require("./models/connection");
// const User = require("./models/user");

//-----model
// User.sync({ force: true });  //if user table exists then it creates one deleting other
// User.sync({ alter: true });  //if user table exists then update it
// User.drop();  //Drop Table
// User.sync(); //Create table if it doesnt exist

//-----declaration
const PORT = process.env.PORT || 8282;

//-----middlewares
app.use(bodyParser.json());

//----routes
app.post("/add-user", addUser);
app.get("/get-all-users", getAllUser);
app.get("/get-single-users/:id", getSingleUser);
app.delete("/delete-single-users/:id", deleteSingleUser);
app.patch("/update-single-users/:id", updateSingleUser);

//-----server
app.listen(PORT, (err) => {
  if (err) throw err;
  else {
    console.log(`connected your app in PORT:${PORT}`);
  }
});
