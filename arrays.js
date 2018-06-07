{
  let empty = [];
  let numerical = [1, 2, 3];
  let strings = ["one", "two", "three"];
  let mixed = [1, "two", true];
  let objects = [{
    1: "one"
  }, {
    2: "two"
  }, {
    3: "three"
  }];

  console.log(numerical[0]);
  console.log(strings[1]);
  console.log(mixed);
  console.log(mixed[4]);
  console.log(mixed.length);
  console.log(objects[1]);
  console.log(typeof objects[1]);

  numerical[5] = 6; // creates a sparse array - not recommended
  printNumericalArray();

  numerical.push(7); // adds new element at the end
  printNumericalArray();

  numerical.pop(); // removes the last element
  printNumericalArray();

  numerical.pop();
  printNumericalArray();

  numerical.pop();
  printNumericalArray();

  numerical.pop();
  printNumericalArray();

  function printNumericalArray() {
    console.log(numerical);
    console.log(numerical.length);
  }
}