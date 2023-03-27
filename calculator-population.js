/*** Population Calculator
/*** by Andrew Kramer


This program calculates what the population will be in 10 years from a current population of 412,000,000. It factors in a birth every 7 seconds, a death every 10 seconds, and an immigrant every 60 seconds.


*** PSEUDOCODE


- Create a variable named years and assign it a value of 10.
- Create a variable named birthrate and assign it a value of 7.
- Create a variable named deathrate and assign it a value of 30.
- Create a variable named immigrantrate and assign it a value of 60.
- Create a variable named currentpop and assign it a value of 412000000.
- Create a variable named yearsSeconds and assign the formulate of years * 31536000.
- Create a variable named birthSeconds and assign the formula of yearsSeconds / birthrate.
- Create a variable named birthsINT and assign it the parsed integer value of birthSeconds
- Create a variable named deathSeconds and assign the formula of yearsSeconds / deathrate.
- Create a variable named deathsINT and assign it the parsed integer value of deathSeconds
- Create a variable named immigrantSeconds and assign the formula yearsSeconds / immigrantrate.
- Create a variable named immigrantINT and assign it the parsed integer value of immigrantSeconds.
- Create a variable named futurepop and assign the formula currentpop + birthsINT - deathsINT + immigrantINT
- Create a variable named futurepopINT and assign it the parsed integer value of futurepop.
- Display currentpop and futurepopINT message.


*/


// Create a variable named years and assign it a value of 10.

let years = 10;

// Create a variable named birthrate and assign it a value of 7.

let birthrate = 7;

// Create a variable named deathrate and assign it a value of 30.

let deathrate = 30;

// Create a variable named immigrantrate and assign it a value of 60.

let immigrantrate = 60;

// Create a variable named currentpop and assign it a value of 412000000.

let currentpop = 412000000;

// Create a variable named yearsSeconds and assign the formulate of years * 31536000.

let yearsSeconds = years * 31536000;

// Create a variable named birthSeconds and assign the formula of yearsSeconds / birthrate.

let birthSeconds = yearsSeconds / birthrate;

// Create a variable named birthsINT and assign it the parsed integer value of birthSeconds

let birthsINT = parseInt(birthSeconds);

// Create a variable named deathSeconds and assign the formula of yearsSeconds / deathrate.

let deathSeconds = yearsSeconds / deathrate;

// Create a variable named deathsINT and assign it the parsed integer value of deathSeconds

let deathsINT = parseInt(deathSeconds);

// Create a variable named immigrantSeconds and assign the formula yearsSeconds / immigrantrate.

let immigrantSeconds = yearsSeconds / immigrantrate;

// Create a variable named immigrantINT and assign it the parsed integer value of immigrantSeconds.

let immigrantsINT = parseInt(immigrantSeconds);

// Create a variable named futurepop and assign the formula currentpop + birthsINT - deathsINT + immigrantINT

let futurepop = currentpop + birthsINT - deathsINT + immigrantsINT;

// Create a variable named futurepopINT and assign it the parsed integer value of futurepop.

let futurepopINT = parseInt(futurepop);

// Opening line break.

console.log("");

// Display currentpop and futurepopINT message.

console.log("The current population is", Intl.NumberFormat().format(currentpop) + ", and in 10 years the population will be", Intl.NumberFormat().format(futurepopINT) + ".");

// Closing line break.

console.log("");