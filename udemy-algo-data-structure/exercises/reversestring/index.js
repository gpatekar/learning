// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");

  // let reverseString = '';
  // for(let i = str.length - 1; i >= 0; i--) {
  //     console.log(str[i]);
  //     reverseString = reverseString + str[i];
  // }
  // return reverseString;

  // return str
  // .split('')
  // .reverse('')
  // .join('');
}

module.exports = reverse;
