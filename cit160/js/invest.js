function doFV() {
    //Input to get the information from the user for temperature and windspeed
        let principal = parseInt(document.getElementById("principal").value);
        let annualRate = parseFloat(document.getElementById("annualRate").value);
        let years = parseInt(document.getElementById("years").value);
        let periodsPerYear = parseInt(document.getElementById("periodsYear").value);
        
    // Processing nothing in this function but calling another function
        let f = computeFutureValue(principal, annualRate, years, periodsPerYear);
    //Output the future valu
    
        document.getElementById('output').value = f;
}

function computeFutureValue(a, r, y, n) {
    //Input - no input for this function
    //Processing the equation
    f = (a * ((1 + (r/n))**(y*n))).toFixed(2);
    return f;
    //Output - no output for this function
}