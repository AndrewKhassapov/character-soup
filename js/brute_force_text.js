// The maximum number of characters
const MAX_LENGTH = 8;

// Characters
const CHARACTERS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !#$%\&()*+,-./:;<=>?@[\]^_{|}~";

var text = [];

function decimalToText(num) {
    let str = "";
    while (num != 0) {
        str += CHARACTERS.charAt((num - 1) % CHARACTERS.length);
        num = Math.floor((num - 1) / CHARACTERS.length);
    }
    return str;
}

for (i = 0; i < Math.pow(CHARACTERS.length, MAX_LENGTH); i++) {
    text[i] = decimalToText(i);
}

console.log(text);