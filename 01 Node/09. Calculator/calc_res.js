// calculator result logic
const calcResult = (req, res) => {
  const body = [];        // Array to collect data chunks

  // Receiving data chunks
  req.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
    body.push(chunk);
  });

  // End of data reception
  req.on('end', () => {
    const fullBody = Buffer.concat(body).toString();
    console.log('Full body:', fullBody);

    // Parsing request
    const params = new URLSearchParams(fullBody);

    const bodyObject = Object.fromEntries(params);
    console.log('bodyObject is:', bodyObject);
    const result = Number(bodyObject.num1) + Number(bodyObject.num2);
    console.log(result);
    
    // Sending response
    res.write(`<h2>The result is: ${result}</h2>`);
    return res.end();   // This module can also send the response
  });
}

module.exports = calcResult;