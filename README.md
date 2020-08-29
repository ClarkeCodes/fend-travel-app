# Capstone Project: Travel App :airplane:

Final project of Udacity's Frontend Developer Nanodegree. 

## Overview
This capstone project is a travel app that lets users input their trip location, departure and return dates and displays weather info and an image of the location using the _Geonames_, _Weatherbit_ and _Pixabay_ APIs. 

Users will see how many days they have left until departure, and get the weather forecast if their trip is within the next 16 days. Otherwise, they'll see the current weather at their destination. The app also shows the total duration of their trip. 

## Preview

![A screenshot of the website](preview.png)

## Instructions

### Setting up the Project :computer:
Fork the project Github repo, and then clone or download the zip file locally. Once you have the project locally, navigate to the project directory to install all dependencies. 

```
cd <project directory>
npm install
```

### Signup for API keys :key:

This project uses the following APIs:
- [Geonames](http://www.geonames.org/export/web-services.html)
- [Weatherbit](https://www.weatherbit.io/account/create)
- [Pixabay](https://pixabay.com/api/docs/)

When you sign up, you'll be able to get your personal API keys for Weatherbit and Pixabay. For Geonames you'll just need to get your username once your account is activated. 

At the root of the project, create a new file named `.env`. Inside the file, add the following lines, replacing the stars with your personal API keys and the Geonames username. 

```
GEOCODES_NAME=**************************
WEATHERBIT_KEY=**************************
PIXABAY_KEY=**************************
```

### After setup :fire:

After you've created your local copy and added your API key to the `.env` file, you're ready to start using it! 

Use the following command to start the developer server. This should open a new window in your browser with the app running on `localhost:8000`
```
npm run build-dev
```
To run the production server (with express), run these commands
```
npm run build-prod
npm run start
```
This will create a `dist` folder with the built code. The production server runs on `localhost:8082`

Tests for this app have been implemented using Jest. To run tests, use this command:
```
npm run test
```

## Author
- Eline Jacobse

## Acknowledgements
- Background by [Webgradients](https://webgradients.com/)
- Used this post on [StackOverflow](https://stackoverflow.com/questions/37487826/send-form-data-to-javascript-on-submit) to handle the form submit
