function contactUs() {
    let contact = prompt("Please enter your phone number and a represenative will call you shortly");
    if (contact == "") {
        message = "A Phone Number has not been entered.";
    }
    else {
        message = "A representative will call you shortly."
    }
    document.getElementById("action").innerHTML = message;
}