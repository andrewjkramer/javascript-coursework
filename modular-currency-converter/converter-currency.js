/*** Currency Converter
/*** by Andrew Kramer


This program converts currencies and allows the user to choose which conversion to perform.


*** PSEUDOCODE


- Create a constant named readlineSync to use the readlineSync node package.
- Import conversionutils module to use conversion functions within.

- Display welcome message.

- Create function named menu to use to display the menu without needing to type it out each time it's needed.

- Call the menu function to display the menu.
- Prompt the user for input and assign the input value to variable named userSelection.

- Establish a while loop to run as long as the user's input is not equal to 'q' and not equal to 'Q'.
- If the input is 'q' or 'Q', break out of this primary while loop.

- Establish a nested while loop to run if the user's input does not match any of the allowed menu options.
- If they enter 'q' or 'Q' on the retry, break out of this nested while loop.

- Display the exit message for when the user inputs 'q' or 'Q'.


*/


// Create a constant named readlineSync to use the readlineSync node package.

const readlineSync = require('readline-sync');

// Import conversionutils module to use conversion functions within.

const conversionutils = require('./currency-conv-module');

// Display welcome message.

console.log('\nWelcome to the Terminal Currency Converter.');

// Create function named menu to use to display the menu
// without needing to type it out each time it's needed.

function menu() {console.log(
            '\nWhich conversion do you need?\n',
            '\nA. Euros to USD\n',
            '\nB. USD to Euros\n',
            '\nC. CAD to USD\n',
            '\nD. USD to CAD\n',
            '\nE. Pounds to USD\n',
            '\nF. USD to Pounds\n',
            '\nG. Yen to USD\n',
            '\nH. USD to Yen\n',
            '\nQ. Quit')}

// Call the menu function to display the menu.

menu();

// This function would not cooperate so commented it out.
//
// function userValue() {
//     userValue = readlineSync.questionFloat('\nPlease enter the amount to convert: ');
//     return x;
// }

// Prompt the user for input and assign the input value to variable named userSelection.

userSelection = readlineSync.question('\n');

// Establish a while loop to run as long as the user's input is not equal to 'q' and not equal to 'Q'.

while (userSelection !=='q' && userSelection !== 'Q') {

        // Establish a nested while loop to run if the user's input does not match any of the allowed
        // menu options.
        //
        // I suppose password would've worked where you can use an allowed charset,
        // but I didn't want the user to have to verify their menu entry, as I did in the
        // lottery program..........................

        while (userSelection !== 'a' &&
               userSelection !== 'A' &&
               userSelection !== 'b' &&
               userSelection !== 'B' &&
               userSelection !== 'c' &&
               userSelection !== 'C' &&
               userSelection !== 'd' &&
               userSelection !== 'D' &&
               userSelection !== 'e' &&
               userSelection !== 'E' &&
               userSelection !== 'f' &&
               userSelection !== 'F' &&
               userSelection !== 'g' &&
               userSelection !== 'G' &&
               userSelection !== 'h' &&
               userSelection !== 'H') {

            // Display invalid input message.

            console.log('\nPlease choose a valid option or enter Q to Quit.')

            // Allow for input retry.

            userSelection = readlineSync.question('\n');

            // If they enter 'q' or 'Q' on the retry, break out of this nested while loop.

            if (userSelection == 'q' || userSelection == 'Q') {
                break;}

        }

    // If the input is 'q' or 'Q', break out of this primary while loop.

    if (userSelection == 'q' || userSelection == 'Q') {
        break;}

    // If the input is 'a' or 'A'...

    if (userSelection == 'a' || userSelection == 'A') {

        // Ask the user to input the amount to convert.

        userValue = readlineSync.questionFloat('\nPlease enter the amount to convert: ');

        // Call the appropriate function passing the userValue argument, 
        // and assign the returned value to the appropriate variable.

        let usd = conversionutils.euros_to_usd(userValue);

        // Display the conversion.

        console.log('\n' + userValue +' Euros converts to ' + usd + ' USD.');

        // Display the menu..

        menu();

        // Receive the next input per the menu options..

        userSelection = readlineSync.question('\n');}

    if (userSelection == 'b' || userSelection == 'B') {
        userValue = readlineSync.questionFloat('\nPlease enter the amount to convert: ');
        let euros = conversionutils.usd_to_euros(userValue);
        console.log('\n' + userValue +' USD converts to ' + euros + ' Euros.');
        menu();
        userSelection = readlineSync.question('\n');}

    if (userSelection == 'c' || userSelection == 'C') {
        userValue = readlineSync.questionFloat('\nPlease enter the amount to convert: ');
        let usd = conversionutils.cad_to_usd(userValue);
        console.log('\n' + userValue +' CAD converts to ' + usd + ' USD.');
        menu();
        userSelection = readlineSync.question('\n');}

    if (userSelection == 'd' || userSelection == 'D') {
        userValue = readlineSync.questionFloat('\nPlease enter the amount to convert: ');
        let cad = conversionutils.usd_to_cad(userValue);
        console.log('\n' + userValue +' USD converts to ' + cad + ' CAD.');
        menu();
        userSelection = readlineSync.question('\n');}

    if (userSelection == 'e' || userSelection == 'E') {
        userValue = readlineSync.questionFloat('\nPlease enter the amount to convert: ');
        let usd = conversionutils.pounds_to_dollars(userValue);
        console.log('\n' + userValue +' Pounds converts to ' + usd + ' USD.');
        menu();
        userSelection = readlineSync.question('\n');}

    if (userSelection == 'f' || userSelection == 'F') {
        userValue = readlineSync.questionFloat('\nPlease enter the amount to convert: ');
        let pounds = conversionutils.usd_to_pounds(userValue);
        console.log('\n' + userValue +' USD converts to ' + pounds + ' Pounds.');
        menu();
        userSelection = readlineSync.question('\n');}

    if (userSelection == 'g' || userSelection == 'G') {
        userValue = readlineSync.questionFloat('\nPlease enter the amount to convert: ');
        let usd = conversionutils.yen_to_usd(userValue);
        console.log('\n' + userValue +' Yen converts to ' + usd + ' USD.');
        menu();
        userSelection = readlineSync.question('\n');}

    if (userSelection == 'h' || userSelection == 'H') {
        userValue = readlineSync.questionFloat('\nPlease enter the amount to convert: ');
        let yen = conversionutils.usd_to_yen(userValue);
        console.log('\n' + userValue +' USD converts to ' + yen + ' Yen.');
        menu();
        userSelection = readlineSync.question('\n');}

}

// Display the exit message for when the user inputs 'q' or 'Q'.

console.log('\nPlease close this window to exit.');

// Opening line break.

console.log("");

// Closing line break.

console.log("");