function sumOdds() {

    //Input
        let userNumber = parseInt(document.getElementById("userNumber").value);
        let sum = 0;
        let count;

    // Processing   
        for (let i = 1; i <= userNumber; i++) {
            if (i % 2 != 0) {
                sum += i;
            }
        }  
    
    //Output   
        document.getElementById('output').innerHTML = "The sum of the odd numbers within the number " + userNumber + " is " + sum + "."
}