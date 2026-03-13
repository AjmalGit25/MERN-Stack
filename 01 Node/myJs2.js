// console.log ("Hi Guys! Run me anywhere!");

add = (a, b) => {
  console.log (a + b);
}

const { error } = require("console");
// add (30, 60);



const fs = require("fs");

// Synchronous File Handling
// fs.writeFileSync("./test.txt", "Hey, It's my first time to get entered1");
// fs.writeFileSync("./abc.txt", "Hey, It's my first time to get entered2");
// fs.writeFileSync("./xyz.txt", "Hey, It's my third file");

// Asynchronous File Handling
// fs.writeFile("./test2.txt", "Hey, It's my first time to get entered", (err) => {console.log(err);});
// fs.writeFile("./test2.txt", "Hey, It's my first time to get entered78692", (err) => {console.log(err);});


// const result = fs.readFileSync("./test2.txt", "utf-8");
// console.log(result);

// Synchronous File Handling
// console.log(fs.readFileSync("./test2.txt", "utf-8"));


// Asynchronous File Reading
// fs.readFile("./test.txt", "utf-8", (error, result) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(result);
//   }
// });


// Synchronous File Appending
// fs.appendFileSync("./test.txt", "\nNew Data Entered");


// fs.cpSync("./test.txt", "./abc.txt");

// Remove a File
// fs.unlinkSync("./xyz.txt");

// Status (Information) of a File
// console.log(fs.statSync("./test.txt"));


// OS Info
// const os = require("os");
// console.log(os.cpus().length);


// Server Creation
const http = require("http");

const server = http.createServer((req, res) => {
  console.log ("Server is successfully created");
  res.end("Hey, How are you? Drop dead gorgeous.");
});

server.listen(8000, () => {
  console.log("Server is listening on port 8000");
});