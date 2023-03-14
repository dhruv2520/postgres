module.exports = app => {
    const msuser = require("../model/db.js");


    app.get("/msuser",msuser.getmsuser)
}