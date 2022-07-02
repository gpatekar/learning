// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
const newChunk = [];
let x = 0;

while (x < array.length) {
    newChunk.push(array.slice(x, x + size));
    x = x + size;
}

return newChunk;



// const newChunk = [];
// for(let el of array) {
//     lastChunk = newChunk[newChunk.length - 1];

//     if(!lastChunk || lastChunk.length === size){
//         newChunk.push([el]);
//     } else {
//         lastChunk.push(el)
//     }
// }

// return newChunk;



//   const newChunk = []; 
//   for (let i = 0; i < array.length; i++) {
//     if(!newChunk.length || newChunk[newChunk.length - 1].length === size) {
//         newChunk.push([array[i]]);
//     } else {
//         newChunk[newChunk.length - 1].push(array[i])
//     }
//   }
//     return newChunk;
}

module.exports = chunk;
