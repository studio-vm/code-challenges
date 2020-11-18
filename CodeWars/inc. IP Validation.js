function isValidIP(str) {
  arr = str.split('.');
  console.log(arr);

  let count = 4;
  console.log(isNaN('4\n'));
  arr.forEach(e => {
    if (!isNaN(e) && Number(e) <= 255 && Number(e) >= 0) {
      count--
    }
  });

  return (count===0);
}

// console.log(isValidIP('123.456.789.0')); //false
// console.log(isValidIP('abc.def.ghi.jkl')); ///false
console.log(isValidIP("137.255.156.100")); ///true
console.log(isValidIP('1.2.3.4\n'));

// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Input to the function is guaranteed to be a single string.

// Examples
// Valid inputs:

// 1.2.3.4
// 123.45.67.89
// Invalid inputs:

// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Note that leading zeros (e.g. 01.02.03.04) are considered invalid.