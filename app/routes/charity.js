const express = require('express');
const router = express.Router();
const db = require(../config/database);
const CharityCompass = require('../models/CharityCompass');

//Route for /Charity
//router.get('/', (req, res) => res.send('CHARITY')); //test to see if it works localhost:8080/charity

router.get('/', (req, res) =>
    CharityCompass.findAll()
        .then(charity => {
            console.log(charity)
            res.sendStatus(200);
        })
        .catch(err => console.log(err)));

module.exports = router;