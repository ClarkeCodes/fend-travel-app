async function handleSubmit(that) {
    let userData = {
        to: that.to.value,
        from: that.from.value,
        startDate: that.depart.value,
        endDate: that.return.value
    };
    Client.handleDates(userData.startDate, userData.endDate);

    console.log(userData);
    const coordinates = await Client.getLocation(userData.to)
    console.log("TEST", coordinates);
    const weather = await Client.getWeather(coordinates);
    console.log(weather);
    const image = await Client.getPhoto(userData.to);
    console.log(image);
    
}



/* Function called by event listener */
function getInput(zip) {
    input = document.getElementById('feelings').value;
    getData(baseURL, zip, apiKey)
    .then(function(data) {
        // add data to POST request
        postData('/addEntry', {temp: data.main.temp, date: today, input: input});
        updateUI();
    });
}

/* GET project data and update UI */
const updateUI = async() => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        // make journal entry visible
        document.getElementById('journal-entry').classList.remove('hidden');

        // update values for journal entry
        document.getElementById('date').innerHTML = "<strong>Date:</strong> " + allData.date;
        document.getElementById('temp').innerHTML = "<strong>Temperature:</strong> " + allData.temp + " &deg;F";
        document.getElementById('content').innerHTML = "<strong>Journal entry:</strong> " + allData.input;
    }
    catch(error) {
        console.log("Error: ", error);
    }
}

export { handleSubmit };
