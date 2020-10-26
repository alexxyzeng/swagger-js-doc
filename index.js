// const { Methods } = require('./const/methods');
const { swaggerDocPath } = require('./const');
const { generateFiles, generateFile } = require('./helpers/generateFile');
const { parseDefinitions } = require('./helpers/parseDefinitions');

module.exports = {
  swaggerDocPath,
  generateFiles,
  generateFile,
  parseDefinitions,
};
