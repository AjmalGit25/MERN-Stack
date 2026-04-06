// service / logic module

const parseUserData = (req, res) => {
  const body = [];
  req.on('data', (chunk) => {
    console.log('Received Chunk: ', chunk);
    body.push(chunk);
  });

  req.on('end', () => {
    const fullBody = Buffer.concat(body).toString();
    console.log('Full Body: ', fullBody);

    // Parsing request
    const params = new URLSearchParams(fullBody);
    const bodyObject = Object.fromEntries(params);
    console.log('bodyObject is:', bodyObject);
    console.log('Name:', bodyObject.name);
    console.log('Email:', bodyObject.email);

    return res.end(JSON.stringify(bodyObject));   // send data back
  });
}

module.exports = parseUserData;