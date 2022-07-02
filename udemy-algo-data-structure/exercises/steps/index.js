// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    steps(n, row + 1);
    return;
  }

  if(stair.length <= row) {
    stair = stair + '#'
  } else {
    stair = stair + ' '
  }

  steps(n, row, stair);

  // const arr = new Array(n).fill(" ");
  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j <= i; j++) {
  //     arr[j] = "#";
  //   }
  //   console.log(arr.join(""));
  // }
}

module.exports = steps;
