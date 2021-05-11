// OOP in JS

const names = ['John', 'Doe', 'Ulan', 'Reece'];

// filter is located inside Array.prototype
const doe = names.filter((name) => name === 'Doe');
console.log(doe);

/**
 * Constructor functions
 */

const cat = function(name, breed) {
    this.name = name;
    this.breed = breed;

    // never do this
    // this.details = function() {
    //     console.log(`${this.name} is a ${this.breed}`);
    // }
};

cat.prototype.getDetails = function() {
    console.log(`${this.name} is a ${this.breed}`);
};

// instantiate an object from constructor function
const cat1 = new cat('Leo', 'Bengal');
const cat2 = new cat('Ais', 'American Shorthair');

console.log(cat1);
console.log(cat2);

console.log(cat.prototype);

cat1.getDetails();
cat1.toString();

console.log(cat1.__proto__ === cat.prototype);

// prototype is not created for all objects
// it is only available for obhects that are created by constructor functions or global Object

// on the other hand __proto__ is available for all object no matter how they are created

/**
 * ES6 Classes
 */

class User {
    constructor(name, age){
        // all these are public properties
        this.name = name;
        this.age = age;
    }
    getDetails() {
        console.log(`My name is ${this.name} and i am ${this.age} old`);
    }
}

let admin = new User('Josh', 30); // admin object
let user = new User(); // user object

console.log(admin);

// statis properties of methods
Array.from('foo'); // ['f', 'o', 'o'];

class Person {
    constructor(name) {
        this.name = name;
    }
    // regular function
    getInfo() {
        console.log(this);
        console.log(`My name is ${this.name}`);
    }
    // static function
    static getStaticInfo() {
        console.log(this);
        console.log(`My name is ${this.name}`);
    }
}

const bektur = new Person('Bektur');
console.log(bektur);
bektur.getInfo();
// static
// bektur.getStaticInfo(); // fails
Person.getStaticInfo();

Person.id = 1; // creates a static id on a Person class
console.log(Person.id); // 1
console.log(bektur.id); // undefined

console.dir(Person);

// Activity
class Car {
    static engine = false;
    constructor(color) {
        this.color = color;
    }
    checkColor() {
        console.log(`This car is ${this.color} color`);
    }
    static engineStart() {
        this.engine = true;
        console.log(`Engine idling = ${this.engine}`);
    }
}
const toyota = new Car('white');
toyota.checkColor();
Car.engineStart();