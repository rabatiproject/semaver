const FILENAME = '.version.json'
const FILEPATH = './' + FILENAME
const
  fs = require('fs')

function checkFileExists() {
  return fs.existsSync(FILEPATH)
}

function getCurrentVersion() {
  let rawData = fs.readFileSync(FILEPATH)
  return JSON.parse(rawData).version
}

function updatePart(index) {
  let currentVersion = getCurrentVersion()
  let fields = currentVersion.split('.')
  fields[index] = String(parseInt(fields[index], 10) + 1)
  updateFile(fields.join('.'))
}

function updateFile(newVersion) {
  let jsonData = getFileContentAsJson()
  jsonData.version = newVersion
  saveToFile(jsonData)
}

function getFileContentAsJson() {
  let rawData = fs.readFileSync(FILEPATH)
  return JSON.parse(rawData)
}

function createFile(initialVersion) {
  if (checkFileExists()) {
    throw new Error('File already exists')
  }

  if (initialVersion && !checkVersionIsSemantic(initialVersion)) {
    throw new Error('Initial version is not semantic')
  }

  const version = initialVersion || '0.0.0'

  const fileContent = {version: version}
  saveToFile(fileContent)
}

function checkVersionIsSemantic(version) {
  return version.match(/((\w|\d)+\.){2}(\w|\d)/g)
}

function saveToFile(fileContent) {
  fs.writeFileSync(FILENAME, JSON.stringify(fileContent))
}

module.exports = {
  createFile,
  updatePart,
}
