function sayHello(name) {

    return function () {
        console.log(`Privet, ${name}!`);
    }
}

// associate a function call with a specific name
// creating different versions of the same function
let greetVictor = sayHello('Victor');
let greetLuda = sayHello('Luda');
let greetMama = sayHello('mama');

// when invoked, the function will keep an associated name
greetVictor();
greetLuda();
greetMama();