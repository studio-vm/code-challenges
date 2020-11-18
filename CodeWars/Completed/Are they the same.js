function comp(array1, array2) {
console.log(array1);
console.log(array2);
// array2 = array2.map(x => x = Math.floor(Math.sqrt(x)));
array2 = array2.map(x => x = Math.sqrt(x));
console.log(array2);

  let count = array2.length;
  console.log(count);

  for (let i = 0; i < array1.length; i++) {
    const element = array1[i];

    if (array2.some(x => x === element)) {
      count--;
    }
  }

  if (count === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(comp([78, 28, 39, 66, 76, 95, 33, 67], [6084, 784, 1521, 4356, 5777, 9025, 1089, 4489]));