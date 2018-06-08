//////////////////////////////////////////////////////
// MODULE PATTERN

// only the counter var goes to the Global Scope
var counter = (function () {

    // Internal implementation:

    // private field
    let count = 0;

    // private function
    function print(message) {
        console.log(`${message}:  ${count}`);
    };

    // return object
    return {

        // value: count, - BAD PRACTICE

        get: function () {
            return count;
        },

        set: function (value) {
            count = value;
        },

        increment: function () {
            count += 1;
            print('After increment');
        },

        reset: function () {
            print('Before reset');
            count = 0;
            print('After reset');
        }
    }

})();

console.log(counter.count);
console.log(counter.value);

counter.increment();
counter.increment();
counter.increment();

counter.set(7);
console.log(counter.get());

counter.reset();

// accidental "Closure"
console.log(counter.value);


//////////////////////////////////////////////////////
// REVILING MODULE PATTERN

var counter1 = (function () {

    // Internal implementation:

    // private field
    let count = 0;

    // private function
    function print(message) {
        console.log(`${message}:  ${count}`);
    };

    function getCount() {
        return count;
    };

    function setCount(value) {
        count = value;
    };

    function incrementCount() {
        count += 1;
        print('After increment');
    };

    function resetCount() {
        print('Before reset');
        count = 0;
        print('After reset');
    }

    // return object
    return {
        get: getCount,
        set: setCount,
        increment: incrementCount,
        reset: resetCount
    }

})();

counter1.increment();
counter1.increment();
counter1.increment();

counter1.set(5);
console.log(counter1.get());

counter1.reset();