function validBraces(braces) {
  if (braces.length === 0) {
    return false;
  }
  let stack = [];
  braces.split('').forEach(brace => {
    if (brace === '[' || brace === '(' || brace === '{') {
      stack.push(brace);
    };
    if (
      (brace === ']' && stack[stack.length - 1] === '[') ||
      (brace === '}' && stack[stack.length - 1] === '{') ||
      (brace === ')' && stack[stack.length - 1] === '(')
    ) {
      stack.pop();
    }
    // console.log(stack);
  }
  );
  // console.log(stack);
  if (stack.length === 0)
    return true;
  else
    return false;
}

console.log(validBraces("(){}[]"));
console.log(validBraces("[({})](]"));
console.log(validBraces("([{}])"));
// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

