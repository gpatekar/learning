// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 1, col = "") {
  const midPoint = Math.floor((n * 2 - 1) / 2);
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let column = 0; column < 2 * n - 1; column++) {
      if (midPoint - row <= column && midPoint + row >= column) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }

  //   if (n === row) {
  //     return;
  //   }

  //   if (col.length >= row + n) {
  //     console.log(col);
  //     pyramid(n, row + 1);
  //     return;
  //   }

  //   if (col.length <= n - row || col.length > row) {
  //     col += " ";
  //   } else {
  //     col += "#";
  //   }
  //   pyramid(n, row, col);
}

module.exports = pyramid;
