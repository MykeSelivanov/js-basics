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