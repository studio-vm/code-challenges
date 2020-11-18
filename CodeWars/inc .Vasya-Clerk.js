function tickets(peopleInLine) {
  let register = [];

  if (peopleInLine[0] !== 25 || peopleInLine[1] !== 25) {
    return 'NO';
  } else {
    register.push(peopleInLine[0]);
    register.push(peopleInLine[1]);
  }
  console.log(register);

  for (let i = 2; i < peopleInLine.length; i++) {
    console.log(register.length - 1);
    console.log(peopleInLine[2]);
    
    if ((peopleInLine[i] - 25 >= peopleInLine[register.length - 1])) {
      
      console.log(register);
      register.pop();
      register.push(peopleInLine[i]);
      console.log(register);

      i++;
    } 
  }
  return 'YES';
}

// console.log(tickets([25, 25, 50, 50])); //yes
console.log(tickets([25, 25, 25, 100, 25, 25, 50, 100, 25, 25, 50, 100, 25, 25, 50, 100, 25, 25, 25, 100])); //yes
// console.log(tickets([25, 100])); // no



// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

// Examples: