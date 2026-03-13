const logical = () => {
  console.log("This is a logical testing function.");

  let num = 5;
  if (num == 10) {
    console.log(num);
  }
  else {
    console.log("num is not 10");
  }
}

module.exports = logical;