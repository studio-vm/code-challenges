function findUniq(arr) {

  let result;

  if (arr[0] === arr[arr.length - 1]) {
    let multiple = arr[0];
    result = arr.filter(x => x !== arr[0]);
    return Number(result);  // do magic
  } else if ((arr[0] !== arr[arr.length - 1]) && (arr[0] === arr[1])) {
    return arr[arr.length - 1];
  } else {
    return 0;
  }
}


console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));