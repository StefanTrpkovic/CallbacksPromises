// a promise
let promise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve('Promise resolved')
    }, 4 * 1000); // 4 seconds
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();