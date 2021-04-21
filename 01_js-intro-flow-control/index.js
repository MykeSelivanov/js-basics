// if the user likes fish (confirmFish === true)

var confirmFish = true;
var fishtype = 'salmon';
var fishtype2 = 'carp and tilapia';

if (confirmFish) {
    // your code is here
    console.log('You like ' + fishtype + ' !');
}

if (confirmFish !== false) {
    console.log('You like ' + fishtype2 + ' !');
}

// if/else
var num = 4;
if (num > 10){
    console.log('big number');
} else {
    console.log('small number');
}

// if/elseif/else
var num2 = 6;
if (num2 > 10) {
    console.log('more than 10');
} else if (num2 < 10 && num2 > 5) {
    console.log('less than 10 but greater than 5');
} else {
    console.log('less than 5');
}

var temperature = 45;
if (temperature > 60 && temperature <= 80) {
    console.log('Put on shorts');
} else if (temperature > 80) {
    console.log('Put on hat');
} else if (temperature < 0) {
    console.log('saty inside');
} else {
    console.log('wear whatevet you want');
}

// steak lovers
var eatSteak = prompt("Do you want to eat steak?");
if (eatSteak.toLocaleLowerCase() === 'yes') {
    document.write('Here\'s a Steak Sandwich');
} else if (eatSteak.toLocaleLowerCase() === 'no') {
    document.write('Here\'s a Tofu!');
} else {
    document.write('yes or no please!');
}

// LOOPS
// a. While loop ------------------------------------
var age = 20;
while (age < 23) {
    age++;
    console.log(age);
}

while (age > 18) {
    age--;
    console.log(age);
}

// b. do while
var val = 10;
do {
    // will be executed at least once
    console.log('This is ' + val);
} while (val === 11);
 
// c. for loop

for (var i = 0; i < 5; i++) {
    console.log(i);
}