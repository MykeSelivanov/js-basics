/**
 * Number methods
 */

 // toString()
let num1 = 24;
let numStr = num1.toString();
console.log(numStr);
console.log(typeof numStr);

// toExponential();
let expNum = 5;
console.log(expNum.toExponential(2)); // just google it

// toFixed()
let fxd = 9.656;
console.log(fxd.toFixed()); // 10
console.log(fxd.toFixed(2)); // 9.66

// toPrecicsion()
let pn = 9.656;
console.log(pn.toPrecision()); // 9.656
console.log(pn.toPrecision(3)); // 9.66 
console.log(pn.toPrecision(4)); // 9.656
console.log(pn.toPrecision(5)); // 9.6560 

// Convert variables to numbers
// 1. Number()
let x = true;
console.log(Number(x)); // 1
x = false;
console.log(Number(x)); // 0
x = new Date();
console.log(x);
console.log(Number(x)); // 1619743277598
x = '10';
console.log(Number(x)); 
x = '10 20';
console.log(Number(x)); // NaN

// 2. parseInt()
console.log(parseInt('10')); // 10
console.log(parseInt('30 20 10')); // 30
console.log(parseInt('15 years')); // 15
console.log(parseInt('years 15')); // NaN
console.log(parseInt('10.33')); // 10

// parseFloat()
console.log(parseFloat('10')); // 10
console.log(parseFloat('10.33')); // 10.33

// Number Properties
const a = Number.MAX_VALUE;
const b = Number.MIN_VALUE;
const c = Number.NEGATIVE_INFINITY;
const d = Number.POSITIVE_INFINITY;
const e = Number.NaN;

console.log(`a`, a);
console.log(`b`, b);
console.log(`c`, c);
console.log(`d`, d);
console.log(`e`, isNaN(e));

// Activity
let foo = 4;
let bar = 4.46731;
let c1 = '4';
c1 = parseInt(c1);
foo = foo.toString();
bar = bar.toFixed(1);
console.log(`c1 - ${c1}, foo - ${foo}, bar - ${bar} `);




