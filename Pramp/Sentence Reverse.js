// function reverseWords(arr) {
//   console.log(arr);

//   return arr.join('').split(' ').reverse().join(' ').split('');
// }

// Hi, I am Valentin, I am an Architect
// been teaching myself Javascript for 2 months

function reverseWords(arr) {
  if (arr.length === 0) {
    return 'Array is Empty';
  }

  // arr = arr.reverse();

  let tempArr = [];
  let tempWord = [];
  for (let i = 0; i < arr.length; i++) {
    if (!/[a-z]/.test(arr[i])) {
      tempArr = [...tempWord, arr[i]];
      // tempArr = [arr[i], ...tempWord];
      tempWord = [];
    }

    // tempWord = [arr[i], ...tempWord];
    tempWord = [...tempWord, arr[i]];

  }
  console.log(tempWord);
  // tempArr.pop()
  console.log(arr);
  console.log(tempArr);
}
// console.log(reverseWords(['h', 'i', '  ', 'm', 'e']));

console.log(reverseWords(['p', 'e', 'r', 'f', 'e', 'c', 't', '  ', 'm', 'a', 'k', 'e', 's', '  ', 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e']));


// You are given an array of characters arr that consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.

// Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

// Explain your solution and analyze its time and space complexities.

// Example:

// input:  arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
//                 'm', 'a', 'k', 'e', 's', '  ',
//                 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

// output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
//           'm', 'a', 'k', 'e', 's', '  ',
//           'p', 'e', 'r', 'f', 'e', 'c', 't' ]

// Watch for edge cases e.g. empty array, array with nothing but spaces, array with one word only, multiple spaces between words, etc.