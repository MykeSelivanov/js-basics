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

// Styling of DOM elements
const theBody = document.getElementsByTagName('body')[0];
theBody.style.backgroundColor = 'lightgray';

appleEl.style.width = '200px';
appleEl.style.height = 'auto';
appleEl.style.border = '2px solid grey';

// className vs classList
console.log(appleEl.className);
console.log(appleEl.classList);

// add()
appleEl.classList.add('red');
console.log(appleEl.className);
console.log(appleEl.classList);
console.log(appleEl.classList[0]);
console.log(appleEl.classList[1]);

// remove()
appleEl.classList.remove('red');
console.log(appleEl.className);
console.log(appleEl.classList);

// contains()
console.log(appleEl.classList.contains('red')); // false
appleEl.classList.add('red');
appleEl.classList.replace('red', 'green'); 
console.log(appleEl.classList.contains('green')); // true

appleEl.classList.toggle('green'); // removed
console.log(appleEl.className);
console.log(appleEl.classList);

appleEl.classList.toggle('green'); // brought back
console.log(appleEl.className);
console.log(appleEl.classList);

// innerHTML
const greetingBox = document.querySelector('.greeting');
greetingBox.innerHTML = '<h1>Hello World</h1>';
greetingBox.innerHTML += '<p>This is hello world</p>';

// textContent
const greetingBox2 = document.querySelector('.greeting2');
greetingBox2.textContent = 'Hello Text Content';

// innerText
greetingBox2.innerText = 'Hellot Inner Text';

/**
 * Creating a new Node
 */
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
const text2 = document.createTextNode('Do not copy!');
copyright.appendChild(text2);
// or
copyright.textContent = 'Serioulsy, do not copy!';
footer.appendChild(copyright);

const address = document.createElement('p');
address.textContent = 'Mars';
footer.append(address);

// Activity
const theBody2 = document.getElementsByTagName('body')[0];
const div123 = document.createElement('div');
const newH1 = document.createElement('h1');
newH1.textContent = 'hey this is H1';
theBody2.appendChild(div123.appendChild(newH1));


/** 
 * Events
 */
// addEventListener(), removeEventListener()
const btnPrimary = document.getElementById('btn-primary');
const btnSecondary = document.getElementById('btn-secondary');

// takes an event type and callback function
// addEventListener('click', handleClick);

const handleClick = () => {
    console.log('button is activated');
};

btnPrimary.addEventListener('click', handleClick);
btnSecondary.addEventListener('click', () => {
    btnPrimary.removeEventListener('click', handleClick);
});

// preventDefault()
const googleButton = document.getElementById('google');
googleButton.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Google is not available rigt now!')
    console.log(event.target);
});

const username = document.getElementById('username');
const email = document.getElementById('email');

console.log('username', username);
console.log('email', email);

// change event type
username.addEventListener('change', (event) => {
    console.log(event.target.value);
});
// input event type
email.addEventListener('input', (event) => {
    console.log(event.target.value);
});

// Activity
const btnChameleon = document.getElementById('btn-chameleon');
btnChameleon.style.color = '#fff';
btnChameleon.style.background = 'blue';

btnChameleon.addEventListener('mouseover', () => {
    btnChameleon.style.background = 'green';
})
btnChameleon.addEventListener('mouseout', () => {
    btnChameleon.style.background = 'red';
});