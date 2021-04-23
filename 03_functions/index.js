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
function sumOfFour(num1, num2, num3, num4) {
    console.log(num1 + num2 + num3 + num4);
}
sumOfFour(1,1,1,1);

function myName(firstName, middlename, lastName) {
    return firstName + ' ' + middlename + ' ' + lastName;
}
console.log(myName('Mary', 'Elizabeth', 'Smith'));


