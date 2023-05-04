'use strict'
/**
 * Generates an array of all possible combinations of CHARACTERS from 1 digit to MAX_LENGTH digits.
 * @description Generates an array of all possible combinations of CHARACTERS from 1 digit to MAX_LENGTH digits.
 * Warning: A long maximum length (eg. 12) with a large number of unique characters (eg. 62) will take a long time to generate or may not complete without optimization. 
 */

/**
 * The maximum number of characters
 * @type {number}
 * @example MAX_LENGTH = 8 will create outputs from 1 (inclusive) to 8 (inclusive) characters.
 */
const MAX_LENGTH:number = 8;

/**
 * Unique characters
 * @type {String}
 */
const CHARACTERS:String = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !#$%\&()*+,-./:;<=>?@[\]^_{|}~";

/**
 * Array of brute-force generated strings.
 * @type {Array<String>}
 */
var text:Array<String> = [];


/**
 * Returns all combinations of CHARACTERS at the given length
 * @param {int} length Length of output
 * @returns {int} Count of combinations at length, {x | x = CHARACTERS.length ^ length}
 */
function combinations(length:number = 1):number {
    return Math.pow(CHARACTERS.length, length);
}


/**
 * Returns all possible combinations of CHARACTERS at lengths 1 to length
 * @param {int} length Maximum length of output
 * @returns {int} Combinations of CHARACTERS at lengths 1 to length
 */
function combinationsStacked(length:number = 1):number {
    if (length > 1) {
        return combinations(length) + combinationsStacked(length - 1);
    }
    return combinations();
}


/**
 * String equivalent of decimal value.
 * @param {number} num Integer to be converted to string.
 * @returns {String} String equivalent of decimal input.
 * @example An input of 0 will return the first character from the selection of characters.
 * @see CHARACTERS
 */
function decimalToText(num:number):String {
    let str:String = "";
    while (num != 0) {
        str += CHARACTERS.charAt((num - 1) % CHARACTERS.length);
        num = Math.floor((num - 1) / CHARACTERS.length);
    }
    return str;
}

for (let i:number = 0; i <= combinationsStacked(MAX_LENGTH); i++) {
    text[i] = decimalToText(i);
}

console.log(text);