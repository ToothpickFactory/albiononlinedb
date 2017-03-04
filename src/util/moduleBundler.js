const fs = require('fs');

function moduleBundler(folderPath){
  let modules = {};
  let files = fs.readdirSync(folderPath);
  files.forEach(file => {
    if(file !== "index.js"){
      let modName = file.replace('.js', '');
      modules[modName] = require(folderPath +'/'+ file);
    }
  });
  return modules;
}

module.exports = moduleBundler;
