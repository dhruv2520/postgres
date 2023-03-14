const { Client } = require('pg');
const connection = require('../config/connection.js');
const db =  new Client({
  host: connection.HOST,
  user:connection.USER,
  password:connection.PASSWORD,
  database:connection.DB,
  port:connection.port
})
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection;










