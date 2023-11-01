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
