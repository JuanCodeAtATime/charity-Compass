// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Charity" model that matches up with DB
var Charity = sequelize.define("charities", {
    name: Sequelize.STRING,
    classification: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING
});

// Syncs with DB
Charity.sync();
// Makes the Charity Model available for other files (will also create a table)
module.exports = Charity;

