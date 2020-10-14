function poundsToKilograms() {
    // Input
    let pounds = parseFloat(document.getElementById("pounds").value);
    

    // Processing
    let kilograms = pounds * .453592;


    // Output
    document.getElementById("output").innerHTML = kilograms.toFixed(2) + " Kilograms";
}