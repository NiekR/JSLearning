

// classes
function Car(options) {
    this.title = options.title;
}

// method


// old
Car.prototype.drive = function () {
    return 'boemboem';
};


function Toyota(options) {
    this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function () {
    return 'beep';
};

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function () {
    return 'beep';
};

const toyota = new Toyota({color: 'red', title:'daily driver'});

// new
class Car {
    // is ran when class is used
    constructor({ title }) {
        this.title = title;
    }
    drive() {
        return 'vroom';
    }
}

const car = new Car({ title: 'toyota'});
car.drive();

class Toyota extends Car{
    constructor(options) {
        // cars constructor method is called
        super(options); // Car.constructor
        this.color = color;
    }
    honk() {
        return 'beep';
    }
}

const toyota =  new Toyota({ color: 'red'});
toyota.honk();

