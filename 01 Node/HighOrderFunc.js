function add(a, b, cb) {
  var c = a + b;
  cb(c);
}
add(2, 3, (value) => { console.log(value) });

function sub(a, b, cb) {
  var c = a - b;
  cb(c);
}
sub(9, 3, (value) => { console.log(value) });

function mul(a, b, cb) {
  var c = a * b;
  cb(c);
}
mul(2, 9, (product) => { console.log(product) });



// Asynchronous JavaScript
// fetch('https://jsonplaceholder.typicode.com/posts').then(value=>console.log(value)).catch(error=>console.log(error));

fetch('https://jsonplaceholder.typicode.com/todos').then(value => console.log(value)).catch(error => console.error(error));

console.log("Code completed.");


async function api() {
  const data = await fetch('https://jsonplaceholder.typicode.com/albums');
  console.log(data);
}

async function valuePrint() {
  for (let i = 0; i <= 200; i++) { 
    console.log(i);
  }

  const data = await fetch('https://jsonplaceholder.typicode.com/photos');
  console.log(data);
}

api();
valuePrint();



