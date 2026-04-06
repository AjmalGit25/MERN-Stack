const str = "Hello World";
const str2 = "Hello World";

// string + string = string
// string + number = string
// number + string = string
// number + number = number
// string - string = NaN (not a number)
// string - number = NaN (not a number)
// number - string = NaN (not a number)
// string * string = NaN (not a number)
// string * number = NaN (not a number)
// number * string = NaN (not a number)
// string / string = NaN (not a number)
// string / number = NaN (not a number)
// number / string = NaN (not a number)
// string % string = NaN (not a number)
// string % number = NaN (not a number)
// number % string = NaN (not a number)
// string ** string = NaN (not a number)
// string ** number = NaN (not a number)


console.log("10" + "20");           // 1020 (string concatenation)
console.log("10" + 20);             // 1020
console.log(10 + "20");             // 1020
console.log("10" - "20");           // -10 (string to number conversion)
console.log("10" * "20");           // 200 (string to number conversion)
console.log("10" / "20");           // 0.5 (string to number conversion)
console.log("10" % "20");           // 10 (string to number conversion)
console.log("10" ** "20");          // 100000000000000000000 (string to number conversion)

console.log("parth" - "patel");     // NaN (not a number)



console.log(0.1 + 0.2);
console.log(0.2 + 0.1);
console.log((0.1 + 0.2).toFixed(2));        // 0.3 (not 0.30000000000000004)

console.log(0.1 + 0.3);                     // 0.4 (not 0.30000000000000004)


if (5 === "5") {
    console.log ("Equal"); 
} else {
    console.log ("Not Equal");
}

console.log("===========================================================================");
console.log(+5);
console.log(+"5");
console.log(-5);
console.log(-"5");


var age = 18;

var result = age >= 18 ? "Yes" : "No";
console.log(result); // Yes


// var, let, const

var x = 9       // declare & initialize
var x = 50      // redeclare & initialize

let z = 5       // declare & initialize
// let z = 20;      // redeclare & initialize    // Error
z = 10              // reinitialize

const y = 2
// y = 7;       // error




