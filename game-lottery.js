/*** Lottery Game
/*** by Andrew Kramer


This program is a lottery game that generates 3 random numbers from 0-9 and asks the user to enter the 3 numbers the purchased, then displays the results.


*** PSEUDOCODE


- Create a constant named readlineSync to use the readlineSync node package.

- Generate a random number from 0-9 and assign it to variable named winningNumberA.
- Generate a random number from 0-9 and assign it to variable named winningNumberB.
- Generate a random number from 0-9 and assign it to variable named winningNumberC.

- Convert variable winningNumberA to a string and assign it to variable winningNumberAstr.
- Convert variable winningNumberB to a string and assign it to variable winningNumberBstr.
- Convert variable winningNumberC to a string and assign it to variable winningNumberCstr.

- Concatenate the string variables winningNumberAstr, winningNumberBstr, winningNumberCstr into one string variable named winningNumbersStr.

- Display the winning numbers.

- Prompt user to enter their lottery numbers using the questionNewPassword function for more options.
   - Require a minimum of 3 digits entered.
   - Require a maximum of 3 digits entered.
   - Display the user's entry back to them.
   - Only allow digits 0-9.
   - Display verification message.
   - Display verification failure message.
   - Display entry requirements.

- Convert the string variable winningNumbersStr into an array variable named winningNumbersArray.
- Convert the array winningNumbersArray into an integer array named winningNumbersArrayInt.
- Convert the string variable userNumbers into an array variable named userNumbersArray.
- Convert the array userNumbersArray into an integer array named userNumbersArrayInt.

- Sort the array winningNumbersArrayInt into a sorted array named winningNumbersArraySortA.
- Sort the array winningNumbersArraySortA into a now sorted string array named winningNumbersArraySort.
- Sort the array userNumbersArrayInt into a sorted array named userNumbersArraySortA.
- Sort the array userNumbersArraySortA into a now sorted string array named userNumbersArraySort.

- Create an if statement containing the methods to win or lose the lottery.
- If string variable userNumbers exactly matches string variable winningNumbersStr, the user wins $10,000.
   - Display winning message.

   - Else if string variable userNumbersArraySort exactly matches string variable winningNumbersArraySort,the user wins $3,000.
       - Display winning message.

    - Else if string variable userNumbersArraySort contains string variable winningNumbersArraySort,the user wins $1,000.
       - Display winning message.

   - Else the user loses.
       - Display losing message.


*/


// Create a constant named readlineSync to use the readlineSync node package.

const readlineSync = require('readline-sync');

// Generate a random number from 0-9 and assign it to variable named winningNumberA.

let winningNumberA = Math.floor(Math.random() * 10);

// Generate a random number from 0-9 and assign it to variable named winningNumberB.

let winningNumberB = Math.floor(Math.random() * 10);

// Generate a random number from 0-9 and assign it to variable named winningNumberC.

let winningNumberC = Math.floor(Math.random() * 10);

// Convert variable winningNumberA to a string and assign it to variable winningNumberAstr.

let winningNumberAstr = winningNumberA.toString();

// Convert variable winningNumberB to a string and assign it to variable winningNumberBstr.

let winningNumberBstr = winningNumberB.toString();

// Convert variable winningNumberC to a string and assign it to variable winningNumberCstr.

let winningNumberCstr = winningNumberC.toString();

// Concatenate the string variables winningNumberAstr, winningNumberBstr, winningNumberCstr into
// one string variable named winningNumbersStr.

let winningNumbersStr = winningNumberAstr + winningNumberBstr + winningNumberCstr;

// Display the winning numbers.

console.log("\nTonight's winning numbers are: " + winningNumbersStr);

// Prompt user to enter their lottery numbers using the questionNewPassword function for more options.

let userNumbers = readlineSync.questionNewPassword('\nEnter your 3 digit lottery number:\n\n', {
        
        // Require a minimum of 3 digits entered.

        min : 3,

        // Require a maximum of 3 digits entered.

        max : 3,

        // Display the user's entry back to them.

        hideEchoBack : false,

        // Only allow digits 0-9.
    
        charlist: '$<0-9>',

        // Display verification message.

        confirmMessage: '\nPlease carefully verify your entry:\n\n',

        // Display verification failure message.

        unmatchMessage: '\nYour verification did not match, please try again.',

        // Display entry requirements.
        
        limitMessage: '\nInput a valid 3 digit number please.'});

// Convert the string variable winningNumbersStr into an array variable named winningNumbersArray.

let winningNumbersArray = Array.from(String(winningNumbersStr));

// Convert the array winningNumbersArray into an integer array named winningNumbersArrayInt.

let winningNumbersArrayInt = winningNumbersArray.map(Number);

// Convert the string variable userNumbers into an array variable named userNumbersArray.

let userNumbersArray = Array.from(String(userNumbers));

// Convert the array userNumbersArray into an integer array named userNumbersArrayInt.

let userNumbersArrayInt = userNumbersArray.map(Number);

// Sort the array winningNumbersArrayInt into a sorted array named winningNumbersArraySortA.

let winningNumbersArraySortA = winningNumbersArrayInt.sort()

// Sort the array winningNumbersArraySortA into a now sorted string array named winningNumbersArraySort.

let winningNumbersArraySort = winningNumbersArraySortA.toString();

// Sort the array userNumbersArrayInt into a sorted array named userNumbersArraySortA.

let userNumbersArraySortA = userNumbersArrayInt.sort()

// Sort the array userNumbersArraySortA into a now sorted string array named userNumbersArraySort.

let userNumbersArraySort = userNumbersArraySortA.toString();

// Create an if statement containing the methods to win or lose the lottery.

// If string variable userNumbers exactly matches string variable winningNumbersStr,
// the user wins $10,000.

if (userNumbers == winningNumbersStr) {

        // Display winning message.

        console.log('\nCongratulations! You have won $10,000!\n');}

    // Else if the sorted string variable userNumbersArraySort exactly matches the sorted string variable winningNumbersArraySort,
    // the user wins $3,000.

    else if (userNumbersArraySort == winningNumbersArraySort) {

        // Display winning message.

        console.log('\nCongratulations! You have won $3,000!\n');}     

    // Else if the integer array userNumbersArrayInt contains at least 1 element of the integer array winningNumbersArrayInt,
    // the user wins $1,000.

    else if (userNumbersArrayInt.some( x=> winningNumbersArrayInt.indexOf(x) >= 0)) {

        // Display winning message.

        console.log('\nCongratulations! You have won $1,000!\n');}     
    
    // Default failure statement.

    else {

        // Display losing message.

        console.log('\nSorry, you did not win.\n');}

// Opening line break.

console.log("");

// x

console.log("");

// Closing line break.

console.log("");