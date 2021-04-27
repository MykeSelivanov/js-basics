console.log('----------QUIZ----------');
// 1.
const KEY = 'white_rabbit'; // global scope
if (true) {
    // const and let are block scope elements
    const KEY = 'ginger_rabbit';
}
console.log(KEY); // white_rabbit

// 2. 
let x = 42;
if (true) {
    let x = 1772;
}
console.log(x); // 42

// 3. 
let abc = 42;
if (true) {
    // it is still getting hoisted, but js doesn't allow to use it before initialization
    console.log(abc); // if you uncomment line below - Uncaught ReferenceError: Cannot access 'abc' before initialization
    // let abc = 1337;
}

// 4. 
const onePlusOne = () => 1 + 1;
console.log(onePlusOne());

// 5.
var xyz = `foo ${y}`, y = `bar ${xyz}`;
console.log(xyz); // foo undefined
console.log(y); // bar foo undefined

// 6. 
// let options = {
//     protocol,
//     url,
//     method,
//     callback
// };

// 7.
let arr3 = [12,4,17];
console.log(Math.max(...arr3));

// 8.
const promise1 = new Promise(function(resolve, reject) {
    // do stuff
});

// 9. 
const obj123 = { foo: 1};
obj123.bar = 2; // it will work, even though it is a constant, you can still modify
// properties, since it's an object
console.log(obj123);

// 10. IIFE - immediately invoked function expression
(function qwerty() {
    console.log('hey');
})();