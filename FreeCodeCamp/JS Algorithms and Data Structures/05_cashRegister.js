// Create an array of objects which hold the denominations and their values
var denom = [
   { name: "ONE HUNDRED", val: 100.0 },
   { name: "TWENTY", val: 20.0 },
   { name: "TEN", val: 10.0 },
   { name: "FIVE", val: 5.0 },
   { name: "ONE", val: 1.0 },
   { name: "QUARTER", val: 0.25 },
   { name: "DIME", val: 0.1 },
   { name: "NICKEL", val: 0.05 },
   { name: "PENNY", val: 0.01 }
 ];
 
function checkCashRegister(price, cash, cid) {
   let output = { status: null, change: [] };
   let change = cash - price;

   //transform CID into drawer obj

   var register = cid.reduce((acc, curr) => {
      // acc.total += curr[1].toFixed(2);
      // acc[curr[0]] = curr[1];
      return acc;
   }, { total: 0 })
   console.log(register);

 }
 
 console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
 
// console.log(.1 + .2)

//  [
// 	["PENNY", 1.01],
// 	["NICKEL", 2.05],
// 	["DIME", 3.1],
// 	["QUARTER", 4.25],
// 	["ONE", 90],
// 	["FIVE", 55],
// 	["TEN", 20],
// 	["TWENTY", 60],
// 	["ONE HUNDRED", 100]
//  ]