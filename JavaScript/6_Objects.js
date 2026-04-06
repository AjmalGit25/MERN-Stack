// One of the most important data structures in JavaScript is the object.
// Objects are used to store keyed collections of various data and more complex entities.
// Objects are mutable, meaning they can be changed after creation.
// Objects are variables too. But objects can contain many values.

const usrProfile = {
    name: "John Doe",                           // String
    age: 30,                                    // Number
    occupation: "Software Engineer",
    skills: ["JavaScript", "Python", "Java"],   // Array 
    experience: {
        company: "Tech Solutions",
        years: 5,
        role: "Full Stack Developer"
    },
    isEmployed: true,   // Boolean value    
    greet: function() {         // Method 
        console.log(`Hello, my name is ${this.name}.`);
    },
    displaySkills: function() {     // Method
        console.log("My skills are: " + this.skills.join(", "));
    },
    exercise : function() {     // Method
        console.log("Morning: I exercise regularly.");
        console.log("Evening: I walk regularly.");
    }
}

console.log(usrProfile.name);

console.log("Skills are following: "); 
for (let i = 0; i < usrProfile.skills.length; i++) {
    console.log(i+1 + ') ' + usrProfile.skills[i]); // Accessing array elements
}

usrProfile.greet(); // Calling method


console.log("Employee exercise: ");
usrProfile.exercise(); // Calling method
console.log("Displaying Skills:");
usrProfile.displaySkills()









// Class and Object
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }

    displayAge() {
        console.log(`I am ${this.age} years old.`);
    }
}

const user1 = new User("Alice", 25);
user1.greet(); 



// Arrow function
const add = (a, b) => a + b;
console.log(add(10, 20)); // Output: 30







// Combining Arrays or Merging Objects
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2]; // Merging arrays using spread operator
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]


const obj1 = { name: 'Alice'};
const obj2 = { age: 23};
const mergedObj = {...obj1, ...obj2}; // Merging objects using spread operator
console.log(mergedObj); // Output: { name: 'Alice', age: 23 }


const obj3 = { name: 'Bob', age: 15, city: 'Los Angeles'};
const obj4 = { name: 'Xavier', age: 45, city: 'New York'};
const mergedObj2 = {...obj3, ...obj4}; // Merging objects using spread operator
console.log(mergedObj2); 







// JavaScript Ends Here.=======================================================================