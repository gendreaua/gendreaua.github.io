function footware() {
    //Input weather from the user and define variable shoes
    let weather = document.getElementById("weather-select").value
    let shoes;

    //Processing change the variable shoes depending on the weather the user picks
    if (weather === "") {
        shoes = "--Please Choose an Option--";
    }
    else if (weather === "hot") {
        shoes = "sandles";
    }
    else if (weather === "rain") {
        shoes = "galoshes";
    }
    else if (weather === "snow") {
        shoes = "boots";
    }
    else if (weather === "unknown") {
        shoes = "shoes";
    }

    //Output what shoes to wear depending on the weather the user picks
document.getElementById("output").innerHTML = "When the weather is " + weather + " you should wear " + shoes + "."

}