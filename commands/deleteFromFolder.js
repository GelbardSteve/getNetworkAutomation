const fs = require("fs");
module.exports = (deleteFolder) => {
  function deleteImages() {
    return new Promise(function (resolve) {
      fs.readdir(deleteFolder, (err, files) => {
        files.forEach((file) => {
          fs.unlinkSync(`${deleteFolder}/${file}`);
        });
        resolve();
      });
    });
  }
  deleteImages();
};
