const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

fs.writeFile(path.join(__dirname, 'text.txt'), '', (err) => {
  if (err) throw err;
});

stdout.write('Hello! Please, enter any text to write. Enter "exit" or Ctrl + С to finish\n');

stdin.on('data', data => {
  if (data.toString().toLocaleLowerCase().replace(/\s/g, '') === 'exit') {
    stdout.write('Text saved, goodbye!'); 
    process.exit();
  }

  fs.appendFile(path.join(__dirname, 'text.txt'), data, (err) => {
    if (err) throw err;
  });
});

process.on('SIGINT', () => {
  stdout.write('Text saved, goodbye!'); 
  process.exit();
});