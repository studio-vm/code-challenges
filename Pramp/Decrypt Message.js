function decrypt(word) {
  word = word.split('').map(l => l.charCodeAt(0));
  let answer = [];
  console.log(word);

  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      answer.push(word[i] - 1);
    };
    if (i > 0) {
      let ASCII = word[i] - word[i - 1];
      console.log(ASCII);
      while (ASCII < 97) {
        ASCII += 26;
      }
      answer.push(ASCII);
      console.log(ASCII);
    }
  }
  console.log(answer);
  return String.fromCharCode(...answer);
}
console.log(decrypt('dnotq'));

//*---------------------------------------------------------------------

// Decrypt Message
// An infamous gang of cyber criminals named “The Gray Cyber Mob”, which is behind many hacking attacks and drug trafficking, has recently become a target for the FBI. After intercepting some of their messages, which looked like complete nonsense, the agency learned that they indeed encrypt their messages, and studied their method of encryption.

// Their messages consist of lowercase latin letters only, and every word is encrypted separately as follows:

// Convert every letter to its ASCII value. Add 1 to the first letter, and then for every letter from the second one to the last one, add the value of the previous letter. Subtract 26 from every letter until it is in the range of lowercase letters a-z in ASCII. Convert the values back to letters.

// For instance, to encrypt the word “crime”

// Decrypted message:	c	r	i	m	e
// Step 1:	99	114	105	109	101
// Step 2:	100	214	319	428	529
// Step 3:	100	110	111	116	113
// Encrypted message:	d	n	o	t	q
// The FBI needs an efficient method to decrypt messages. Write a function named decrypt(word) that receives a string that consists of small latin letters only, and returns the decrypted word.

// Explain your solution and analyze its time and space complexities.

// Examples:

// input:  word = "dnotq"
// output: "crime"

// input:  word = "flgxswdliefy"
// output: "encyclopedia"
// Since the function should be used on messages with

// function decrypt(word) {
//   console.log(word.charCodeAt(0));
//   console.log(word.charCodeAt(0)+1);

//   word = word.split('');
//   let answer = [];
//   console.log(word);

//   for (let i = 0; i < word.length; i++) {
//     // if (word[i].charCodeAt(0) === 32) {
//     //   answer.push(word[i].charCodeAt(0))
//     // }
//     if (i === 0) {
//   answer.push(word[i].charCodeAt(0)-1)
//     };
//     if (i > 0) {
//       let letterASCII = word[i].charCodeAt(0) - word[i - 1].charCodeAt(0);
//       console.log(letterASCII);
//       while (letterASCII < 97) {
//         letterASCII += 26;
//       }
//       console.log(letterASCII);
//       answer.push(letterASCII);
//     }

//   }

//   console.log(answer);
//   return String.fromCharCode(...answer);
//   // your code goes here
// }
// console.log(decrypt('dnotq'));
// // console.log(decrypt('dnotq dnotq'));


// // console.log('a'.charCodeAt(0))
// // console.log('b'.charCodeAt(0))
// // console.log('y'.charCodeAt(0))
// // console.log('z'.charCodeAt(0)) 
// // console.log(' '.charCodeAt(0))
// // console.log('ABC'.charCodeAt(0))  // returns 65quokka

// console.log(String.fromCharCode(65, 66, 67));   // returns "ABC"