// let

let a = 1;
a = 2;
console.log(a);

// block scope
if (true) {
    // block scope
    var name = 'Mike';
    let likes = 'runninig';
}
console.log(name);
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
    var name = 'Mike';
    let likes = 'runing';
    const skills = 'JS and React';
}
console.log(name);
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





