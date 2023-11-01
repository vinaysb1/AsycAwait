// //promises
// const promise = new Promise((resolve,reject)=> {
//     setTimeout(()=>{

//         resolve("Bringing tacos")
            
//     },5000)
// })
// //Reject scenario
// const promise2 = new Promise((resolve,reject)=> {
//     setTimeout(()=>{

//         resolve("not bringing tacos,Food truck not there")
            
//     },5000)
// })

// Resolve scenario
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Bringing tacos");
    }, 5000);
});

// Handle the resolve scenario
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

// Reject scenario
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Not bringing tacos, food truck not there");
    }, 5000);
});

// Handle the reject scenario
promise2
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

