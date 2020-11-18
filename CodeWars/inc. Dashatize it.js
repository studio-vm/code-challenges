function dashatize(num) {
  let temp = [];
  num = num.toString().split('');
  console.log(num);

  for (let i = 0; i < num.length; i++) {
    console.log(i);

    if (i === 0) {
      if (num[i] % 2 === 1) {
        temp.push(num[i]);
      // temp.push('-');
      } else {
        temp.push(num[i]);
      }
    } else if (i === num.length - 1) {
      if (num[i] % 2 === 1) {
        // temp.push('-');
        temp.push(num[i]);
      } else {
        temp.push(num[i]);
      }
    } else {
      if (num[i] % 2 === 1) {
        temp.push('-');
        temp.push(num[i]);
        temp.push('-');
      } else {
        temp.push(num[i]);
      }
    }


  }

  console.log(temp);
  return temp.join('');
  //get 'em
}


// Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

//   Ex:

// console.log(dashatize(274)) //-> '2-7-4'
console.log(dashatize(6815))// -> '68-1-5'
