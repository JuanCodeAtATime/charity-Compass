var Sequelize = require("sequelize");

var sequelize = new Sequelize("charity_compass", "root", "Daisy2990!", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;


