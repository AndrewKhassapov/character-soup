// The maximum number of characters
// This is longest common color name
const MAX_LENGTH = ("permanent geranium lake").length;
// Characters
const FROM = "abcdefghijklmnopqrstuvwxyz ";

var text = [];

function decimalToText(num) {
    let str = "";
    while (num != 0) {
        str += FROM.charAt((num - 1) % FROM.length);
        num = Math.floor((num - 1) / FROM.length);
    }
    return str;
}

for (i = 0; i < Math.pow(FROM.length, MAX_LENGTH); i++) {
    text[i] = decimalToText(i);
}

console.log(text);