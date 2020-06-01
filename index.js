// const { Methods } = require('./const/methods');
const { swaggerDocPath } = require('./const');
const { generateFiles } = require('./helpers/generateFile');
const { parseDefinitions } = require('./helpers/parseDefinitions');

module.exports = {
  swaggerDocPath,
  generateFiles,
  parseDefinitions,
};
