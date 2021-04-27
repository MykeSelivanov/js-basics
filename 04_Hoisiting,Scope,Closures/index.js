// Closures

// ex 1
function outer() {
    const b = 10;
    function inner(){
        console.log(b);
    }
    return inner;
};

const c = outer();
c();

// Through closure you can shoose which data you want to make private or accessible
function initializeData(){
    let myVar = 1;
    return {
        getVar: function() {
            return myVar;
        },
        setVar: function(val) {
            myVar = val;
        }
    }
}

obj = initializeData();
console.log(obj.getVar());
obj.setVar(10);
console.log(obj.getVar());
