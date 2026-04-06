// while loop

let num = 12;

console.log(`5 * ${num} = ${5 * num}`)

let i = 1;
while (i < 10) {
    console.log(`${num} * ${i} = ${num * i}`)
    i++;
}

// for loop

for (let i=1; i<10; i++) {
    console.log(`${num} * ${i} = ${num * i}`)
}

let totalSum = 0
for (let i=1; i<=10; i++) {             // loop always runs n+1
    totalSum += i;
}
console.log(totalSum)

for (let i=0; i<5; i++) {
    for (let j=0; j<i+1; j++) {
        console.log(j+" ")
    }
    console.log("\n");
}


// do-while

let myNum = 1;
do {
    console.log(myNum)
    myNum++;
}while (myNum < 1);

//how to check code using Debugger


//let userInput = prompt("Enter any positive number")



