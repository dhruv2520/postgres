const express = require("express");
const bodyParser = require("body-parser");
 const connection = require("./src/model/db.js");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000, () => {
  console.log("Server is running on port 5432.");
});