async function getData(url, data) {
    console.log("Data", data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log("error", error);
    }
}

export { getData };