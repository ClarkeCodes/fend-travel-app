async function handleSubmit(that) {
    let projectData = {};

    /* Validate user form input */
    let userData = {
        to: that.to.value,
        from: that.from.value,
        startDate: that.depart.value,
        endDate: that.return.value
    };
    await Client.validateInput(userData);
    /* Get countdown to trip and total duration of trip, add to projectData object */
    projectData = Client.handleDates(userData.startDate, userData.endDate);

    /* Get data from Geonames */
    const coordinates = await Client.getData('/getLocation', { location: userData.to})

    /* Get weatherdata for destination */
    const weather = await Client.getData('/getWeather', { lat: coordinates.lat, long: coordinates.long });
    
    /* If trip is within 16 days, get forecast, otherwise get current weather */
    let forecastDay = 0;
    if(projectData.isSoon) {
        forecastDay = projectData.countdown;
    }
    const weatherData = {
        city: weather.city_name,
        high_temp: weather.data[forecastDay].high_temp,
        low_temp: weather.data[forecastDay].low_temp,
        forecast: weather.data[forecastDay].weather.description
    }

    /* Get image from Pixabay */
    const image = await Client.getData('/getPhoto', { city: userData.to });
    projectData.image_url = image.hits[0].largeImageURL;

    /* add weatherData to the projectData object and update UI */
    Object.assign(projectData, weatherData);
    Client.updateUI(projectData);    
}

export { handleSubmit };
