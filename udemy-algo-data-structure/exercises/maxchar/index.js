// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let max = 0;
    let maxChar = '';
    const char = {};
    for(let i of str) {
        char[i] = char[i] + 1 || 1; 
    }

    for(let i in char) {
        if(char[i] > max) {
            max = char[i];
            maxChar = i;
        }
    }

    return maxChar;

}
maxChar("Hello");

module.exports = maxChar;
