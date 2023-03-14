const express = require("express");
const bodyParser = require("body-parser");
// const db = require("./src/model/db.js");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//
const { Pool } = require('pg');
// const connection = require('../config/connection.js');
const db =  new Pool({
  host: "localhost",
  user:"postgres",
  password:"admin",
  database:"demo",
  port:5432
})
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// get api

app.get('/msuser', (req, res)=>{
  db.query(`Select * from msuser`, (err, result)=>{
      if(!err){
          res.send(result.rows);
      }
  });
  db.end;
})
db.connect();

//

app.get('/msuser/:id', (req, res)=>{
  db.query(`Select * from msuser where id=${req.params.id}`, (err, result)=>{
      if(!err){
          res.send(result.rows);
      }
  });
  db.end;
})

db.connect();

//
app.get('/msuser',(req,res)=>{
  db.query(`select 
                 * 
                 from
                    "folder"
    innerjoin
     "metting" on "metting"."folderID"= "folder".ID 
     inner join 
     "msuser" on "msuser"."mettingId"="metting".Id
      where
       cast("metting"."folderID"as text)like`)}
)

// module.exports = db;


app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});