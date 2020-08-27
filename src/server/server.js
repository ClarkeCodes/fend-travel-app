/* Setup env for API keys */
const dotenv = require('dotenv');
dotenv.config();

/* setup global variables and initialize express */
let projectData = {};
let userData = {};
const fetch = require("node-fetch");
const express = require('express');
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

// Spin up the server
const port = 8082;
const server = app.listen(port, listening);

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
})

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

app.post('/getLocation', async(req, res) => {
    console.log(req.body);
    console.log(process.env.GEOCODES_NAME);
    const url = `http://api.geonames.org/searchJSON?q=${req.body.location}&maxRows=1&username=${process.env.GEOCODES_NAME}`;
    const response = await fetch(url);
    console.log(response);
    try {
        const data = await response.json();
        let coordinates = {
            lat: data.geonames[0].lat,
            long: data.geonames[0].lng
        };
        console.log(data.geonames[0]);
        console.log(coordinates);
        res.send(coordinates);
    } catch (error) {
        console.log("Error", error);
    }
})

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