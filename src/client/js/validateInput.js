function validateInput(data) {
    if(data.to == "" || data.from == "") {
        alert('Please fill out your destinaton and departure city');
        return false;
    }
    else if (data.startDate == "" || data.endDate == "") {
        alert('Please select your dates');
        return false;
    }
    return true;
}

export { validateInput };