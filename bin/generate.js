#!/usr/bin/env node
const process = require('process');
const fetch = require('node-fetch');
const chalk = require('chalk');

const { swaggerDocPath, generateFiles, /** parseDefinitions */ } = require('../index');

const [baseUrl, path, ...methods] = process.argv.slice(2);
if (!baseUrl) {
  throw new Error(
    chalk.red('The baseUrl is required. Please configure base url in the command line')
  );
}

if (!path) {
  throw new Error(chalk.red('The path is required. Please configure base url in the command line'));
}

const swaggerDocUrl = `${baseUrl}${swaggerDocPath}`;
global.callCount = {};
fetch(swaggerDocUrl)
  .then((res) => res.json())
  .then((json) => {
    const { paths, definitions } = json;
    // const parsedDefinitions = parseDefinitions(definitions);
    // fs.writeFileSync(
    //   'definitions.js',
    //   JSON.stringify(parsedDefinitions, null, 2)
    // );
    generateFiles(paths, definitions, path, methods);
  })
  .catch(console.log);


