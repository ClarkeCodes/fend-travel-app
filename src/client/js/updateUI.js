function updateUI(data) {
    // hide form
    const formElement = document.getElementById('travel-form');
    formElement.style.display = "hidden";

    // Add travel data to box
    const box = document.getElementById('box');
    box.innerHTML = `
        <div class="results" id="results">
            <div class="results__image"><img src="${data.image_url}" alt="${data.city}">TEST</div>
            <div class="results__text">This will display data</div>
            <button onclick='Client.refresh()'>Plan another trip!</button>
        </div>
    `
}

function refresh() {
    // hide results, show form
    document.getElementById('results').style.display = "none";
    document.getElementById('travel-form').style.display = "block";
}

export { updateUI };
export { refresh };