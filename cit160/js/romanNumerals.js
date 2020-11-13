function romanNumerals() {
    //Input get numbers for the year from the user
    let digit1 = parseInt(document.getElementById("digit1").value);
    let digit2 = parseInt(document.getElementById("digit2").value);
    let digit3 = parseInt(document.getElementById("digit3").value);
    let digit4 = parseInt(document.getElementById("digit4").value);
    //Processing to convert each number into its roman numeral
    if (digit1 == 0) {
        digit1 = "";
    }
    else if (digit1 == 1) {
        digit1 = "M";
    }
    else if (digit1 == 2) {
        digit1 = "MM";
    }
    else if (digit1 == 3) {
        digit1 = "MMM";
    }
    else {
        digit1 = "The first number is not valid. Try Again.<br>";
    }
    if (digit2 == 0) {
        digit2 = "";
    }
    else if (digit2 == 1) {
        digit2 = "C";
    }
    else if (digit2 == 2) {
        digit2 = "CC";
    }
    else if (digit2 == 3) {
        digit2 = "CCC";
    }
    else if (digit2 == 4) {
        digit2 = "CD";
    }
    else if (digit2 == 5) {
        digit2 = "D";
    }
    else if (digit2 == 6) {
        digit2 = "DC";
    }
    else if (digit2 == 7) {
        digit2 = "DCC";
    }
    else if (digit2 == 8) {
        digit2 = "DCCC";
    }
    else if (digit2 == 9) {
        digit2 = "CM";
    }
    else {
        digit2 = "The second number is not valid. Try Again.<br>";
    }
    if (digit3 == 0) {
        digit3 = "";
    }
    else if (digit3 == 1) {
        digit3 = "X";
    }
    else if (digit3 == 2) {
        digit3 = "XX";
    }
    else if (digit3 == 3) {
        digit3 = "XXX";
    }
    else if (digit3 == 4) {
        digit3 = "XL";
    }
    else if (digit3 == 5) {
        digit3 = "L";
    }
    else if (digit3 == 6) {
        digit3 = "LX";
    }
    else if (digit3 == 7) {
        digit3 = "LXX";
    }
    else if (digit3 == 8) {
        digit3 = "LXXX";
    }
    else if (digit3 == 9) {
        digit3 = "XC";
    }
    else {
        digit3 = "The third number is not valid. Try Again.<br>";
    }
    if (digit4 == 0) {
        digit4 = "";
    }
    else if (digit4 == 1) {
        digit4 = "I";
    }
    else if (digit4 == 2) {
        digit4 = "II";
    }
    else if (digit4 == 3) {
        digit4 = "III";
    }
    else if (digit4 == 4) {
        digit4 = "IV";
    }
    else if (digit4 == 5) {
        digit4 = "V";
    }
    else if (digit4 == 6) {
        digit4 = "VI";
    }
    else if (digit4 == 7) {
        digit4 = "VII";
    }
    else if (digit4 == 8) {
        digit5 = "VIII";
    }
    else if (digit4 == 9) {
        digit4 = "IX";
    }
    else {
        digit4 = "The fourth number is not valid. Try Again.<br>";
    }
    //Output
    document.getElementById('output').innerHTML = digit1 + digit2 + digit3 + digit4;
}