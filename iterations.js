{
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    let myArray = ['one', 'two', 'three', 'four', 'five'];
    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }

    let x = 1;
    while (x <= 5) {
        console.log(x++);
    }

    let y = 0;
    while (y < 50) {

        console.log(y++);

        if (y == 3) break;
    }
}