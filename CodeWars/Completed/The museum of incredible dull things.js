function removeSmallest(numbers) {
   let min = Math.min(...numbers);
   let copy = [...numbers]
   // console.log(min);
   copy.splice(numbers.indexOf(min), 1);
   return copy;

   // throw "TODO: removeSmallest";
}
 

console.log(removeSmallest([2,3,4,5])) //= [2,3,4,5]
console.log(removeSmallest([5,3,2,1,4])) //= [5,3,2,4]
console.log(removeSmallest([2,2,1,2,1])) //= [2,2,2,1]