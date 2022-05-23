const fs = require('fs');
const path = require('path');
const isideFolder = path.join(__dirname, 'secret-folder');

fs.readdir(isideFolder, (err, files) => {
  if (err) throw err;

  for (let i = 0; i < files.length; i++) {
    let fileInfo = path.join(__dirname, 'secret-folder', files[i]);
    fs.stat(fileInfo, (err, info) => {
      if (err) throw err;

      if(info.isFile()) {
        console.log(path.parse(path.basename(files[i])).name, '-' , path.extname(files[i]).substring(1), '-' , info.size/1024 + 'Kb');
      }
    });  
  }
});