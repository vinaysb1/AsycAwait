// function greet(){
//     console.log("Hello")
// }

// setTimeout(greet, 2000)

// function greet1(name){
//     console.log(`Hello ${name}`)
// }

// clearTimeout(setTimeout(greet1,2000,"vinay"))

// // function greet2(name){
// //     console.log(`Hello ${name}`)
// //     }
// //     setInterval(greet2,2000,"Viraj")

//     function greet3(name){
//         console.log(`Hello ${name}`)
//         }
//         clearInterval(setInterval(greet3,2000,"Viraj"))

//   //recursive set time out
// //   setTimeout(function run () {
// //       console.log("hello")
// //       setTimeout(run,1000)
// //     }, 1000);

//     const run = () =>{
//         console.log("hello")
//         setTimeout(run,1000) 
//     };
//     setTimeout(run,1000);


    // //callback
    // function greet5 (name) {
    //     console.log(`Hello ${name}`)
    // }

    // function greetVinay(greetFn) {
    //     const name = "vinay"
    //     greetFn(name)
    // }
    // greetVinay(greet5)

       
//promises
const promise = new Promise((resolve,reject)=> {
    setTimeout(()=>{

        resolve("Bringing tacos")
            
    },5000)
})
//Reject scenario
const promise2 = new Promise((resolve,reject)=> {
    setTimeout(()=>{

        resolve("not bringing tacos,Food truck not there")
            
    },5000)
})

promise.then(onFulfillment)
promise2.catch(onRejection)


const onFulfillment = (result) => {

    console.log(result)
    console.log("set up the table to eat tacos")
}

const onRejection = (error) => {

    console.log(error)
    console.log("Statrt cooking pasta")
}