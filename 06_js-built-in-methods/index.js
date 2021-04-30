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

/**
 * String methods
 */

 // length
 const txt = 'ABCDEFGHIJKLMOPQRSTUVWXYZ';
 const msg = 'A msg';
 console.log(txt.length);
 console.log(msg.length);

 // indexOf()
 const sentence1 = "Please locate where 'locate' occurs!";
 const pos1 = sentence1.indexOf('locate');
 console.log(pos1);
 console.log(sentence1.indexOf('e')); // 2
 console.log(sentence1.indexOf('p')); // -1

 // lastIndexOf()
 const sentence2 = "Please locate where 'locate' occurs!";
 const pos2 = sentence2.lastIndexOf('locate');
 console.log(pos2); // 21
 console.log(sentence2.lastIndexOf('e')); // 26

// search() - similar to indexOf()
// but we can provide regex to it
const sentence3 = "Please locate where 'locate' occurs!";
const pos3 = sentence3.search('locate');
console.log(pos3);

// replace()
const microsoft = 'Please visit Microsoft';
const copyOfMic = microsoft.replace('Microsoft', 'Google');
console.log(microsoft);
console.log(copyOfMic);

// toUpperCase() and toLowerCase()
let hello = 'Hello World';
const toLower = hello.toLocaleLowerCase();
const toUpper = hello.toUpperCase();
console.log('toLower - ', toLower);
console.log('toUpper - ', toUpper);

// concat()
const he = 'Hello';
const lo = 'World';
console.log(he.concat(' ',lo));

// charAt()
const ctext = "HELLO WORLD";
console.log(ctext.charAt(0)); // it is more advised to use charAt() instead of method below
console.log(ctext[0]);

// split()
const txt2 = 'hey | b | c d good bye';
console.log(txt2.split(' '));
console.log(txt2.split('|'));
console.log(txt2.split(','));

// endWith() and startsWith()
const final = 'I start with I and end with i';
console.log(final.startsWith('I')); // true
console.log(final.endsWith('i')); // true
console.log(final.endsWith('s')); // false

// Extracting a part of a string
// 1. slice()
const str1 = 'apple, banana, kiwi';
const banana = str1.slice(str1.indexOf('banana'), str1.lastIndexOf('a') + 1);
console.log(banana);

// 2. substring()
const banana2 = str1.substring(7,13);
console.log(banana2);

// substr() - first argument is the starting index and the second argument is the desired legth of string
const banana3 = str1.substr(7,6); // start from 7, cut 6 characters after
console.log(banana3);

// Activity
let sentence4 = 'Hey this is skyzone js basics';
const idxOfSkyzone = sentence4.indexOf('skyzone');
sentence4 = sentence4.replace('skyzone','SkyZone');
sentence4 += ' almost the end';
sentence4 = sentence4.slice(0, sentence4.indexOf(' end'));
const words = sentence4.split(' ');




