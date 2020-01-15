// This file will include the connection to our database!!
// Used sequelize.or for help here

// Dependencies
const Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
// module.export is to be able to access it from other files.....
module.exports = new Sequelize("charityCompass_db", "root", "Taw9951019797", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

