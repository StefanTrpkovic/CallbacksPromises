// returns a promise
let countValue = new Promise(function (resolve, reject) {
    resolve('Promise resolved'); 
 });

 // executes when promise is resolved successfully
 countValue.then(
     function successValue(result) {
         console.log(result);
     },
  )

// executes always
.finally(
    function errorValue() {
        console.log("Finally called when promise is resolved");
    }
)
 
