// try ... catch
// The try...catch statement marks a block of statements to try, and specifies a response should an exception be thrown.
// The try...catch statement is used to handle exceptions in JavaScript.
// It allows you to write code that can handle errors gracefully, rather than crashing the program.
// The try block contains the code that may throw an error, while the catch block contains the code that handles the error.
// The finally block is optional and contains code that will run regardless of whether an error occurred or not.
// The throw statement allows you to create a custom error message and throw it as an exception.
// The throw statement can be used to create custom error messages and throw them as exceptions.

function divide (a, b) {
    try {
        if (b === 0) {
            throw new Error ("Denominator cannot be zero");
        }
        return a / b;
    } catch (error) {
        console.error(error.message);   // Handle the error gracefully
        return null;
    }
}

console.log(divide (5, 0))
console.log(divide (10, 2))

// Check Age criteria using try-catch
function eligibilityCheck(age) {
    try {
        if (age < 18){
            throw new Error ("You are not eligible for driving!");
        }
        console.log("You are eligible for driving! Thank you!");
    }catch (error) {
        console.error(error.message);
        return null;
    }
}

eligibilityCheck(19)