// let

let a = 1;
a = 2;
console.log(a);

// block scope
if (true) {
    // block scope
    var name123 = 'Mike';
    let likes = 'runninig';
}
console.log(name123);
// console.log(likes); - Error

// hoisting
var b;
console.log(b);
b = 2;

// console.log(c);
// let c = 3;      - Error

// const
// const myFirstVariableWithConst = 2021;
// myFirstVariableWithConst = 2020;
// console.log(myFirstVariableWithConst);

// block scope const
if (true) {
    var name234 = 'Mike';
    let likes = 'runing';
    const skills = 'JS and React';
}
console.log(name234);
// console.log(skills);

// Activity
const statuses = [
    {code: 'OK', response: 'Request successful'},
    {code: 'FAILED', response:'There was an error with your request'},
    {code: 'PENDING', response: 'Your request is still pending'}
];
let message = '';
let currentCode = 'OK';
for (let i = 0; i < statuses.length; i++){
    if (statuses[i].code === currentCode) {
        message = statuses[i].response;
        console.log(message);
    }
}

// Template Literals
const student = 'John';
const teacher = 'Peter';
let message2 = `${student} is ${teacher}'s favorite student`;

// Activity
let device_id = 25;
let guid = 654321;

const data = `{${device_id} device_id, guid ${guid}}`;
console.log(data);


// Arrow functions
function myFunction(){
    // code
}

const myFunction2 = (a,b) => {
    //code
}

// omit return keyword
const timeFive = (x) => {
 x * 5;
}

// Activity
const getExamples = () => {
    return fetch('https://example.com')
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            return response.data;
        })
        .then((data) => { 
            console.log(data)
        });
}

// Enhanced Object Literals
let type = 'action';
let year = 2021;
let director = 'Spielberg';

const movie = {
    type: type,
    year: year,
    director: director
};

const movie2 = {
    type,
    year, 
    director
};

console.log(`movie`, movie);
console.log(`movie2`, movie2);

// Destructuring
const obj = {
    name: 'Mark', 
    lastName: 'Twain', 
    age: 40,
    interests: {
        one : 'skiing',
        two : 'hiking'
    }
};
console.log(`Welcome ${obj.name} ${obj.lastName} ${obj.age}`);

const { name, lastName, age } = obj;
const { one } = obj.interests;
console.log(`Welcome ${name} ${lastName} ${age} first interest ${one}`);


// Loop an Object

// for in loop
for (let key in obj) {
    console.log(`${key} : ${obj[key]}`);
}

// array loop
// for of
const arrayOfMixed = [1,2,'hero',true];
for (let element of arrayOfMixed) {
    console.log(element);
}


// Default values
function xyz(a, b = ['John']) {
    console.log(a);
    b.push(a);
    console.log(b);
}
xyz(1);

// Rest Operators
const sum = (...myargs) => {
    // Rest operator collects the values and store them in array
    console.log(myargs);
}

sum(1); // [1]
sum(1,2); // [1,2]
sum(1,2,3); // [1,2,3]

function mulitiply(multiplier, ...theArgs) {
    // code
    console.log('mulitplier', multiplier);
    console.log('rest of arguments', theArgs);
    let result = [];
    for (let i = 0; i < theArgs.length; i++) {
       result.push(theArgs[i] * multiplier);
    }
    return result;
}
let arr = mulitiply(2,15,25,42);
console.log(arr);


// Spread Operator
// [] -> elements

const books = [
    'Don Quixote',
    'The Hobbit',
    'Alice in Wonderland',
    'Tale of Two Cities'
];

console.log(...books);

const arr1 = [1,2,3];
const arr2 = ['a','b','c'];
console.log(arr1.concat(arr2));
console.log(...arr1,...arr2);

// Activity
// 1.
const initialColors = ["white", "black", "gray"];
const exoticColor = ["purple", "orange", "green"];
const mixedArr = [...initialColors, ...exoticColor];

// 2.
function join(initialColors, exoticColor){
    return [...initialColors, ...exoticColor];
}

// 3. Rest
const average = (...unlimitedArgs) => {
    if (unlimitedArgs.length === 0) return 0;
    let sum = 0;
    for (let el of unlimitedArgs) {
        sum += el;
    }
    return sum / unlimitedArgs.length;
}
console.log(average(2,2));
console.log(average(1,2,3,4,5,6,7,8,9,10));


// Promises
// creating a promise
const promise = new Promise((resolve, reject) => {
    let sum = 1 + 2;

    if(sum === 3) {
         // if successful resolve
        resolve('Yes it is true');
    } else {
        // if fails reject
        reject('Sorry it\'s wrong');
    }
});

promise.then((data) => {
    console.log(data);
})
.catch(err => console.log(err)
);



