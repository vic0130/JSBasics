// In JS the WAY a function is called determines what
// 'this' keyword represents (depends on a context) 

function first() {
    return this;
};

console.log('Equal to Global space: ' + (first() === global));

////////////////////////////////////////////////////////////////////////////////

function second() {

    'use strict'; // changes the context

    return this;
};

console.log(`Equal to Global space: ${second() === global} (${second()})`);

///////////////////////////////////////////////////////////////////////////////

let myObject = {
    value: 'My Object'
};

global.value = '- Global Object -';

function third() {
    return this.value; // what is the value of 'this'
};

function forth(name) {
    return this.value + ': ' + name; // what is the value of 'this'
};


// what is 'this'? - depends on the call

console.log(third()); // 'this' is bound to global object

console.log(third.call(myObject)); // 'this' is bound to myObject:

// call vs apply
console.log(forth.call(myObject, 'Victor'));
console.log(forth.apply(myObject, ['Victor']));


// Context is an object

let customer1 = {
    firstName: 'victor',
    lastName: 'govorov',
    print: fifth
};

let customer2 = {
    firstName: 'luda',
    lastName: 'ferents',
    print: fifth
};

function fifth() {
    console.log(this.firstName + ' ' + this.lastName);
};

customer1.print();
customer2.print();