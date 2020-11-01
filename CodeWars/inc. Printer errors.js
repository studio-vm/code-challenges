function printerError(s) {
   // console.log(s.length);
   let result = 0;
   let regex = /[a-m]+/g;
   let arr = []
   // console.log(regex.test("m"));
   // console.log(regex.test("z"));

   s.split("").forEach(letter => {
      console.log(letter);
      console.log(regex.test(letter));
      
      arr.push(regex.test(letter))

   });
   console.log(arr);
   return result;
   // your code
}


// console.log(printerError("aaabbbbhaijjjm"));
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));

// s="aaabbbbhaijjjm"
// error_printer(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// error_printer(s) => "8/22"