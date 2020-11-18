function cleanString(s) {
  let arr = [];
  s.split('').forEach(el => {
    if (el === '#') {
      arr.pop();
    } else {
      arr.push(el);
    }
  });
  return arr.join('');
};

console.log(cleanString('abc#d##c'));
console.log(cleanString('abc####d##c#'));


// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""