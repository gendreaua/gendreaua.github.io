function fiveTimes() {
    //Input
    let output = "";
    //Processing loop the times tables twelve times
    for (let i = 1; i <= 12; i++) {
        output += "5 X " + i + " = " + i * 5 +'<br>';
    }
    //Output
    document.getElementById('output').innerHTML = output;
}