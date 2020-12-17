
function scanT() {
    let numArray = [100.11, 101.21, 102.24, 114.25, 115.29, 119.87];
    let limit = 115

    // Test the addEnds function by calling it two times.
    let sum1 = scanTron(list, key);

    // Build a string to display to the user.
    let output = sum1

    // Display the output string for the user to see.
    document.getElementById('output').innerHTML = output;
}

function scanTron(list, key) {
    for (let item = 0; item < list.length; ++item) {
        if (list[itme] >= key) {
            return item;
        }
    }
    if (list.length > 4) {
        return -2;
    }
    else {
        return -1;
    }
}

