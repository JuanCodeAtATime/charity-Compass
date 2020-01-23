var db = require("../models/");


module.exports = function (app) {
    // Get all charities
    app.get("/api/members", function (req, res) {
        console.log(req.body + "This is the req.body of .get all charities");
        db.Charity.findAll({}).then(function (results) {
            res.json(results);
        });
    });


    // Add new charity
    app.post("/api/new", function (req, res) {
        console.log("Charity Data:");
        console.log(req.body);
        db.Charity.create({
            name: req.body.name,
            classification: req.body.classification,
            city: req.body.city,
            state: req.body.state
        }).then(function (results) {
            res.json(results);
        });
    });

    // Delete a charity
    app.delete("/api/charity/:id", function (req, res) {
        console.log("Charity ID:");
        console.log(req.params.id);
        db.Charity.destroy({
            where: {
                id: req.params.id
            }
        }).then(function () {
            res.end();
        });
    });


};


