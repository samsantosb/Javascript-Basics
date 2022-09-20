/*Functional Programming */

// 1. Function Declaration
//this function is hoisted
//this function can be called before its declaration
//this function bind the this keyword to the next closure context
function add(a, b) {
    return a + b;
}

// 2. Function Expression
//this function isnt hoisted - cant be called before its declaration
const mul = function (a, b) {
    return a * b;
}

// 3. Arrow Function
//this function isnt hoisted too
//tihs function also bind the this keyword to the current context
//so you cant use this keyword inside this function
const sub = (a, b) => a - b;

// 4. Higher Order Function and Callback
function highOrderFunction(a, b, callback) {
    return callback(a, b);
}


// 5. Pure Function X Impure Function
//Pure Function
function pureSum(a, b) {
    return a + b;
}

//Impure Function
const c = 10;
function impureSum(a, b) {
    return a + b + c;
}

// 9. Currying
//you can call a function with parent function arguments
function parent(a, b) {
    function child(c) {
        return a + b + c;
    }
    return child;
}
//console.log(parent(1, 2)(3));

// 11. Recursion
//you can call a function inside itself
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

//12. Closure
function closure() {
    let a = 10;
    b
    //cant acces a variable from child function
    return function () {
        //can acces a variable from parent function
        const b = 10;
        return a;
    }
}
