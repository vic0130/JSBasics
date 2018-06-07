{
  let time = 3000,
    counter = 1;

  console.log(`Wait for ${time / 1000} sec and then count to 10`);

  setTimeout(function () {

    console.log(`Done waiting for ${time / 1000} sec! Count to 10 now:`);

    count();

  }, time);

  function count() {

    if (counter <= 10) {
      setTimeout(function () {

        console.log(`${counter++} sec`);

        count(); // recursive call

        if (counter == 10)
          console.log('That\'s it!')

      }, time / 3);
    }
  }

  (function () {

    console.log(`Immediately invoked function expression (IIFE)
   (while waiting anyway :)`);

  })();

}