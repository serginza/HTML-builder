const fs = require('fs');
const path = require('path');

const stream = fs.ReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
stream.on('data', data=> {
  console.log(data);
  stream.on('error', error => console.log('Error', error.message));
});