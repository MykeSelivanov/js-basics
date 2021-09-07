const output = document.getElementById('output');
const inputField = document.getElementById('input-id');

const debounced = (func, event, delay) => {
    let timeoutId;

    return function(...args) {
        if(timeoutId) {
            clearTimeout(timeoutId);
        }

        setTimeout(() => {
            func(...args);
        }, delay);
    }
}

const outputToPage = (event) => {
    let inputText = event.target.value;
    output.textContent = inputText;
    // console.log('hello');
}

document.getElementById('input-id').addEventListener('keyup', debounced(outputToPage, event, 3000));

