/*** Password Checker
/*** by Andrew Kramer


This program creates a class named PasswordChecker that has one property: password, and one method: check(). The check() method checks the password to see if it is strong. A strong password must be at least 8 characters long, contain at least one uppercase letter, contain at least one lowercase letter, contain at least one number, and contain at least one special character.


*** PSEUDOCODE


- Create a constant named readlineSync to use the readlineSync node package.

- Create a constant named strong to use the regex to check for a strong password.

- Create a class named PasswordChecker with one property: password.
   - Create a constructor that takes one argument and assigns it to the property.
   - Create a method named check() that checks the password to see if it is strong.
       - If the password is strong, display a message that the password is strong.
       - Else, display a message that the password is weak.
       - Prompt the user to enter a strong password.

- Create a new PasswordChecker object named pwd.
- Call the check() method on the pwd object.


*/


// Create a constant named readlineSync to use the readlineSync node package.

const readlineSync = require('readline-sync');

// Create a constant named strong to use the regex to check for a strong password.

const strong = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

// Create a class named PasswordChecker with one property: password.

class PasswordChecker {

    // Create a constructor that takes one argument and assigns it to the property.

    constructor( password ) {

        this.password = password;

    }

    // Create a method named check() that checks the password to see if it is strong.

    check() {

        // If the password is strong, display a message that the password is strong.
        
        if (strong.test(this.password)){

        console.log('\nPassword is strong.');

        console.log('\n');
    
        }

        // Else, display a message that the password is weak.

        else {

        console.log('\nPassword is weak.');

        // Prompt the user to enter a strong password.

        pwd = new PasswordChecker(readlineSync.question('\nEnter a strong password: '));

        // Call the check() method on the pwd object.

        pwd.check();

        }

    }

}

// Create a new PasswordChecker object named pwd.

pwd = new PasswordChecker(readlineSync.question('\n\n\nEnter a strong password: '));

// Call the check() method on the pwd object.

pwd.check();
