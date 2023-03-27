/*** Currency Converter Module
/*** by Andrew Kramer


Module containing functions to convert currencies.


*/


// Create a constant named readlineSync to use the readlineSync node package.

const readlineSync = require('readline-sync');

// euros_to_usd function
// Takes a value for euros and returns the value in US dollars.

function euros_to_usd(euros) {
    var usd = euros * 0.982508;
    return usd.toFixed(2);
}

// usd_to_euros function
// Takes a value for US dollars and returns the value in euros.

function usd_to_euros(usd) {
    var euros = usd * 1.015819;
    return euros.toFixed(2);
}

// cad_to_usd function
// Takes a value for Canadian dollars and returns the value in US dollars.

function cad_to_usd(cad) {
    var usd = cad * 0.742785;
    return usd.toFixed(2);
}

// usd_to_cad function
// Takes a value for US dollars and returns the value in Canadian dollars.

function usd_to_cad(usd) {
    var cad = usd * 1.346285;
    return cad.toFixed(2);
}

// pounds_to_dollars function
// Takes a value for United Kingdom pounds and returns the value in US dollars.

function pounds_to_dollars(pounds) {
    var usd = pounds * 1.127097;
    return usd.toFixed(2);
}

// usd_to_pounds function
// Takes a value for US dollars and returns the value in United Kingdom pounds.

function usd_to_pounds(usd) {
    var pounds = usd * 0.887235;
    return pounds.toFixed(2);
}

// yen_to_usd function
// Takes a value for Japanese yen and returns the value in US dollars.

function yen_to_usd(yen) {
    var usd = yen * 0.006932;
    return usd.toFixed(2);
}

// usd_to_yen function
// Takes a value for US dollars and returns the value in Japanese yen.

function usd_to_yen(usd) {
    var yen = usd * 144.254949;
    return yen.toFixed(0);
}

module.exports = {
    euros_to_usd,
    usd_to_euros,
    cad_to_usd,
    usd_to_cad,
    pounds_to_dollars,
    usd_to_pounds,
    yen_to_usd,
    usd_to_yen
}