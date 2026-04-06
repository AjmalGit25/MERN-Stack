// calculator result logic
const calcResult = (req, res) => {
  console.log('In sum request handler:', req.url);

  const body = [];        // Array to collect data chunks
  let result;

  // Receiving data chunks
  req.on('data', (chunk) => {               // When data arrives, then you will execute this callback (async code, non-blocking)
    console.log('Received chunk:', chunk);
    body.push(chunk);
  });

  // End of data reception
  req.on('end', () => {                     // When all data received, then you will execute this callback (async code, non-blocking)
    console.log('Event ends here');
    const fullBody = Buffer.concat(body).toString();
    console.log('Full body:', fullBody);

    // Parsing request
    const params = new URLSearchParams(fullBody);
    const bodyObject = Object.fromEntries(params);
    console.log('bodyObject is:', bodyObject);
    result = Number(bodyObject.num1) + Number(bodyObject.num2);
    console.log(result);
  });

  // Sending response
  console.log('Sending the response');
  res.write(`<h2>The result is: ${result}</h2>`);
  return res.end();   // This module can also send the response
}

module.exports = calcResult;