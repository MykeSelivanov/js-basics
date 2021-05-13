/**
 * Promises
 */

// Ex 1
const data = [1,2,3];

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (data.length > 1) {
            resolve('Here is your data');
        } else {
            reject('Sorry no data');
        }
    }, 300);
});

console.log(myPromise);

myPromise
    .then((myData) => {
        console.log(myData);
})
    .catch((err) => {
        console.log(err);
});

// Ex 2
function downloadImage(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Downloading ${url} ...`);
        },3000);
    });
}

const url1 = 'https://www.someurl.net/1.jpg';
const url2 = 'https://www.someurl.net/2.jpg';
const url3 = 'https://www.someurl.net/3.jpg';

downloadImage(url1)
.then(() => {
    console.log(`Processing ${url1}`);
    return downloadImage(url2);
})
.then(() => {
    console.log(`Processing ${url2}`);
    return downloadImage(url3);
})
.then(() => {
    console.log(`Processing ${url3}`);
})
.catch(err => {
    console.log(`err `, err);
});

/**
 * Promise All
 */
const pr1 = Promise.resolve('Hey1');
const pr2 = Promise.resolve('Hey2');
const pr3 = Promise.resolve('Hey3');

Promise.all([pr1, pr2, pr3]).then((values => {
    console.log(`values `, values);
}));

/**
 * Async / Await
 */

async function sampleFunction() {
    return 'Hello World';
}
// same as below
// async function sampleFunction() {
//     return Promise.resolve('Hello World');
// }

// returns promise
const result = sampleFunction();
console.log(result);

async function getData() {
    const data = await somegetdata('url');
    return data;
}

async function getImages() {
    try {
        console.log(await downloadImage(url1));
        console.log(await downloadImage(url2));
        console.log(await downloadImage(url3));
    } catch (error) {
        console.log(error);
    }
}
getImages();

// fetch ex
const getUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (response.status === 200 || response.ok) {
        const user = await response.json();
        console.log(user);
    } else {
        console.log(`error`);
    }
}
getUser();