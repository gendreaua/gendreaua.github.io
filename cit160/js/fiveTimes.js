function fiveTimes() {
    //Input

    //Processing loop the times tables twelve times
    let output = "";
    for (let i = 5; i <= 12; i++) {
        output += "5 X " + i + " = " + i * 5 +'<br>';
    }

    //Output
    document.getElementById('output').innerHTML = output;
}