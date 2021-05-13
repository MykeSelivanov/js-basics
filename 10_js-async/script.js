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

// Error handling in callbacks
// mimic async code
function downloadImage(url, success, failure) {
    const error = true;
    setTimeout(() => {
      if (!error) {
        console.log(`Downloading ${url} ...`);
        // process the picture once it is completed
        success(url);
      } else {
        failure('Error occured while downloading!');
      }
    }, 2000);
  }
  const url1 = 'https://www.someurl.net/1.jpg';
  const url2 = 'https://www.someurl.net/2.jpg';
  const url3 = 'https://www.someurl.net/3.jpg';
  
  downloadImage(
    url1,
    function () {
      console.log(`Processing ${url1}`);
      downloadImage(
        url2,
        function () {
          console.log(`Processing ${url2}`);
          // third url3
          // callback hell here
        },
        function (err) {
          console.log(`err in ${url2}`);
        }
      );
    },
    function (err) {
      console.log(`err in ${url1}`);
    }
  );




