async function getWeather(coordinates) {
    const response = await fetch('/getWeather', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ lat: coordinates.lat, long: coordinates.long })
    })
    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log("error", error);
    }
}

export { getWeather };