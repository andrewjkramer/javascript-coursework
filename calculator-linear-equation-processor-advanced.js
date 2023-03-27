/*** Advanced Linear Equation Processor
/*** by Andrew Kramer


This program again.. but different... yeah..... haha!


*** PSEUDOCODE


- Create a constant named readlineSync to use the readlineSync node package.

- Create a variable named a and prompt the user to enter a value to assign.
- Create a variable named b and prompt the user to enter a value to assign.
- Create a variable named c and prompt the user to enter a value to assign.
- Create a variable named d and prompt the user to enter a value to assign.
- Create a variable named e and prompt the user to enter a value to assign.
- Create a variable named f and prompt the user to enter a value to assign.

- Create a variable named d1 to calculate the first determinate and assign it the result of the formula (a)(d)-(b)(c)

- Create an if statement to check if d1 is equal to 0.
- If d1 is equal to 0, display a message and end the program.

- Create an else statement to continue the program is d1 is not == 0.

- Create a variable named dx to calculate the x determinate and assign it the result of the formula (e)(d)-(b)(f)

- Create a variable named dy to calculate the y determinate and assign it the result of the formula (a)(f)-(e)(c)

- Create a variable named x to calculate the the value of x and assign it the result of the formula dx / d1

- Create a variable named y to calculate the the value of y and assign it the result of the formula dy / d1

- Display the values of x and y.


*/


// Create a constant named readlineSync to use the readlineSync node package.

const readlineSync = require('readline-sync');

// Create a variable named a and prompt the user to enter a value to assign.

let a = readlineSync.questionFloat('\nWhat is a? \n\n', {

        // Customize the limitMessage option to add a new line before displaying.

        limitMessage: `\nInput valid number please.`});

// Create a variable named b and prompt the user to enter a value to assign.

let b = readlineSync.questionFloat('\nWhat is b? \n\n', {

        // Customize the limitMessage option to add a new line before displaying.

        limitMessage: `\nInput valid number please.`});

// Create a variable named c and prompt the user to enter a value to assign.

let c = readlineSync.questionFloat('\nWhat is c? \n\n', {

        // Customize the limitMessage option to add a new line before displaying.

        limitMessage: `\nInput valid number please.`});

// Create a variable named d and prompt the user to enter a value to assign.

let d = readlineSync.questionFloat('\nWhat is d? \n\n', {

        // Customize the limitMessage option to add a new line before displaying.

        limitMessage: `\nInput valid number please.`});

// Create a variable named e and prompt the user to enter a value to assign.

let e = readlineSync.questionFloat('\nWhat is e? \n\n', {

        // Customize the limitMessage option to add a new line before displaying.

        limitMessage: `\nInput valid number please.`});

// Create a variable named f and prompt the user to enter a value to assign.

let f = readlineSync.questionFloat('\nWhat is f? \n\n', {

        // Customize the limitMessage option to add a new line before displaying.

        limitMessage: `\nInput valid number please.`});

/* Create a variable named d1 to calculate the first determinate and assign
* it the result of the formula (a)(d)-(b)(c) */

let d1 = a*d - b*c;

// Create an if statement to check if d1 is equal to 0.

if (d1 == 0) {

    // If d1 is equal to 0, display a message and end the program.

    console.log(`\nNo Solution.\n`);}

// Create an else statement to continue the program is d1 is not == 0.

else {

/* Create a variable named dx to calculate the x determinate and assign
* it the result of the formula (e)(d)-(b)(f) */

let dx = e*d - b*f;

/* Create a variable named dy to calculate the y determinate and assign
* it the result of the formula (a)(f)-(e)(c) */

let dy = a*f - e*c;

/* Create a variable named x to calculate the the value of x and assign
* it the result of the formula dx / d1 */

let x = dx / d1;

/* Create a variable named y to calculate the the value of y and assign
* it the result of the formula dy / d1 */

let y = dy / d1;

// Opening line break.

console.log("");

// Display the values of x and y.

console.log("x is", x.toFixed(1), "and y is", y.toFixed(1));

// Closing line break.

console.log("")};