// Creating our Charities model
module.exports = function (sequelize, DataTypes) {
    // Creates a "Charity" model that matches up with DB
    var Charity = sequelize.define("Charity", {
        name: DataTypes.STRING,
        classification: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING
    });


    return Charity;

};


