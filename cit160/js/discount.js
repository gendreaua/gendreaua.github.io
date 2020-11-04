function sales() {

    //Input
        let dayOfWeek = new Date().getDay();
        let subtotal = parseFloat(document.getElementById("subtotal").value);

    
    // Processing
    
        if (subtotal > 50 && (dayOfWeek == 2 || dayOfWeek == 3)) {
            discount = subtotal - (subtotal * .10);
    }
        else {
        discount = subtotal;
    }
    //Output
    
        document.getElementById('output').innerHTML = "You Owe: $" + (discount + (discount * .06)).toFixed(2)
}
    