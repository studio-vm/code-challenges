function sortArray(array) {

  let temp = [];
  let odds = [];
  array.forEach(num => {
    if (num % 2 === 0 && num !== 0) {
      temp.push(num);
    } else if (num % 2 === 1) {
      odds.push(num);
      temp.push('');
    } else {
      temp.push(num);
    }
  });
  odds.sort((a, b) => a - b);
  let result = [];
  temp.forEach(num => {
    if (num === '') {
      result.push(odds[0]);
      odds.shift();
    } else {
      result.push(num);
    }
  });
  return result;
  // temp.sort()
  // Return a sorted array.
  console.log(temp);
  console.log(result);
  console.log(odds);
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));

// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]