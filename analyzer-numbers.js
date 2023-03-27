/*** Number Analyzer
/*** by Andrew Kramer


This program prompts the user to enter a series of integers.

It then displays the number of positive and negative numbers entered, the total, and the average.


*** PSEUDOCODE


- Create a constant named readlineSync to use the readlineSync node package.

- Create an empty array to receive input from the user and name it totalInput.
- Create an empty string to receive input from the user and name it userNums.

- Establish a while loop to receive input from the user unless they input '0'.
    - Request input from the user to enter an integer and assign it to userNums string variable.
    - Add the user's input from userNums into the totalInput array.

- Filter a range from the totalInput array so we're left with only positive numbers
 and assign it to array named positiveInput.

- Filter a range from the totalInput array so we're left with only positive numbers
 and assign it to array named negativeInput.

- Determine the amount of elements within the positiveInput array and assign the result 
to variable named positiveInputLength.

- Determine the amount of elements within the negativeInput array and assign the result 
to variable named negativeInputLength.

- Display message regarding positive and negative numbers.

- Add the positiveInputLength and negativeInputLength arrays together to calculate the divisor number 
to calculate the average.

- Setup positiveInputSum array and posSum variable to iterate over positiveInput to calculate sum.
- Use forEach to sum elements within the positiveInputSum array and assign the sum to posSum variable.
- Setup negativeInputSum array and negSum variable to iterate over negativeInput to calculate sum.
- Use forEach to sum elements within the negativeInputSum array and assign the sum to negSum variable.

- Add the posSum and negSum variables together to calculate the total.

- Calculate the average by dividing the total by the totalInputLength variable.

- Display the total of the numbers and the average.


*/


// Create a constant named readlineSync to use the readlineSync node package.

const readlineSync = require('readline-sync');

// Create an empty array to receive input from the user and name it totalInput.

let totalInput = [];

// Create an empty string to receive input from the user and name it userNums.

let userNums = '';

// Establish a while loop to receive input from the user unless they input '0'.

while (userNums !== 0) {

    // Request input from the user to enter an integer and assign it to userNums string variable.

    userNums = readlineSync.questionInt('\nEnter a number (enter 0 for results):\n\n');

    // Add the user's input from userNums into the totalInput array.

    totalInput.push(userNums);}

// Filter a range from the totalInput array so we're left with only positive numbers and assign it to 
// array named positiveInput.

let positiveInput = totalInput.filter((x) => x > 0 );

// Filter a range from the totalInput array so we're left with only negative numbers and assign it to 
// array named negativeInput.

let negativeInput = totalInput.filter((x) => x < 0);

// Determine the amount of elements within the positiveInput array and assign the result to
// variable named positiveInputLength.

let positiveInputLength = positiveInput.length;

// Determine the amount of elements within the negativeInput array and assign the result to
// variable named negativeInputLength.

let negativeInputLength = negativeInput.length;

// Display message regarding positive and negative numbers.

console.log("You entered", positiveInputLength, "positive numbers and", negativeInputLength, "negative numbers.\n" );

// Add the positiveInputLength and negativeInputLength arrays together to calculate the divisor number
// to calculate the average.

let totalInputLength = positiveInputLength + negativeInputLength

// Setup positiveInputSum array and posSum variable to iterate over positiveInput to calculate sum.

let positiveInputSum = positiveInput, posSum = 0

// Use forEach to sum elements within the positiveInputSum array and assign the sum to posSum variable.

positiveInputSum.forEach(value => { posSum += value; })

// Setup negativeInputSum array and negSum variable to iterate over negativeInput to calculate sum.

let negativeInputSum = negativeInput, negSum = 0

// Use forEach to sum elements within the negativeInputSum array and assign the sum to negSum variable.

negativeInputSum.forEach(value => { negSum += value; })

// Add the resulting totals together and assign to variable numSum.

let numSum = posSum + negSum

// Calculate the average by diving the numSum by the totalInputLength variable and assign the result
// to variable averageNums.

let averageNums = numSum / totalInputLength;

// Display the total of the numbers and the average.

console.log("The sum of the numbers is " + numSum, "and the average is", averageNums + ".");

// Opening line break.

console.log("");

// x

console.log("");

// Closing line break.

console.log("");