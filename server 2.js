// The charity API that will give us the Name, Category, Cause and Location should be linked to the DATABASE
// First create a port
// Use the HTML written by Juan to connect the HTM & API so that information will get stored on the DB
// Must use Sequelize and mySQL (Workbench)


// to run port, open terminal and do this: npm run dev
// then check connection by openning chrome and searching localhost:8080 (IT WORKED :)  ) 
//
// Server.js (like app.js in video I was watching) would be the initial starting point for the node/express server.

// Dependencies //
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//Database: CONNECTING TO DATABASE.JS FILE
const db = require('./config/database');

// Exports the connection for other files to use (TEST CONNECTION)
//Test db
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))


// Setting up the apps and port (For Express app)
const app = express();

// Creating our INDEX ROUTE
app.get('/', (req, res) => res.send('INDEX'));

// Charity Routes
app.use('/charity', require('./routes/charity'));

//CONNECTION TO OUR PORT
const PORT = process.env.PORT || 8080;



// app.listen will run our server!!
app.listen(PORT, console.log(`Server started on port${PORT}`)); // shortcut for an arrow function use back ticks

