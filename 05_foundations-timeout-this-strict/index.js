// 01 Write a function printNumbers(from, to) that outputs a numbers with 1000 ms interval

function printNumbers(from, to) {
    const interval = setInterval(() => {
        if  (from === to) {
            clearInterval(interval);
        }
        console.log(from);
        from++;
    }, 1000);
}
printNumbers(0,5);

// solution with setTimeout
function printNumbers2(from, to){
    setTimeout(function run(){
        console.log(from);
        if (from < to) {
            setTimeout(run, 1000);
        }
        from++;
    }, 1000);
}
printNumbers2(10,15);

// 02 In the code below there's a setTimeout call scheduled, then a heavy calculation is run
// that takes more than 100ms to finish
// When will scheduled function run?

let i = 0;
setTimeout(() => alert(i), 100); // will output 10000000 since setTimeout is asynchronous

for (let j = 0; j < 10000000; j++){
    i++;
}

// 03 Write a script to print the message "Hello World" every


