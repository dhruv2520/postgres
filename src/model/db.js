const postgres = require("postgres");
const connection = require("../config/connection.js");

// Create a connection to the database
const  connection = postgres.createConnection({
  host: connection.HOST,
  user: connection.USER,
  password: connection.PASSWORD,
  database: connection.DB
});

// open the MySQL connection
connection.connect(error => {
  // if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;