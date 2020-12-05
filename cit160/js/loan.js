function doPayment() {
    //Input to get the information from the user 
        let principal = parseInt(document.getElementById("principal").value);
        let annualRate = parseFloat(document.getElementById("annualRate").value);
        let years = parseInt(document.getElementById("years").value);
        let periodsPerYear = parseInt(document.getElementById("periodsPerYear").value);
        
    // Processing nothing in this function but calling another function
        let p = computePayment(principal, annualRate, years, periodsPerYear);
    //Output the payment amount
        document.getElementById('payment').value = "$" + p;
}

function doBalance() {
    let principal = parseInt(document.getElementById("principal").value);
    let annualRate = parseFloat(document.getElementById("annualRate").value);
    let years = parseInt(document.getElementById("years").value);
    let periodsPerYear = parseInt(document.getElementById("periodsPerYear").value);
    let numberOfPaymentsPaidToDate = parseInt(document.getElementById("numberOfPaymentsPaidToDate").value);
    //Processing nothing in this function but calling another function
    let b = computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentsPaidToDate);

    //Output balance left over
    document.getElementById('balance').value = "$" + b;
}

function computePayment(a, r, y, n) {
    //Input - no input for this function
    let rn = r/n;
    let yn = y*n;
    //Processing the equation
    p = (a * rn) / (1 - (1 + rn) ** -yn);
    return p.toFixed(2);
    //Output - no output for this function
}

function computeBalance(a, r, y, n, d) {
    //Input no input for this function
    let rn = r/n;
    let yn = y*n;
    let p = (a * rn) / (1 - (1 + rn) ** -yn);
    //Processing the equation
    b = a * (1 + rn) ** d - (p * ((1 + rn) ** d - 1)) / rn;
    return b.toFixed(2);
    //Output no output for this function
}