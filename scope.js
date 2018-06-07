{
    let x = 1;

    function scopeTest() {

        let y = 2;

        console.log(x);

        if (true) {

            x = 'changed'; // catches an error, but executes
            console.log(x);
        }
    }

    scopeTest();

    //console.log(b); - will case an error
}


// BAD PRACTICE: definitions go to GLOBAL SCOPE - may case errors

var myVar = 'Global var';

var myFunction = function () {
    // do something
};