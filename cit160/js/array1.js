/* Defining Table
 * Input: no user input
 * Processing: Test the addEnds and getMiddle functions by calling them.
 * Output: The values returned from the addEnds and getMiddle functions.
 */
function test() {
    let list1 = [ 17, 8, 9, 5, 20 ];
    let list2 = [ 12, 4, 8, 15, 17, 5, 20, 11 ];

    // Test the addEnds function by calling it two times.
    let sum1 = addEnds(list1);
    let sum2 = addEnds(list2);

    // Test the getMiddle function by calling it two times.
    let mid1 = getMiddle(list1);
    let mid2 = getMiddle(list2);

    // Build a string to display to the user.
    let output =
            '<br>' + "Add Ends List 1 = " + sum1 + '<br>' + '<br>' +
            "Add Ends List 2 = " + sum2 + '<br>' + '<br>' +
            "Get Middle List 1 = " + mid1 + '<br>' + '<br>' +
            "Get Middle List 2 = " + mid2;

    // Display the output string for the user to see.
    document.getElementById('output').innerHTML = output;
}

function addEnds(list) {
    let lastElement = list[list.length - 1];
    let sum = list[0] + lastElement;
    return sum;
}

function getMiddle(list) {
    let mid;
    if (list.length % 2 ==0) {
        mid = (list[list.length / 2] + list[list.length / 2 - 1]) / 2;
    }
    else {
        mid >>>= list[((list.length - 1) / 2)];
    }
    return mid;
}
