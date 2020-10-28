function logic() {
    //Input is a x value from the user input
    let x = parseInt(document.getElementById('number1').value)
    //processing
    //check if x is between 0 and 100 inclusive...if so
    let message = x + " is not in the riquired range!";
    if ( x >= 0 && x <= 100) {
        message = x + " is between 0 and 100, inclusive";
    }
document.getElementById('output').innerHTML = message;
}