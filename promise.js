// let promise = new Promise (function(resolve,reject){
//     const x = "geeksforgeeks";
//     const y = "geeksforgeeks"
//     if (x===y) {
//         resolve();
//     }else {
//         reject();
//     }
// });

// promise.then (function(){
//     console.log("sucess,y r geek");
// })
// .catch (function (){
//     console.log("error occured");
// });

let promise = new Promise (function(resolve,reject){
    const x = "geeksforgeeks";
    const y = "geeksforeeks"
    if (x===y) {
        resolve("correct");
    }else {
        reject("wrong");
    }
});

promise.then (function(sucess){
    console.log(sucess);
})
.catch (function (error){
    console.log(error);
});