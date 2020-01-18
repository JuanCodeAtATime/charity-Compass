// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function (sequelize, DataTypes) {
    // Creates a "Charity" model that matches up with DB
    var Charity = sequelize.define("charities", {
        name: DataTypes.STRING,
        classification: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING
    });


    return Charity;

};


