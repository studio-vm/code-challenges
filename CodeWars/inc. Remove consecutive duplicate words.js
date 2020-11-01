const removeConsecutiveDuplicates = function (s) {
   let regex = /(a-z\s){?}/gi
   console.log(s.match(regex));
}



console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"));
   
// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

