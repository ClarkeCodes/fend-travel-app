/* setup global variables and initialize express */
let projectData = {};
const express = require('express');
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
const port = 8080;
const server = app.listen(port, listening);

// Callback to debug
function listening() {
    console.log(`Server running on localhost: ${port}`);
}

// Initialize all route with a callback function
app.get("/all", sendData);

// Callback function to complete GET '/all'
function sendData(req, res) {
    res.send(projectData);
}

// Post route for adding new entry to journal
app.post('/addEntry', addEntry);

function addEntry(req, res) {
    
    const newEntry = {
        temp: req.body.temp,
        date: req.body.date,
        input: req.body.input
    };
    projectData = newEntry;
    res.send(projectData);
}