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

}

let admin = new User(); // admin object
let user = new User(); // user object


