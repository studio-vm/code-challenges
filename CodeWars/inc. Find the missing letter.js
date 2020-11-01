function findMissingLetter(array) {
   let currCharCode = array[0].charCodeAt(0);
   console.log(currCharCode);
   console.log(String.fromCharCode(101));

   console.log(array[0].charCodeAt(0) === currCharCode)

   for (let i = 0; i < array.length; i++) {
      if (array[i].charCodeAt(0) === currCharCode) {
         currCharCode++;
         i++;
         // console.log(currCharCode);
         // console.log(i);
      }
   }
   return String.fromCharCode(currCharCode);
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
// console.log(findMissingLetter(["O","Q","R","S"]));

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"