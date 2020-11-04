function alarm() {

//Input
    let now = new Date();
    let month = now.getMonth();
    let dayOfMonth = now.getDate();
    let dayOfWeek = now.getDay();
    let message;

// Processing

    if ((month == 0 && dayOfMonth == 1) || (month == 6 && dayOfMonth == 4) || (month == 12 && dayOfMonth == 25) || (dayOfWeek === 0) || (dayOfWeek === 6)) {
        message = "Sleep In";
}

    else {
    message = "Get Up!";
}
//Output

    document.getElementById('output').innerHTML = message
}