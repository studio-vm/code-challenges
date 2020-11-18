// function pigIt(str) {
//   return str.split(' ').map(x => x.substring(1) + x[0] + 'ay').join(' ');
// }

const pigIt = (str => str.split(' ').map(x => x.substring(1) + x[0] + 'ay').join(' '));

console.log(pigIt('Pig latin is cool !'));
// igPay atinlay siay oolcay'
console.log(pigIt('This is my string'));
// ,'hisTay siay ymay tringsay'


// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !