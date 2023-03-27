/*** Linear Equation Processor
/*** by Andrew Kramer


This program will ask the user to enter the values of a, b, c, d, e, and f, and will then calculate the value of x and y.


*** PSEUDOCODE


- Create a variable named a and assign it a value.
- Create a variable named b and assign it a value.
- Create a variable named c and assign it a value.
- Create a variable named d and assign it a value.
- Create a variable named e and assign it a value.
- Create a variable named f and assign it a value.

- Create a variable named d1 to calculate the first determinate and assign it the result of the formula (a)(d)-(b)(c)
- Create a variable named dx to calculate the x determinate and assign it the result of the formula (e)(d)-(b)(f)
- Create a variable named dy to calculate the y determinate and assign it the result of the formula (a)(f)-(e)(c)
- Create a variable named x to calculate the the value of x and assign it the result of the formula dx / d1
- Create a variable named y to calculate the the value of y and assign it the result of the formula dy / d1

- Display the value of x.
- Display the value of y.


*/


// Create a variable named a and assign it a value.

let a = 3.4

// Create a variable named b and assign it a value.

let b = 50.2

// Create a variable named c and assign it a value.

let c = 2.1

// Create a variable named d and assign it a value.

let d = .55

// Create a variable named e and assign it a value.

let e = 44.5

// Create a variable named f and assign it a value.

let f = 5.9

/* Create a variable named d1 to calculate the first determinate and assign
* it the result of the formula (a)(d)-(b)(c) */

d1 = a*d - b*c

/* Create a variable named dx to calculate the x determinate and assign
* it the result of the formula (e)(d)-(b)(f) */

dx = e*d - b*f

/* Create a variable named dy to calculate the y determinate and assign
* it the result of the formula (a)(f)-(e)(c) */

dy = a*f - e*c

/* Create a variable named x to calculate the the value of x and assign
* it the result of the formula dx / d1 */

x = dx / d1

/* Create a variable named y to calculate the the value of y and assign
* it the result of the formula dy / d1 */

y = dy / d1

// Opening line break.

console.log("");

// Display the value of x.

console.log("x is:", x)

// Line break.

console.log("")

// Display the value of y.

console.log("y is:", y)

// Closing line break.

console.log("");