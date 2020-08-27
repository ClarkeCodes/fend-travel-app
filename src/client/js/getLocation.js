function getLocation(city) {
    fetch('/getLocation', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ location: city })
    })
    .then(res => res.json())
    .then(function(res) {
        console.log(res);
        return res;
    })
}

export { getLocation };