var encryptThis = function (text) {
  text.split('');
  console.log(text);
  console.log(text);
  let first = text[0];
  first = text.charCodeAt(0);
  console.log(first);
  text[0] = first;
  return text;
};

// console.log(123);
console.log(encryptThis("hello"));
// console.log(encryptThis("A wise old owl lived in an oak"));
// console.log(encryptThis("The more he saw the less he spoke"));