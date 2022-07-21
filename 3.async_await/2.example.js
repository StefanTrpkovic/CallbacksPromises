// async function example

async function f() {
    console.log('Async function.');
    return Promise.resolve(1);
}

f().then(function(result) {
    console.log(result)
});

// async function myFunction(){
//     const res = await f();
//     console.log(res);
// }

// myFunction();