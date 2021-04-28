// 01 Write a function printNumbers(from, to) that outputs a numbers with 1000 ms interval

function printNumbers(from, to) {
    const interval = setInterval(() => {
        if  (from === to) {
            clearInterval(interval);
        }
        console.log(from);
        from++;
    }, 1000);
}
printNumbers(0,5);

// solution with setTimeout
function printNumbers2(from, to){
    setTimeout(function run(){
        console.log(from);
        if (from < to) {
            setTimeout(run, 1000);
        }
        from++;
    }, 1000);
}
printNumbers2(10,15);

// 02 In the code below there's a setTimeout call scheduled, then a heavy calculation is run
// that takes more than 100ms to finish
// When will scheduled function run?

let i = 0;
setTimeout(() => console.log(i), 100); // will output 10000000 since setTimeout is asynchronous

for (let j = 0; j < 10000000; j++){
    i++;
}

// Q3
// Write a script to print the message “Hello World” every second, but only 5 times. After 5 times, the script should print 	the message “Done” and let the Node process exit.
// Constraints: You cannot use a setTimeout call for this challenge.
// Hint: You need a counter.
let counter = 0;
const intervalId = setInterval(() => {
//   debugger; // will stop an execution in debug mode
  console.log('Hello World');
  counter += 1;
  if (counter === 5) {
    console.log('Done');
    clearInterval(intervalId);
  }
}, 1000);


// THIS ----------
// global scope
console.log(this); // when you use this in a global context it becomes window

// Implicit binding
// ex 1
const user = {
    name: 'Tyler',
    age: 27,
    greet() {
        console.log(`Hello my name is ${this.name}`)
    }
}
user.greet(); // Hello my name is Tyler

// ex 2
const user2 = {
    name: 'Paul',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}`)
    },
    mother: {
        name: 'Stacey',
        greet() {
            console.log(`Hello, my name is ${this.name}`)
        }
    }
}
user2.greet(); // this === user2 object
user2.mother.greet(); // this === mother object

// Explicit binding
// ex 1
function hi() {
    console.log(`Hello, my name is ${this.name}`);
}
const user3 = {
    name: 'Peter',
    age: 27
}
hi.call(user3); // Hello my name is Peter

// ex 2
// CALL function
function greetings(language1, language2, language3) {
    console.log(`Hello, my name is ${this.name} and I know ${language1}, ${language2}, ${language3}`);
}

const user4 = {
    name: 'Mike',
    age: 29
}

const languages = ['Java', 'JS', 'HTML'];
greetings.call(user4, languages[0], languages[1], languages[2]); // Hello, my name is Mike and I know Java, JS, HTML
 

// APPLY ---------
greetings.apply(user4, languages); // same as call, except how we pass arguments

// BIND ---------
const newFunc = greetings.bind(user4, ...languages); // same as call but only returns new function
newFunc();

// LEXICAL BINDING -------
const friend = {
    name: 'Jack',
    greet: () => {
        console.log(this.name);
    }
}
friend.greet(); // undefined, since arrow function cannot bind to object's this


// STRICT -------

window.age = 25;
function sayAge() {
    'use strict';  // will acitvate strict mode in JS, which will not allow to use parameters with same name, wiil block hoisting, will not allow to assign a value to global window
    console.log(`My age is ${this.age}`);
}
sayAge(); // TypeError: Cannot read property 'age' of undefined
