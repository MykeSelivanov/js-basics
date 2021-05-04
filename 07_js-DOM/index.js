// Intro

// console.log(document);
// console.log(document.documentElement); // html
// console.log(document.body); // body
// console.log(document.body); // head
// console.log(document.title); // title of the document

// Accessing a DOM
// 1. getElementById()
const contentTitle = document.getElementById("title");
console.log('contentTitle', contentTitle);

// 1. getElementByClassName()
const description = document.getElementsByClassName("description");
console.log('description', description[0]);

// ex2:
const fruitListItems = document.getElementsByClassName('fruit');
console.log('frutis', fruitListItems);
for (let i = 0; i < fruitListItems.length; i++) {
    console.log(fruitListItems[i]);
}

// 3. getElementsByTagName()
const fruitListItems2 = document.getElementsByTagName('li');
console.log('fruits2', fruitListItems2);
for (let i = 0; i < fruitListItems2.length; i++) {
    console.log(fruitListItems2[i]);
}

// 4. querySelector()
// will return the first met element
const frutiListItems3 = document.querySelector('li');
console.log('frutis3', frutiListItems3);

// 4.1 querySelectorAll()
const fruitListItems4 = document.querySelector('li');
console.log('fruits4', fruitListItems4);
for (let i = 0; i < fruitListItems4.length; i++) {
    console.log(fruitListItems4[i]);
}

const googleDivClass = document.querySelector('.box');
const googleDivId = document.querySelector('#box2');
const googleDivTag = document.querySelector('div');
console.log('googleDivClass',googleDivClass);
console.log('googleDivId',googleDivId);
console.log('googleDivTag',googleDivTag);

// Hierarchical
const anchorTag = document.querySelector('.box a');
console.log('anchor tag', anchorTag);

// Combined selector
const googleCombined = document.querySelector('div.box');
console.log('googleCombined', googleCombined);

/**
 * Change DOM Nodes
 */
// Dot notation
const appleEl = document.querySelector('#appleImg');
console.log('appleEl.src', appleEl.src);
console.log('appleEl.id', appleEl.id);
console.log('appleEl.alt', appleEl.alt);

appleEl.src = 'https://bit.ly/3tmNE6Y';
appleEl.alt = '3 apples';
console.log('appleEl.src', appleEl.src);
console.log('appleEl.alt', appleEl.alt);

// getAttribute and setAttribute
console.log('source', appleEl.getAttribute('src'));
console.log('alt', appleEl.getAttribute('alt'));

appleEl.setAttribute('src','https://bit.ly/3nIz740');
appleEl.setAttribute('alt','4 apples');
console.log('source', appleEl.getAttribute('src'));
console.log('alt', appleEl.getAttribute('alt'));


