{
  // IF...ELSE
  logic(true);
  logic(false);

  function logic(condition) {
    if (condition) {
      console.log("This is true!");
    } else {
      console.log("And this is not!");
    }
  }

  // SWITCH
  choices("one");
  choices("Two");
  choices("thrEE");
  choices();
  choices(true);

  function choices(choice) {
    if (typeof choice == "string") {
      switch (choice.toLowerCase()) {
        case "one":
          console.log(1);
          break;
        case "two":
          console.log(2);
          break;
        default:
          console.log(0);
      }
    } else {
      console.log("Not a valid choice");
    }
  }

  // TERNARY
  let a = 1,
    b = "1";

  // comparison with coercion
  let comparison = a == b ? "equal" : "unequal"; // shows an error, but executes
  console.log(comparison);

  // strict comparison
  comparison = a === b ? "equal" : "unequal"; // shows an error, but executes
  console.log(comparison);

  comparison = a != b ? "equal" : "unequal"; // shows an error, but executes
  console.log(comparison);

  comparison = a !== b ? "equal" : "unequal"; // shows an error, but executes
  console.log(comparison);
}