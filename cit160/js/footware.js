function footware() {
    //Input weather from the user and define variable shoes
    let weather = document.getElementById("weather-select").value
    let shoes;

    //Processing
    if (weather == "") {
        shoes = "--Please Choose an Option--";
    }
    else if (weather == "hot") {
        shoes = "sandles";
    }
    else if (weather == "rain") {
        shoes = "galoshes";
    }
    else if (weather == "snow") {
        shoes = "boots";
    }
    else if (weather == "unknown") {
        shoes = "shoes";
    }

    //Output
document.getElementById("output").innerHTML = "When the weather is " + weather + " you should wear " + shoes + "."

}