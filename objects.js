{
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
    console.log(car['year']); // possible bad practice


    ///////////////////////////////////////////////////////////
    var myCar = {};
    myCar.Make = 'Honda';
    myCar.Model = 'CRV';
    myCar.Year = '2004';
    myCar.GetInfo = function () {
        console.log(this.Make + ' ' + this.Model + ' ' + this.Year);
    };

    myCar.GetInfo();

    //////////////////////////////////////////////////////////
    var outerObject = {
        innerObject: {
            property: 'myvalue'
        }
    };

    console.log('Inner object property value: ' + outerObject.innerObject.myObject);

    //////////////////////////////////////////////////////////
    var arrayObject = {
        name: 'Array',
        myArray: [{
                1: 'one'
            },
            {
                2: 'two'
            },
            {
                3: 'three'
            }
        ]
    };

    console.log(arrayObject);
    console.log(arrayObject.myArray[2]); // returns 3rd element
    console.log(arrayObject.myArray[2][3]); // returns value of the 3rd element
}