const runtime = () => {
  // console.log("This is a runtime testing function.");
  // console.log(x); // This will cause a ReferenceError
  let num = 10;
  // num(); // This will cause a TypeError
};

module.exports = runtime;