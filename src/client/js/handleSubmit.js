async function handleSubmit(that) {
    let projectData = {};
    let userData = {
        to: that.to.value,
        from: that.from.value,
        startDate: that.depart.value,
        endDate: that.return.value
    };
    
    projectData = Client.handleDates(userData.startDate, userData.endDate);
    console.log(userData);
    const coordinates = await Client.getLocation(userData.to)
    const weather = await Client.getWeather(coordinates);
    const weatherData = {
        city: weather.city_name,
        high_temp: weather.data[0].high_temp,
        low_temp: weather.data[0].low_temp,
        forecast: weather.data[0].weather.description
    }
    const image = await Client.getPhoto(userData.to);
    projectData.image_url = image.hits[0].largeImageURL;
    Object.assign(projectData, weatherData);
    console.log("ProjectData", projectData);
    Client.updateUI(projectData);    
}

export { handleSubmit };
