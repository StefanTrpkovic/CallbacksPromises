// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    reject('Promise rejected')}, 4000); 
});

// async function
async function asyncFunc() {
    try {
        // wait until the promise resolves 
        let result = await promise; 
        console.log(result);
    }   
    catch(error) {
        console.log(error + ".");
    }
}

// calling the async function
asyncFunc(); // Promise resolved