const express = require('express');
const router = express.Router();
const db = require("../models")
const CharityCompass = require("../models").CharityCompass
//Route for /Charity
//router.get('/', (req, res) => res.send('CHARITY')); //test to see if it works localhost:8080/charity

// //Change this after 
// router.get('/', (req, res) =>
//     db.CharityCompass.findAll()
//         .then(charity => {
//             console.log(charity)
//             res.sendStatus(200);
//         })
//         .catch(err => console.log(err)));

// module.exports = router;

//Getting all the API options
//Create a route to add a fav charity, a route to delete the fav charity, and a 3rd route to update the fav

module.exports = function (router) {

    // GET route for getting all of the charity
    router.get("/api/charity", function (req, res) {
        // findAll returns all entries for a table when used with no options
        db.CharityCompass.findAll({}).then(function (dbCharityCompass) {
            // We have access to the charity as an argument inside of the callback function
            res.json(dbCharityCompass);
        });
    });
    // POST route for saving a new charity
    router.post("/api/charity", function (req, res) {
        console.log(req.body);
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        db.CharityCompass.create({
            text: req.body.text,
            complete: req.body.complete
        }).then(function (dbCharityCompass) {
            // We have access to the new charity as an argument inside of the callback function
            res.json(dbCharityCompass);
        });
    });

    // DELETE route for deleting charity. We can get the id of the charity we want to delete from
    // req.params.id
    router.delete("/api/charity/:id", function (req, res) {

    });

    // PUT route for updating charity. We can get the updated charity from req.body
    router.put("/api/charity", function (req, res) {

    });
    // PUT route for updating charity. We can get the updated charity data from req.body
    router.put("/api/charity", function (req, res) {
        // Update takes in an object describing the properties we want to update, and
        // we use where to describe which objects we want to update
        db.CharityCompass.update({
            text: req.body.text,
            complete: req.body.complete
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbCharityCompass) {
            res.json(dbCharityCompass);
        });
    });

};




