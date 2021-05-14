// named export
export const add = (x,y) => console.log(x + y);
export const arrOfNames = ['Ulan', 'Max', 'Meerim', 'Mike', 'Jazzy'];

// default export
// there can be only one default export in 1 js file
export default class PersonClass {
    getDetails() {
        console.log('I am a default exported class from utils');
    }
}

// Activity
export const printNums = (num) => {
    for (let idx = 0; idx <= num; idx++) {
       console.log(idx);
    }
}

// export default class Cat {
//     makeSound() {
//         console.log('Meow');
//     }
// }