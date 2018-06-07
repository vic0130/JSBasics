{
  let a = "1";
  let b = 2;
  let c = "three";

  console.log(`Coercion: ${a + b}`); // concatenation

  console.log(`Parsing: ${parseInt(a) + b}`);

  console.log(`isNan: ${isNaN(c)}`); // this actually executes despite the error
  console.log(`Parsing: ${parseInt(c) + b}`);
}