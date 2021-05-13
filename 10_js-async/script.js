/**
 * Call stack
 */
function multiply(y) {
    console.log(y * y);
}

function square(x) {
    multiply(x * x);
};

function displayResult(num) {
    square(num);
};

displayResult(5);


// 
console.log('Plant maize'); // 1 

setTimeout(function() {
    console.log('Water plant'); // 3 - async
}, 3000);                       

console.log('Add fertilizer'); // 2

/**
 * Callback hell
 */
setTimeout(() => {
    document.getElementById('data').textContent = 'downloading data...';
    setTimeout(() => {
        document.getElementById('data').textContent = 'processing data...';
        setTimeout(() => {
            document.getElementById('data').textContent = 'filtering data...';
            setTimeout(() => {
                document.getElementById('data').textContent = 'storing data...';
                document.getElementById('data').textContent = 'data storing done!';
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);





