function alphabetPosition(text) {
   let result = text.toLowerCase().match(/[a-z]/gi);
   let letter = "a"
   console.log(letter.charCodeAt(0))
   return result
      .map(x => {
         let code = x.charCodeAt(0);
         return code - 96
      }).join(" ")
   console.log(result);

   // return text;
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)