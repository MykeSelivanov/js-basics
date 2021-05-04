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

// ARRAY METHODS
// isArray()
const cities = ['NY', 'LA'];
console.log(Array.isArray(cities)); // true

// length
console.log(cities.length);

// toString()
console.log(cities.toString());

// join() - opposite to split(), provided parameter will become a separator between array members
console.log(cities.join('/'));

// pop()
let fruits = ['Banaa', 'Strawberry', 'Orange', 'Mango'];
const mango = fruits.pop(); // removes the last element and return the removed value
console.log('fruits: ', fruits);
console.log('mango: ', mango);

// push()
fruits.push('Kiwi'); // returns the length of the new array
console.log(fruits);

// shift() - opposite to pop - removes the element at the begingign of the array
const fruits2 = ['Banaa', 'Strawberry', 'Orange', 'Mango'];
fruits2.shift();
console.log(fruits2);

// unshift() - opposite to push - pushes the element to the beginging of the array
const fruits3 = ['Banaa', 'Strawberry', 'Orange', 'Mango'];
fruits3.unshift('Lemon');
console.log(fruits3);

// splice() - first - index, second - how many to be removed, element to be inserted
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1,2,'Feb');
console.log(months);

// concat() - concatenates arrays together
const arr1 = ['One', 'Two', 'Three'];
const arr2 = ['Four', 'Five', 'Six'];
const arr3 = ['Seven', 'Eight', 'Nine'];
const nums = arr1.concat(arr2, arr3);
const numsES6 = [...arr1, ...arr2, ...arr3];
console.log(nums);
console.log(numsES6);

// indexOf & lastIndexOf - similar to string methods


// MORE ADVANCED
// forEach()
fruits.forEach(fruit => console.log(fruit));

// reverse() - reverses array
console.log(fruits3.reverse());

// some() - checks if at least one condition is true
const numsArray = [6, 3, 14, 4, 12, 87];
const isDivByTwo = numsArray.some( num => num % 2 === 0);
console.log(isDivByTwo);

// sort()
// depends on data type and is more complex
console.log(fruits.sort());
console.log(numsArray.sort((a,b) => a - b));

// map(); - apply an operation
const arr123 = [1, 4, 9, 16];
const arr123Doubled = arr123.map((num) => num * 2);
console.log(arr123Doubled);

// filter() - filtering data
const words2 = [
    'sparrow',
    'water',
    'elite',
    'destruction',
    'present',
    'badword'
];
const longerWrods = words2.filter((word) => word.length > 6);
console.log(longerWrods);

const noBadWords = words2.filter((word) => word !== 'badword');
console.log(noBadWords);

// reduce()
const prices = [1.95, 3, 50.095, 17, 54];

const sum = prices.reduce((accumulator, currentValue) => {
    return accumulator += currentValue;
},0 );
console.log(sum);

// Ex 2
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Bob'];
let countedNames = names.reduce(function(allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    } else {
        allNames[name] = 1;
    }
    return allNames;
}, {});
console.log(countedNames); // {Alice: 2, Bob: 2, Tiff: 1, Bruce: 1}

/**
 * Object methods
 */

 // Object.create();

 const myCar = {
     model: "chevy",
     type: "sport",
     isAvailable: "true",
     showDetails(){
         console.log(`My car model is ${this.model}, and type is ${this.type}`)
     }
 };
 myCar.showDetails();

 const yourCar = Object.create(myCar);
 console.log('yourCar', yourCar);
 console.log('yourCar model', yourCar.model);
 console.log('yourCar type', yourCar.type);

 yourCar.model = 'some nicer model';
 console.log('your Car', yourCar);
 yourCar.showDetails();

 // hasOwnProperty()
 console.log(yourCar.hasOwnProperty('model')); // true
 console.log(yourCar.hasOwnProperty('type')); // false
 console.log(yourCar.hasOwnProperty('isAvailable')); // false

// Object.keys();
// will return an array

const employees = {
    boss: 'Mike',
    secretary: 'Pam',
    sales: 'Jim',
    engineer: 'Me'
}
const employeeKeys = Object.keys(employees);
console.log('employeeKeys', employeeKeys);

for (let key of Object.keys(employees)) {
    console.log(key);
}

// Object.values()
// will return an array
const employeeValues = Object.values(employees);
console.log('employeeValues', employeeValues);

// Object.entries()
const employeeEntries = Object.entries(employees);
console.log(employeeEntries);

for (let [key, value] of Object.entries(employees)) {
    console.log(`key: ${key}, value: ${value}`);
}
for (let entries of Object.entries(employees)) {
    console.log(`key: ${entries[0]}, value: ${entries[1]}`);
}

// Object.assign()
const name99 = {
    firstName: 'Mike',
    lastName: 'Smith'
};

const details = {
    job: 'engineer',
    employeer: 'freelance'
}
const name88 = Object.assign({},name99);
console.log(name88);
const name77 = Object.assign({hobby: 'running'},name99);
console.log(name77);
const name66 = Object.assign(details, name99);
console.log(name66);

// Object.freeze()
const user = {
    username: 'AzureDiamond',
    passsword: 'hunter2'
}
Object.freeze(user);
user.passsword = 'another password';
user.active = true;
console.log(user);

// Object.isFrozen()
console.log(Object.isFrozen(user)); // true
console.log(Object.isFrozen(details)); // false
