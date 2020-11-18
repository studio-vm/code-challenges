function arrayDiff(a, b) {
  let diff = [];
  let newArr = [...a];

  if (b.length === 0) {
    return a;
  }

  b.forEach(nB => {
    if (a.includes(nB)) {
      newArr.splice(newArr.indexOf(nB), 1);
    }
  });

  console.log(a);
  console.log(b);
}

// console.log(arrayDiff([3, 4], [3]));
// console.log(arrayDiff([1, 8, 2], []));
// console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
console.log(arrayDiff([-6, -19, -8, 6, 7, -12, -9, -12, -2, 19, -16, 11, -5, -16, -6, -7, 13, -3, 6, -18], [11, -16, -5, 7, 13, -7, -2, -6, -12, -19, 19, 6, -3, 6]));


// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]
