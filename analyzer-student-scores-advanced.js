/*** Advanced Student Score Analyzer
/*** by Andrew Kramer


This program will ask the user to enter the number of students, and then will ask the user to enter the score of each student, and will then determine and output the grade of each student.


*** PSEUDOCODE


- Create a constant named readlineSync to use the readlineSync node package.

- Create an empty array named students.
- Create an accumulator named topScore.

- Ask the user to enter the amount of students and assign the input to the variable studentQuantity.

- Establish a for loop to iterate for however times requested.
   - Ask the user to enter the score and assign the input to the studentScore variable.
   - Add the score to the array named students.
   - If the studentScore is higher than the topScore...
       - Assign it to be the new topScore.

- Use the forEach function to iterate over each index in the array named students.
       - Use if/else statements to determine the grade of each student, and display the grade of each student.


*/


// Create a constant named readlineSync to use the readlineSync node package.

const readlineSync = require('readline-sync');

// Create an empty array named students.

let students = [];

// Create an accumulator named topScore.

let topScore = 0;

// Ask the user to enter the amount of students and assign the input to the variable studentQuantity.

studentQuantity = readlineSync.questionInt('\nEnter the number of students: ');

// Establish a for loop to iterate for however times requested.

for (let x = 0; x < studentQuantity; x++) {

    // Ask the user to enter the score and assign the input to the studentScore variable.

    studentScore = readlineSync.questionInt("\nEnter score: ")

    // Add the score to the array named students.

    students.push(studentScore)

    // If the studentScore is higher than the topScore.....

    if (studentScore > topScore) {

            // Assign it to be the new topScore.

            topScore = studentScore;}};

// Use the forEach function to iterate over each index in the array named students.

students.forEach((x,i) => {

    // If the element value is greater than or equal to the topScore minus 10...
     
    if (x >= (topScore-10)) {

        // Display this message.

        console.log(`\nStudent ` + i + `'s score is ` + x + ` and their grade is A.`)
    }

    // Else if the element value is greater than or equal to the topScore minus 20...

    else if (x >= (topScore-20)) {

        // Display this message.

        console.log(`\nStudent ` + i + `'s score is ` + x + ` and their grade is B.`)
    }

    // Else if the element value is greater than or equal to the topScore minus 30...

    else if (x >= (topScore-30)) {

        // Display this message.

        console.log(`\nStudent ` + i + `'s score is ` + x + ` and their grade is C.`)
    }

    // Else if the element value is greater than or equal to the topScore minus 40...

    else if (x >= (topScore-40)) {

        // Display this message.

        console.log(`\nStudent ` + i + `'s score is ` + x + ` and their grade is D.`)
    }

    // Else the element value is less than the topScore minus 40....

    else {

        // Display this message.

        console.log(`\nStudent ` + i + `'s score is ` + x + ` and their grade is F.`)
    };})

// Opening line break.

console.log("");

// x

console.log("");

// Closing line break.

console.log("");