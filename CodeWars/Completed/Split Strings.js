
function solution(str) {
   let result = [];
   if (str.length % 2 === 1) {
      str = str + "_";
   }

   for (let i = 0; i < str.length;) {
      result.push(str.split("").splice(i, 2).join(""));
      i += 2;
   }  

   return result;
   
}


// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

console.log(solution('abc'));
// should return ['ab', 'c_']
console.log(solution('abcdef'));
// solution('abcdef') // should return ['ab', 'cd', 'ef']

// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript