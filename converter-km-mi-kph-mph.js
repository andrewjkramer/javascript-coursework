/*** KM to MI and KPH to MPH Converter
/*** by Andrew Kramer


This program converts a provided distance in km to mi and then converts the kph to mph and displays each result in the console.


*** PSEUDOCODE


- Create a constant named KPH_TO_MPH and assign the value 1.609344.
- Create a constant named KM_TO_MI and assign the value 0.62137.
- Create a variable named km and assign the value 10.
- Create a variable named time and assign the value 55.5.
- Create a variable named kph and assign the formula km / time * 60.
- Create a variable named mi and assign the formula km * KM_TO_MI.
- Create a variable named kph2 to parse the kph variable into an integer.
- Create a variable named mi2 to fix the mi variable into a 2 decimal float.
- Create a variable named mph and assign the formula kph / KPH_TO_MPH.
- Create a variable named mph2 and parse the mph variable into an integer
- Display kph2, km, mi2, and mph2 variables in console messages.


*/


// Create a constant named KPH_TO_MPH and assign the value 1.609344.

const KPH_TO_MPH = 1.609344;

// Create a constant named KM_TO_MI and assign the value 0.62137.

const KM_TO_MI = 0.62137;

// Create a variable named km and assign the value 10.

let km = 10;

// Create a variable named time and assign the value 55.5.

let time = 55.5;

// Create a variable named kph and assign the formula km / time * 60.

let kph = km / time * 60;

// Create a variable named mi and assign the formula km * KM_TO_MI.

let mi = km * KM_TO_MI;

// Create a variable named kph2 to parse the kph variable into an integer.

let kph2 = parseInt(kph);

// Create a variable named mi2 to fix the mi variable into a 2 decimal float.

let mi2 = mi.toFixed(2);

// Create a variable named mph and assign the formula kph / KPH_TO_MPH.

let mph = kph / KPH_TO_MPH;

// Create a variable named mph2 and parse the mph variable into an integer

let mph2 = parseInt(mph);

// Opening line break.

console.log("");

// Display kph2 message.

console.log("Assuming Professor Tillman could run 10 kilometers in 55 min and 30 seconds (when he lived in Germany) he was running at a pace of", kph2, "kilometers per hour.");

// Line break.

console.log("");

// Display km and mi2 message.

console.log(km, "kilometers converts to", mi2, "miles.");

// Line break.

console.log("");

// Display mph2 message.

console.log("So, Professor Tillman was (assumingly) running at a pace of just over",mph2, "miles per hour!");

// Closing line break.

console.log("");