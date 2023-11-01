function greet(){
    console.log("Hello")
}

setTimeout(greet, 2000)

function greet1(name){
    console.log(`Hello ${name}`)
}

clearTimeout(setTimeout(greet1,2000,"vinay"))

// function greet2(name){
//     console.log(`Hello ${name}`)
//     }
//     setInterval(greet2,2000,"Viraj")

    function greet3(name){
        console.log(`Hello ${name}`)
        }
        clearInterval(setInterval(greet3,2000,"Viraj"))

  //recursive set time out
//   setTimeout(function run () {
//       console.log("hello")
//       setTimeout(run,1000)
//     }, 1000);

    const run = () =>{
        console.log("hello")
        setTimeout(run,1000) 
    };
    setTimeout(run,1000);

       
