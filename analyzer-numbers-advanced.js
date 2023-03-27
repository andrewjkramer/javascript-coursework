/*** Number Analyzer
/*** by Andrew Kramer


This program prompts the user to enter a series of integers.

It then displays the frequency of each number entered.


*** PSEUDOCODE


- Create a constant named readlineSync to use the readlineSync node package.

- Create an empty array named totalInput.
- Create an empty object named xInput.

- Create a while loop that allows the user to enter numbers unless they enter 0.
    - Ask the user to enter a number between 1 and 100 and assign the input to variable xInput.
       - Customize the limitMessage option to add a new line before displaying.
        - Create an if statement that adds the number to the totalInput array only if
        the number is greater than or equal to 1 and less than or equal to 100.
             - Add the number to the totalInput array.
             - Else if the number is greater than 100 or less than 0 or between 1 and 0....
                 - Ask the user to enter a valid number...

- Create an empty object named numCount.

- Create a for loop to iterate over the elements of the totalInput array.
    - If the element is found in the array...
        - Add +1 to the counter.
        - Otherwise, keep the counter...
            - At a value of 1.

- Create a for loop to iterate over the keys and properties of the numCount object.
   - Display the key and the number of occurrences.


*/


// Create a constant named readlineSync to use the readlineSync node package.

const readlineSync = require('readline-sync');

// Create an empty array named totalInput.

let totalInput = [];

// Create an empty object named xInput.

let xInput = '';

// Create a while loop that allows the user to enter numbers unless they enter 0.

while (xInput !== 0) {

        // Ask the user to enter a number between 1 and 100 and assign the input to variable xInput.

        xInput = readlineSync.questionFloat('\nEnter a number between 1 and 100 (enter 0 for results): \n\n', {

                // Customize the limitMessage option to add a new line before displaying.

                limitMessage: `\nInput valid number please.`});

                // Create an if statement that adds the number to the totalInput array only if
                // the number is greater than or equal to 1 and less than or equal to 100.

                if ( xInput >= 1 && xInput <= 100 ) {

                        // Add the number to the totalInput array.

                        totalInput.push(xInput)}

                        // Else if the number is greater than 100 or less than 0 or between 1 and 0....

                        else if ( xInput > 100 || xInput < 0 || (xInput > 0 && xInput < 1) ) {

                                // Ask the user to enter a valid number...

                                console.log('\nPlease only enter a number between 1 and 100.')};}

// Create an empty object named numCount.

let numCount = {};

// Create a for loop to iterate over the elements of the totalInput array.

for (x of totalInput) {

    // If the element is found in the array...

    if (numCount[x]) {

        // Add +1 to the counter.
               
        numCount[x] += 1;}

        // Otherwise, keep the counter...

        else {

            // At a value of 1.

            numCount[x] = 1;}}

// HAHAHAHAHHAHA VICTORY IS MINE!!!!!!!!!!
// Create a for loop to iterate over the keys and properties of the numCount object.

for (var key of Object.keys(numCount)) {

    // If the "occurrence" of the key is greater than 1...

    if (numCount[key] > 1) {

    // Use this message!

    console.log('\n' + key + " occurs " + numCount[key] + ' times.')}

        // Else....

        else {

            // Use this one!!!!!!!

            console.log('\n' + key + " occurs " + numCount[key] + ' time.')};}


// Opening line break.

console.log("");

// Closing line break.

console.log("");