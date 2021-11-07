const FILE_NAME = '.version.json';
const fs = require('fs');


function checkFileExists() {
  return fs.existsSync('./' + FILE_NAME);
}

function createFile(initialVersion) {

  if (checkFileExists()) {
    throw "File already exists";
  }

  if (initialVersion && !checkVersionIsSemantic(initialVersion)) {
    throw "Initial version is not semantic";
  }

  const version = initialVersion || "0.0.0"
  console.log(`creating with ${version}`);

  const fileContent = {version: version};
  fs.writeFileSync(FILE_NAME, JSON.stringify(fileContent));

}

function checkVersionIsSemantic(version) {
  return version.match(/((\w|\d)+\.){2}(\w|\d)/g);
}

module.exports = {
  createFile
};
