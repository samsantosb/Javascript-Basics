/*Promises*/

//create tree diferent functions that return promises
function getPromise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 1");
        }, 1000);
    });
}

function getPromise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2");
        }, 2000);
    });
}

function getPromise3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 3");
        }, 3000);
    });
}


function executePromises() {
    getPromise1().then((result) => {
        console.log(result);
        return getPromise2();
    }).then((result) => {
        console.log(result);
        return getPromise3();
    }).then((result) => {
        console.log(result);
    });
}

executePromises();

// function executePromisesAll() {
//     Promise.all([getPromise1(), getPromise2(), getPromise3()]).then((result) => {
//         console.log(result);
//     });
// }
// executePromisesAll()

// //same function using for await
// async function executePromisesForAwait() {
//     for await (const promise of [getPromise1(), getPromise2(), getPromise3()]) {
//         console.log(promise);
//     }
// }

// executePromisesForAwait();

//when to use for await
//for await is used when you want to execute promises in sequence
//so you can log the result of each promise before executing the next one

//Promise All is used when you want to execute promises in parallel
//it is faster than for await, but you can't log the result
//of each promise before executing the next one
//if one of the promises fails, the whole promise.all fails

//Promise AllSettled is used when you want to execute promises in parallel
//it is faster than for await, but you can't log the result
//if one of the promises fails, the whole promise.allSettled doesn't fail

//async await is used when you want execute one promise
//.then is used when you want to execute one promise
