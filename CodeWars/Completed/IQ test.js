function iqTest(numbers) {
   let even = [];
   let odd = [];
   let copy = numbers.split(" ")
   numbers.split(" ").forEach(num => {
         if (num % 2 === 0) {
            even.push(num);
         } else {
            odd.push(num);
      }
      });
   
   console.log(even);
   console.log(odd[0]);
   console.log(copy);

   // odd.length === 1? odd[0] : even[0]
   console.log(odd[0]);
   console.log(odd.length);
   console.log(copy.indexOf(odd[0])+1);
   console.log(copy.indexOf(even[0]) + 1);
   
   if (odd.length === 1) {
      console.log(copy.indexOf(odd[0])+1);
      return copy.indexOf(odd[0]+1);
   } else {
      return copy.indexOf(even[0]+1);
   }
}
 



console.log(iqTest("2 4 7 8 10"));
// console.log(iqTest("1 2 2"));