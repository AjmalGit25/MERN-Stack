// Function is a block of reusable code
// It is a set of instructions that perform a specific task
// It is executed when it is called
// Function is defined using the function keyword



function printTable (num = 5) {
    console.log ("Printing table of " + num)
    for (let i=1; i<num; i++) {
         console.log(`${num} * ${i} = ${num * i}`)
    }
}

function sum () { 
    var a = 30; 
    let b = 40; 
    console.log(a+b) 
}



sum () 
printTable (5) 


// console.log("let inside: ", b)
// console.log("var inside: ",a) 

product = (a, b) => {
    console.log("Product is: ", a * b)
    return a * b;
}

product(34, 87)




