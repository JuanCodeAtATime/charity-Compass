// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
//
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
//
module.exports = function (app) {

    app.get("/", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            window.location.href = "/members";
        }
        res.sendFile(path.join(__dirname, "/../public/signup.html"));
    });
    //
    app.get("/login", function (req, res) {
        console.log('req')
        // If the user already has an account send them to the members page
        if (req.user) {
            console.log('hitting condition')
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "/../public/login.html"));
    });
    //
    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be 
    //redirected to the signup page
    app.get("/members", isAuthenticated, function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/members.html"));
    });

    // add route loads the members.html page, where users can enter new books to the db
    app.get("/members", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/members.html"));
    });



};