/* Defining Table
 * Input: no user input
 * Processing: Test the countEvens and multiply functions by calling them.
 * Output: The values returned from the countEvens and multiply functions.
 */
function test() {
    let list1 = [ 17, 8, 9, 5, 20 ];
    let list2 = [ 12, 4, 8, 15, 17, 5, 20, 11 ];

    // Test the countEvens function by calling it two times.
    let count1 = countEvens(list1);
    let count2 = countEvens(list2);

    // Test the multiply function by calling it two times.
    let mult1 = multiply(list1, 3);
    let mult2 = multiply(list2, 4);

    // Build a string to display to the user.
    let output = '<br>' + "How many even numbers in list 1? " + 
            count1 + '<br>' + '<br>' + "How many even numbers in list 2? " +
            count2 + '<br>' + '<br>' + "Multiply each number in list 1 by 3: " +
            mult1 + '<br>' + '<br>' + "Multiply each number in list 2 by 4: " +
            mult2;

    // Display the output string for the user to see.
    document.getElementById('output').innerHTML = output;
}

function countEvens(list) {
    let count = 0;
    for (i = 0; i < list.length; i++) {
        if (list[i] % 2 == 0) {
            count = count + 1;
        }
    }
    return count;
}

function multiply(list, multiplier) {
    for (let i = 0; i <= list.length - 1; i++) {
        list[i] *= multiplier;
    }
    return list.join(', ');
}
