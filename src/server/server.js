/* Setup env for API keys */
const dotenv = require('dotenv');
dotenv.config();

/* setup global variables and initialize express */
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
    res.sendFile('dist/index.html');
})

// Callback to debug
function listening() {
    console.log(`Server running on localhost: ${port}`);
}

app.post('/getLocation', async(req, res) => {
    const url = `http://api.geonames.org/searchJSON?q=${req.body.location}&maxRows=1&username=${process.env.GEOCODES_NAME}`;
    const response = await fetch(url);
    try {
        const data = await response.json();
        let coordinates = {
            lat: data.geonames[0].lat,
            long: data.geonames[0].lng
        };
        res.send(coordinates);
    } catch (error) {
        console.log("Error", error);
    }
})

app.post('/getWeather', async(req, res) => {
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${req.body.lat}&lon=${req.body.long}&key=${process.env.WEATHERBIT_KEY}`;
    const response = await fetch(url)
    try {
        const data = await response.json();
        res.send(data);
    } catch(error) {
        console.log("Error", error);
    }
})

app.post('/getPhoto', async(req, res) => {
    const url = `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${req.body.city}&image_type=photo`;
    const response = await fetch(url)
    try {
        const data = await response.json();
        res.send(data);
    } catch(error) {
        console.log("Error", error);
    }
})