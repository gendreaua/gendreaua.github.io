function alarm() {

//Input
    let now = new Date();
    let month = now.getMonth();
    let dayOfMonth = now.getDate();
    let dayOfWeek = now.getDay();
    let message;

// Processing

    if (month == 0 && dayOfMonth == 1) {
        message = "Sleep In";
}
    else if (month == 6 && dayOfMonth == 4) {
        message = "Sleep In!";
} 
    else if (month == 12 && dayOfMonth == 25) {
    message = "Sleep In!";
}
    else if (dayOfWeek === 0) {
        message = "Sleep In!";
}
    else if (dayOfWeek === 6) {
    message = "Sleep In!";
}
    else {
    message = "Get Up!";
}
//Output

    document.getElementById('output').innerHTML = message
}