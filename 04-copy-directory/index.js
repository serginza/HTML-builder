const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, err => {
  if (err) throw err;
  
  fs.readdir(path.join(__dirname, 'files-copy'), (_err, copyFiles) => {

    for(let i = 0; i < copyFiles.length; i++) {
      fs.unlink(path.join(__dirname, 'files-copy', copyFiles[i]), err => {
        if(err) throw err;
      });
    }
  });

  fs.readdir(path.join(__dirname, 'files'), (_err, originalFiles) => {

    for (let j = 0; j < originalFiles.length; j++) {
      fs.copyFile(path.join(__dirname, 'files', originalFiles[j]), path.join(__dirname, 'files-copy', originalFiles[j]), err => {
        if(err) throw err;
      });
    }
  });
});