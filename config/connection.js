const Sequelize = require("sequelize");

let sequelize = new Sequelize("authentication", "root", "Daisy2990!", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;


