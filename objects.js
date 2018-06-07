let car = {

    make: 'BMV',
    model: '745li',
    year: '2010',

    getPrice: function () {
        return 50000;

    },
    printInfo: function () {
        console.log(this.make + ' ' + this.model)
    }
};

car.printInfo();
console.log(car.year);