// global
var a = 1;

// 1. function declaration -----
function name() {
  // body of your function
  var b = 2;
  console.log(b);
}
// calling function
// name();

// 2. function expression -----
var name2 = function () {
  var c = 3;
  console.log(c);
};

// name2();
// name2();
// name2();

// Activity
function getSum() {
  // console.log(8 + 10);
  var a = 8;
  var b = 10;
  var sum = a + b;
  console.log(sum);
}
// var getSum = function () {
//   console.log(8 + 10);
// };

getSum();

// Arguments --------------------------

function moveRobot(dir, label) {
    // console.log(arguments);
    console.log('direction: ', dir);
    console.log('label: ', label);
}

var direction = 'left';
moveRobot(direction);
moveRobot('right', 'car direction');

// default arguments --------------------------------
function countNumbers(a, b) {
    console.log(arguments);
    // then you can loop and get sum of all arguments
    var sum = a + b;
    console.log(sum);
}
countNumbers(1); // a = 1, b = undefined, result = Nan (not a number, since you tried to add number to undefined)
countNumbers(1,2); // a = 1, b = 2, sum = 3
countNumbers(1,2,3,4,5); // a 

// Activity
// 1.
function sumOfFour(num1, num2, num3, num4) {
    console.log(num1 + num2 + num3 + num4);
}
sumOfFour(1,1,1,1);

function myName(firstName, middlename, lastName) {
    return firstName + ' ' + middlename + ' ' + lastName;
}
console.log(myName('Mary', 'Elizabeth', 'Smith'));

// 2.
function multiplyFourNums(num1, num2, num3, num4) {
    return num1 * num2 * num3 * num4;
}
console.log(multiplyFourNums(1,2,3,4));

// 3. 
function alertUserFullName(name, lastName) {
    return 'Hello ' + name + ' ' + lastName;
}
alert(alertUserFullName('Mike', 'Smith'));

// dec(); - works
dec();
function dec () {
    console.log('thisi is dec function');
}

// exp(); - error
var exp = function () {
    console.log('this is exp function');
}

// SCOPES ------------------------------------------------------
// 1. Global
// 2. Local

var theString = 'The current year is ';
var year = 2021;

function currentYear() {
    // function scope
    console.log(theString + year); // can access global vars
} 
currentYear();

if (10 > 1) {
    // block scope
    console.log(year);
}

// 2. Local
function lastYearFun() {
    var str = 'The Last year is '; // local variable
    var lastYear = 2020;
    console.log(str + lastYear);
}
lastYearFun();

// console.log(str); // Reference error - str is not defined

// Activity
// 1.
function percentageOfWorld1(population){
    return population / 7900 * 100;
}
var china = percentageOfWorld1(1441);
var usa = percentageOfWorld1(350);
var russia = percentageOfWorld1(170);
console.log(Math.round(china) + '% - china, ' + Math.round(usa) +  '% - usa, ' + Math.round(russia) + '% - russia');

var percentageOfWorld2 = function (population){
    return population / 7900 * 100;
}
var mexico = 70;
var grenland = 0.1;
var croatia = 10;
console.log(percentageOfWorld2(mexico) + '% - mexico, ' + percentageOfWorld2(grenland) +  '% - grenaland, ' + percentageOfWorld2(croatia) + '% - croatia');

// IEFI - immediately invoked fucntions
(function(a) {
    console.log('arg', a);
    console.log('IEFI');
})('hey');

// fucntions as object properties
var car = {
    color: 'black',
    type: 'sedan',
    drive: function(dir) {
        console.log('car is moving', dir);
    }
    }
car.drive('right');

// functions as arguments - callback
function callMe(callback) {
    callback();
}
callMe(function () {
    console.log('Call me');
});

// The Frotune Teller
function tellFortune(numOfChild, partnerName, location, jobTitle){
    console.log('You will be a ' + jobTitle + ' in ' + location + ' ,and married to ' + partnerName + ' with ' + numOfChild + ' kids');
}
tellFortune(4, 'Toma', 'Hawaii', 'surfer');

// The Puppy Age Calculator
function calculateDogAge(dogAge, convertionRate) {
    console.log('Your dog age is: ' + dogAge * convertionRate);
}
calculateDogAge(5,7);

// The Lifetime Supply Calculator
function calculateSupply(age, amountPerDay) {
    const maxAge = 100;
    console.log('You will need ' + (maxAge - age) * amountPerDay + ' to last you until the ripe old age of ' + maxAge);
}

