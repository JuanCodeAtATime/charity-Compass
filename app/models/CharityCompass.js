
// Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
const db = require("../config/database");

// Creates a "Book" model that matches up with DB
const CharityCompass = db.define("CharityCompass", {
    name: Sequelize.STRING,
    category: Sequelize.STRING,
    cause: Sequelize.STRING,
    location: Sequelize.STRING
});

// Syncs with DB
//charityCompass_db.sync();

// Makes the Charity Model available for other files (will also create a table)
module.exports = CharityCompass;