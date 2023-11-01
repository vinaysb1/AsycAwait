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

// let promise = new Promise (function(resolve,reject){
//     const x = "geeksforgeeks";
//     const y = "geeksforeeks"
//     if (x===y) {
//         resolve("correct");
//     }else {
//         reject("wrong");
//     }
// });

// promise.then (function(sucess){
//     console.log(sucess);
// })
// .catch (function (error){
//     console.log(error);
// });

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Bringing tacos");
         reject("Not bringing tacos"); // Comment out this line to make the promise resolve
    }, 300);
});

const onfulfillment = (result) => {
    console.log(result);
    console.log("set up the table");
};

const onreject = (err) => {
    console.log(err);
    console.log("Cook Pasta");
};

promise1.then(onfulfillment).catch(onreject);
// promise.all()

const p1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,300,"resolved")
})
const p2 = 99;
const p3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,300,"resolved2")
})

Promise.all([p1,p2,p3]).then((y)=>{
console.log(y)})
.catch((e)=>{
 console.log(e)   
})
