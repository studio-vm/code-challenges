function high(x) {
   let result = x.split(" ");
   let obj = {

   };

   result.forEach(word => {
      console.log(word);
      obj.word = 0;
      console.log(obj.word);

      for (let i = 0; i < word.length; i++) {
         // let x = 0;
         obj.word += word[i].charCodeAt(0) - 96;
         // console.log(x);
         //  = score
      }

      return obj;
   });

   console.log(result);
   console.log(obj);

   return result;

}


// Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');

console.log(high("man i need a taxi up to ubud"));

// Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano'); 

// console.log(high("what time are we climbing up the volcano"));

// Test.assertEquals(high('take me to semynak'), 'semynak');  
// console.log(high("take me to semynak'"));
//---------------------------------------------------
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.