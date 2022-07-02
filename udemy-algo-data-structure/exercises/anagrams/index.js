// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    const getCleanStr = (str) => {
        return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    }

    return getCleanStr(stringA) === getCleanStr(stringB);


    // SOLUTION 2

    // const getChunk = (str) =>{ 
    //   const cleanStringArr = str.replace(/[^\w]/g, '').toLowerCase().split('');
    //   const chunk = {};

    //   for(let i of cleanStringArr) {
    //     chunk[i] = chunk[i] + 1 || 1;
    //   }

    //   return chunk;
    // }

    // const chunkA = getChunk(stringA);
    // const chunkB = getChunk(stringB);


    // if(Object.keys(chunkA).length !== Object.keys(chunkB).length) {
    //     return false;
    // }
    // for(let i in chunkA ) {
    //     if(chunkA[i] !== chunkB[i]) {
    //         return false;
    //     }
    // }

    // return true;

    // SOLUTION 1
//   if (stringA.length !== stringB.length) {
//     return false;
//   }

//   const stringAAarrayA = stringA.toLowerCase().replace(/[^\w]/g, "").split("");
//   const chunkA = {};
//   for (let i of stringAAarrayA) {
//     chunkA[i] = chunkA[i] + 1 || 1;
//   }

//   const stringAAarrayB = stringB.toLowerCase().replace(/[^\w]/g, "").split("");
//   const chunkB = {};
//   for (let i of stringAAarrayB) {
//     chunkB[i] = chunkB[i] + 1 || 1;
//   }

//   let isAnagram = true;
//   for (const chunkAKey in chunkA) {
//     let matchedChunkBKey;
//     for (const chunkBKey in chunkB) {
//       if (chunkBKey === chunkAKey) {
//         matchedChunkBKey = chunkBKey;
//       }
//     }

//     if (!matchedChunkBKey || chunkA[chunkAKey] !== chunkB[matchedChunkBKey]) {
//       isAnagram = false;
//     }
//   }
//   return isAnagram;
}

module.exports = anagrams;
