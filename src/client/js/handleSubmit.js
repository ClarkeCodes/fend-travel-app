async function handleSubmit(that) {
    let projectData = {};
    let userData = {
        to: that.to.value,
        from: that.from.value,
        startDate: that.depart.value,
        endDate: that.return.value
    };
    // Get countdown to trip and total duration of trip
    projectData = Client.handleDates(userData.startDate, userData.endDate);

    // Get data from Geonames, Weatherbit and Pixabay
    const coordinates = await Client.getData('/getLocation', { location: userData.to})
    const weather = await Client.getData('/getWeather', { lat: coordinates.lat, long: coordinates.long });
    const weatherData = {
        city: weather.city_name,
        high_temp: weather.data[0].high_temp,
        low_temp: weather.data[0].low_temp,
        forecast: weather.data[0].weather.description
    }
    const image = await Client.getData('/getPhoto', { city: userData.to });
    projectData.image_url = image.hits[0].largeImageURL;

    // add weatherData to the projectData object
    Object.assign(projectData, weatherData);
    Client.updateUI(projectData);    
}

export { handleSubmit };
