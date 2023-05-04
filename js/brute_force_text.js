// The maximum number of characters
const MAX_LENGTH = 8;

// Characters
const CHARACTERS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !#$%\&()*+,-./:;<=>?@[\]^_{|}~";

/**
 * Converts a decimal number to a text string from CHARACTERS
 * @param {number} num Decimal number to convert to text 
 * @returns {string} Text string from CHARACTERS at the position of the decimal number
 */
function decimalToText(num) {
    let str = "";
    while (num != 0) {
        str += CHARACTERS.charAt((num - 1) % CHARACTERS.length);
        num = Math.floor((num - 1) / CHARACTERS.length);
    }
    return str;
}

/**
 * Returns all combinations of CHARACTERS at the given length
 * @param {int} length Length of output
 * @returns Count of combinations at length, {x | x = CHARACTERS.length ^ length}
 */
function combinations(length = 1) {
    return Math.pow(CHARACTERS.length, length);
}

/**
 * Returns all possible combinations of CHARACTERS at lengths 1 to length
 * @param {int} length Maximum length of output
 * @returns Combinations of CHARACTERS at lengths 1 to length
 */
function combinationsStacked(length = 1) {
    if (length > 1) {
        return combinations(length) + combinationsStacked(length - 1);
    }
    return combinations();
}

/**
 * Gets all combinations of CHARACTERS to, including, length
 * @param {int} length Maximum length of output
 * @example getStrings(3) // Prints array of all combinations of CHARACTERS 
 */
function getStrings(length = MAX_LENGTH) {
    let text = [];
    for (i = 0; i <= combinationsStacked(length); i++) {
        text[i] = decimalToText(i);
    }
    console.log(text);
}
getStrings();