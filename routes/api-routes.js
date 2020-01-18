// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
// var Charity = require("../models/charities.js");
var Charity = require("../models/");

module.exports = function (app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local", {
        // const stringified = JSON.stringify(res)
        // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
        // So we're sending the user back the route to the members page because the redirect will happen on the front end
        // They won't get this or even be able to access this page if they aren't authed
        successRedirect: '/members',
        failureRedirect: '/api/login',
        failureFlash: true

    }));
    //
    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", function (req, res) {

        db.User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }).then(function () {
            // res.redirect("/login");
            let name = req.body.name;
            let email = req.body.email;
            let password = req.body.password;
            console.log("==========================")
            console.log("SUCCESS!" + name + " and his email(" + email + ") has been successfully registered.");
            console.log("==========================")

            // res.send should be at the bottom of your function body
            // res.send("hello");
            res.redirect("/login");


        }).catch(function (err) {
            console.log(err);
            res.json(err);
            // res.status(422).json(err.errors[0].message);
        });

    });
    //
    // Route for logging user out
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });
    //
    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function (req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        }
        else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });

    // Get all charities
    app.get("/api/members", function (req, res) {
        Charity.findAll({}).then(function (results) {
            res.json(results);
        });
    });


    // Add new charity
    app.post("/api/new", function (req, res) {
        console.log("Charity Data:");
        console.log(req.body);
        Charity.create({
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
        Charity.destroy({
            where: {
                id: req.params.id
            }
        }).then(function () {
            res.end();
        });
    });


};


