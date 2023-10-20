/*Promises*/

function getPromise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 1");
        }, 10000);
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
        }, 1000);
    });
}

function executePromises() {
    getPromise3().then((result) => {
        console.log(result);
    });

    getPromise1().then((result) => {
        console.log(result);

    })
    getPromise2().then((result) => {
        console.log(result);
    })
}

//executePromises()

function executePromisesAll() {
    Promise.all([getPromise1(), getPromise2(), getPromise3()]).then((result) => {
        console.log(result);
    });
}

//executePromisesAll()

async function executePromisesForAwait() {
    for await (const promise of [getPromise1(), getPromise2(), getPromise3()]) {
        console.log(promise);
    }
}

//executePromisesForAwait()

function executePromisesThen() {
    getPromise3().then((result) => {
        console.log(result);
    });
    getPromise2().then((result) => {
        console.log(result);
    });
    getPromise1().then((result) => {
        console.log(result);
    });
}

//executePromisesThen();

async function executePromisesAsyncAwait() {
    const preProm = getPromise3()
    const preProm2 = getPromise2()
    const preProm1 = getPromise1()

    const promise3 = await preProm;
    console.log(promise3);


    const promise2 = await preProm2;

    console.log(promise2);


    const promise1 = await preProm1;
    console.log(promise1);
}

executePromisesAsyncAwait()

function asyncAwaitWithMultipleFunctions() {
    async function executePromise3() {
        const promise3 = await getPromise3();
        console.log(promise3);
    }
    executePromise3();


    async function executePromise1() {
        const promise1 = await getPromise1();
        console.log(promise1);
    }
    executePromise1();

    async function executePromise2() {
        const promise2 = await getPromise2();
        console.log(promise2);
    }
    executePromise2();
}

//asyncAwaitWithMultipleFunctions();

async function blockingPromises() {
    const prom1 = await getPromise1();
    console.log(prom1);

    const prom2 = await getPromise2();
    console.log(prom2);

    const prom3 = await getPromise3();
    console.log(prom3);
}

//blockingPromises();





