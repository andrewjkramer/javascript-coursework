/*** Advanced Score Analyzer
/*** by Andrew Kramer


This program allows the user to enter scores and displays the average score, the quantity of scores greater than the average, the quantity of scores less than the average, and the quantity of scores equal to the average.


*** PSEUDOCODE


- Create a constant named readlineSync to use the readlineSync node package.

- Create an empty array named totalInput.
- Create an empty object named xInput.

- Create a while loop that allows the user to enter numbers unless they enter a negative number.
    - Ask the user to enter a score or a negative number to end the loop.
       - Customize the limitMessage option to add a new line before displaying.
       - Create an if statement that adds the number to the totalInput array only if
        the number is greater than or equal to 0.
          - Add the number to the totalInput array.
          - Else if the number is negative...
             - Break the loop.

- Calculate the length of the totalInput array and assign the result to variable scoreCount.

- Create an accumulator variable scoreSum.
- Use forEach to sum elements within the totalInput array and assign the sum to scoreSum variable.

- Calculate the average and assign it to variable scoreAverage.
- Display the average score.

- Create empty array greaterThanAverage.
- Create empty array lessThanAverage.
- Create empty array equalToAverage.

- Create a for loop to iterate the elements of array totalInput.
    - If the element is greater than scoreAverage...
       - Add the element to the array greaterThanAverage.
       - If the element is less than scoreAverage...
          - Add the element to the array lessThanAverage.
       - If the element equal to scoreAverage...
          - Add the element to the array equalToAverage.

- Display the quantity of scores greater than the average.
- Display the quantity of scores less than the average.
- Display the quantity of scores equal to the average.


*/


// Create a constant named readlineSync to use the readlineSync node package.

const readlineSync = require('readline-sync');

// Create an empty array named totalInput.

let totalInput = [];

// Create an empty object named xInput.

let xInput = '';

// Create a while loop that allows the user to enter numbers unless they enter a negative number.

while (xInput >= 0) {

        // Ask the user to enter a score or a negative number to end the loop.

        xInput = readlineSync.questionFloat('\nEnter a score (enter a negative number for results): \n\n', {

                // Customize the limitMessage option to add a new line before displaying.

                limitMessage: `\nInput valid number please.`});

                // Create an if statement that adds the number to the totalInput array only if
                // the number is greater than or equal to 0.

                if ( xInput >= 0 ) {

                        // Add the number to the totalInput array.

                        totalInput.push(xInput)}

                        // Else if the number is negative...

                        else if ( xInput < 0 ) {

                                // Break the loop.

                                break};}

// Calculate the length of the totalInput array and assign the result to variable scoreCount.

let scoreCount = totalInput.length;

// Create an accumulator variable scoreSum.

let x = totalInput, scoreSum = 0;

// Use forEach to sum elements within the totalInput array and assign the sum to scoreSum variable.

x.forEach(value => { scoreSum += value; });

// Calculate the average and assign it to variable scoreAverage.

let scoreAverage = scoreSum / scoreCount;

// Display the average score.

console.log('\nThe average score is',scoreAverage + '.');

// Create empty array greaterThanAverage.

let greaterThanAverage = [];

// Create empty array lessThanAverage.

let lessThanAverage = [];

// Create empty array equalToAverage.

let equalToAverage = [];

// Create a for loop to iterate the elements of array totalInput.

for (x of totalInput) {

    // If the element is greater than scoreAverage...

    if ([x] > scoreAverage) {

        // Add the element to the array greaterThanAverage.
               
        greaterThanAverage.push(x)}

        // If the element is less than scoreAverage...

        else if ( [x] < scoreAverage ) {

            // Add the element to the array lessThanAverage.

            lessThanAverage.push(x)}

        // If the element equal to scoreAverage...

        else if ( [x] == scoreAverage ) {

            // Add the element to the array equalToAverage.

            equalToAverage.push(x)};}

// x

if (greaterThanAverage.length > 1) {

        // Display the quantity of scores greater than the average.

        console.log('\n',greaterThanAverage.length + ' scores are greater than the average.')}

        // Else...

        else if (greaterThanAverage.length == 1) {

        // Display the quantity of score(s) greater than the average.

        console.log('\n',greaterThanAverage.length + ' score is greater than the average.');}

        else {

        // Display the quantity of score(s) greater than the average.

        console.log('\n',greaterThanAverage.length + ' scores are greater than the average.');}

// x

if (lessThanAverage.length > 1) {

        // Display the quantity of scores less than the average.

        console.log('\n',lessThanAverage.length + ' scores are less than the average.')}

        // Else...

        else if (lessThanAverage.length == 1) {

        // Display the quantity of score(s) less than the average.

        console.log('\n',lessThanAverage.length + ' score is less than the average.');}

        else {

        // Display the quantity of score(s) less than the average.

        console.log('\n',lessThanAverage.length + ' scores are less than the average.');}

// x

if (equalToAverage.length > 1) {

        // Display the quantity of scores equal to the average.

        console.log('\n',equalToAverage.length + ' scores are equal to the average.')}

        // Else...

        else if (equalToAverage.length == 1) {

        // Display the quantity of score(s) equal to the average.

        console.log('\n',equalToAverage.length + ' score is equal to the average.');}

        else {

        // Display the quantity of score(s) equal to the average.

        console.log('\n',equalToAverage.length + ' scores are equal to the average.');}

// Opening line break.

console.log("");

// Closing line break.

console.log("");