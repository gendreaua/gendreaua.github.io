function doInputOutput() {
    //Input to get the information from the user for temperature and windspeed
        let tempF = parseInt(document.getElementById("temperature").value);
        let windspeed = parseInt(document.getElementById("windspeed").value);
        let w = "";
    // Processing to pull the calculation from the windChill function and calculate if temperature and windspeed fit the requirements
        if (tempF <= 50 && windspeed >= 3) {
            w = windChill(tempF, windspeed).toFixed(2) + "&deg" + " Fahrenheit";
        }
        else if (tempF > 50) {
            w = "The temperature must be below 50 &deg Fahrenheit to calculate wind chill."
        }
        else {
            w = "The windspeed must be above 3 miles per hour to calculate wind chill."
        }   
    //Output the windchill factor or an error message for what the user is missing
        document.getElementById('output').innerHTML = w
}

function windChill(tempF, windspeed) {
    //Input - no input for this function
    //Processing
    w = 35.74 + (0.6215 * tempF) - (35.75 * windspeed ** 0.16) + (0.4275 * tempF * windspeed ** 0.16);
    return w;
    //Output - no output for this function
}