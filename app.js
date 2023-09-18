const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
require("./models/connection");

//declaration
const PORT = process.env.PORT || 8282;

//middlewares
app.use(bodyParser.json());

//server
app.listen(PORT, (err) => {
  if (err) throw err;
  else {
    console.log(`connected your app in PORT:${PORT}`);
  }
});
