/*** Number Sorter
/*** by Andrew Kramer


This program asks the user to enter 10 integers and then displays them in the reverse order they were entered.


*** PSEUDOCODE


- Create a constant named readlineSync to use the readlineSync node package.

- Create an empty array named totalInput.

- Establish a while loop which iterates until there are 10 total elements in the totalInput array.
       - Ask the user to enter an integer and assign the input to variable xInput.
               - Customize the limitMessage option to add a new line before displaying.
       - Add the user's input to the totalInput array.

- Reverse sort the complete totalInput array and assign to variable totalInputRevSortedV1.

- Format the totalInputRevSortedV1 array with a comma and space to display and convert it to string variable totalInputRevSortedV2.

- Display the sorted and formatted string.


*/


// Create a constant named readlineSync to use the readlineSync node package.

const readlineSync = require('readline-sync');

// Create an empty array named totalInput.

let totalInput = [];

// Establish a while loop which iterates until there are 10 total elements in the totalInput array.

while (totalInput.length < 10) {

        // Ask the user to enter an integer and assign the input to variable xInput.

        xInput = readlineSync.questionInt('\nEnter an integer: \n\n', {

                // Customize the limitMessage option to add a new line before displaying.

                limitMessage: `\nInput valid number please.`});

        // Add the user's input to the totalInput array.

        totalInput.push(xInput)};

// Reverse sort the complete totalInput array and assign to variable totalInputRevSortedV1.

totalInputRevSortedV1 = totalInput.reverse();

// Format the totalInputRevSortedV1 array with a comma and space to display and convert it to string variable totalInputRevSortedV2.

totalInputRevSortedV2 = totalInputRevSortedV1.join(', ');

// Display the sorted and formatted string.

console.log('\nThe numbers entered in the reverse order how they were entered are:',totalInputRevSortedV2);

// Opening line break.

console.log("");

// Closing line break.

console.log("");