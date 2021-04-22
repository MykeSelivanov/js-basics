// Primitives Data Types
// - Numbers
// - Strings
// - Boolean
// - null
// - undefined
// - Symbol

// ARRAYS -----------------------------

// 1. way of creating array
// var days = new Array();
// 2. way of creating array
// var days = [];

// arrays of strings
var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

// arrays of numbers
var years = [2020,2021];

// arrays of mixed data types
var mixed = ['Monday', 2020, 'Sunday', 2021, true, false];

// arrays.length
console.log('Length of mixed array: ', mixed.length);
console.log('Length of days array: ', days.length);
console.log('Length of years array: ', years.length);

// index vs length
['Monday', 'Tuesday', 'Sunday']
// index 0=Moday, 1=Tuesday, 2=Sunday

// Bracket notation
console.log(years[4]);
days.forEach(day => {
    console.log(day);
});

var arr = [];
arr[0] = 1;
arr[8] = 8;
console.log(arr);

// update a value
arr[0] = 123;
console.log(arr);

// built-in
// push
var arr2 = [];
for (var i = 0; i < 10; i++) {
    arr2.push(i);
}
console.log(arr2);

arr2.forEach(element => {
    arr2.pop();
});
console.log(arr2);
// gives [0, 1, 2, 3, 4]

// activity 1
var bands = ['The White Stripes', 'Pink Floyd', 'Alt-J', 'Daft Punk'];
bands.push(prompt('What is your favorite band?'));
console.log(bands);


// OBJECTS ----------------------------------------------
// var person = new Object();
// key-pair
var person = {};
person.name = 'Mike';
person.occupation = 'professional';
console.log(person);

// var person = { values };
var person2 = {
    name: 'Ulan',
    gender: 'male',
    occupation: 'instructor'
};
console.log(person2);

var arrayOfObject = ['Text', 123, true, person];
console.log(arrayOfObject);

// Bracket notations - objects
console.log(person['name']);
console.log(person['occupation']);

// Dot Notation - objects
console.log(person2.name);
console.log(person2.gender);
console.log(person2.occupation);

// add to object
person.weight = 89;
console.log(person);

// update object props
person.name = 'Rick';
console.log(person);

// delete object props
delete person.occupation;
console.log(person);

// arrayOfObject
var gandalf = {
    name: 'RRRRR',
    gender: 'male',
    age: 11000
}

var arrayOfObject2 = ['Text', 123, true, gandalf];
// index
console.log(arrayOfObject2[3].name);

// pop
console.log(arrayOfObject2.pop().name);
arrayOfObject2.push(gandalf);

// loop
for (var i = 0; i < arrayOfObject2.length; i++) {
    if (arrayOfObject2[i] === gandalf) {
        console.log(arrayOfObject2[i].gender);
    }
}

// activity
var user = {};
user.name = 'John';
user.lastName = 'Doe';
user.name = 'Chris';
delete user.lastName;
user.interests = ['reading', 'singing', 'rugby'];
console.log(user.interests);

