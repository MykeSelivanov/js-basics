// console.log
console.log(4 + 3);
// alert(5 + 6);
// document.write(7 + 9);

// STATEMENTS -----------------------------
console.log('Hi there'); // statement 1
console.log('Cats are beautiful'); // statement 2
console.log(12); // statement 3

// VARIABLES ------------------------------
var language = 'first -> JS';
console.log(language);
language = 'reassigning to - > Java';
console.log(language);

var sum = (4 + 3);
console.log(sum);

// declaration and initialization
var box; // declare
fcfsv = 2021;
console.log(fcfsv);

const age = 20;
const year = 2020;
console.log('this is age: ' + age + '\nthis is year: ' + year);

// DATA TYPES --------------------------------
// typeof - to check a type of any variable

// a. Numbers
var a = 10;
var b = new Number(3);

console.log(typeof a);
console.log(typeof b);

var summy = a + b; // addition
var subby = a - b; // substraction
var multy = a * b; // multiplication
var divvy = a / b; // division
var moddy = a % b; // modulus

console.log('addition ', summy);
console.log('substraction ', subby);
console.log('multiplication ', multy);
console.log('division', divvy);
console.log('modulus', moddy);

console.log('postincrement: ', a++); // a still = 10
console.log('postincrement: ', a++); // now  a = 11
console.log('predecrement: ', --b); // b is 2 right away


// b. String ---------------------------------
var name = 'Myke';
var lastName = 'Doe';
var fullname = name + ' ' + lastName;
console.log(fullname);

// concatenate number and string
var num = 20;
var text = 'text';
console.log(num + text);


// c. Boolean
// true/false
var isStarted = true;
// isStarted = false;



// d. null vs undefined

var nothing = null;

// undefined - declared, but value is not defined
var something;

console.log('nothing', nothing);
console.log('something', something);

console.log('type of null', typeof nothing); // object - known bug in JS
console.log('type of undefined', typeof something);


// == vs ===
console.log(null == undefined); // compares loosely
console.log(null === undefined);

console.log(10 == '10'); // true
console.log(10 === '10'); // false
