/*** Student Score Analyzer
/*** by Andrew Kramer


This program will ask the user to enter the number of students and scores they would like to input and then will ask the user to enter the name and score of each student. The program will then output the name of the student with the highest score.


*** PSEUDOCODE


- Create a constant named readlineSync to use the readlineSync node package.

- Create an empty object named student.
- Create an empty object named studentName.
- Create an empty object named studentScore.

- Set an "accumulator" variable set to 0 to a variable named topScore.

- Request the user to enter the number of students and scores they would like to input and assign the integer to variable studentQuantity.

- Create a for loop to iterate for however many times was inputted into the variable studentQuantity.
    - Create the iterable student object.

    - Create the studentName property within the student object.
    - Request the user to enter the student's name and assign it to the studentNameX key within the studentName 
    property.

    - Create the studentScore property within the student object.
    - Request the user to enter the student's score and assign it to the studentScoreZ key within the studentScore property.

    - Update the student object.

    - Create an if statement to check if that student's score is higher than the current value of topScore.
        - If the student's score is higher than the current topScore, assign it to be the new topScore.
        - Assign the student's name of the new topScore to topStudent.

- Display a message showing the top student and their score.


*/


// Create a constant named readlineSync to use the readlineSync node package.

const readlineSync = require('readline-sync');

// Create an empty object named student.

let student = {};

// Create an empty object named studentName.

let studentName = {};

// Create an empty object named studentScore.

let studentScore = {};

// Set an "accumulator" variable set to 0 to a variable named topScore.

let topScore = 0;

// Request the user to enter the number of students and scores they would like to input and
// assign the integer to variable studentQuantity.

studentQuantity = readlineSync.questionInt('\nHow many students would you like to enter?\n\n');

// Create a for loop to iterate for however many times was inputted into the variable studentQuantity.

for (let x = 0; x < studentQuantity; x++) {

        // Create the iterable student object.

        student[x] = 

        // Create the studentName property within the student object.

        studentName[x] = 

        // Request the user to enter the student's name and assign it to the studentNameX key within the studentName property.

        {studentNameX: readlineSync.question("\nEnter the student's name:\n\n")};

        // Create the studentScore property within the student object.

        studentScore[x] =

        // Request the user to enter the student's score and assign it to the studentScoreZ key within the studentScore property.// x

        {studentScoreZ: readlineSync.questionInt("\nEnter " + studentName[x].studentNameX + "'s score:\n\n")};

        // Update the student object.

        student = {studentName,studentScore};

        // Create an if statement to check if that student's score is higher than the current value of topScore.

        if (studentScore[x].studentScoreZ > topScore) {

            // If the student's score is higher than the current topScore, assign it to be the new topScore.

            topScore = studentScore[x].studentScoreZ;
            
            // Assign the student's name of the new topScore to topStudent.
            
            topStudent = studentName[x].studentNameX}}

// Display a message showing the top student and their score.

console.log('\nThe student with the highest score is',topStudent,'with a score of',topScore + ".")

// Opening line break.

console.log("");

// x

console.log("");

// Closing line break.

console.log("");