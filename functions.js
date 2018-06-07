{
  function printHi() {
    console.log(">>>> Hi! <<<<");
  }

  printHi();

  let _printHi = printHi; // assigns a function to a variable, but does not invoke it

  _printHi(); // invokes a function
  _printHi();

  function sayHello(name) {
    console.log(`Hello, ${name}!`);
  }

  sayHello("Victor");
  sayHello("Luda");

  function calculateTax(amount) {
    let result = amount * 1.06;
    return result.toFixed(2);
  }

  let result = calculateTax(10.0);
  console.log(`Amount with tax: $${result}`);
}

// Returning functions
// --------------------------------------------------------------------
function one() {
  return 1;
}

console.log(one());

let refOne = one; // stores reference eto the function into a variable
console.log(typeof refOne);
console.log(refOne()); // executing function by using reference

function two() {
  return function () {
    console.log(2);
  }
};

//two()();
let refTwo = two();
console.log(typeof refTwo);
refTwo();

function three() {
  return function () {
    return 3;
  }
}

console.log(three()());