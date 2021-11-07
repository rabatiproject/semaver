const FILE_NAME = '.version.json';
const FILE_PATH = './' + FILE_NAME
const
  fs = require('fs');


function checkFileExists() {
  return fs.existsSync(FILE_PATH);
}

function getCurrentVersion() {
  let rawData = fs.readFileSync(FILE_PATH)
  return JSON.parse(rawData).version;
}

function updatePart(index) {
  let currentVersion = getCurrentVersion()
  let fields = currentVersion.split('.')
  fields[index] = (parseInt(fields[index]) + 1) + "";
  updateFile(fields.join('.'));
}

function updateFile(newVersion) {
  let jsonData = getFileContentAsJson();
  jsonData.version = newVersion
  saveToFile(jsonData);
}

function getFileContentAsJson() {
  let rawData = fs.readFileSync(FILE_PATH)
  return JSON.parse(rawData);
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
  saveToFile(fileContent);

}

function checkVersionIsSemantic(version) {
  return version.match(/((\w|\d)+\.){2}(\w|\d)/g);
}

function saveToFile(fileContent) {
  fs.writeFileSync(FILE_NAME, JSON.stringify(fileContent));
}

module.exports = {
  createFile,
  updatePart
};
