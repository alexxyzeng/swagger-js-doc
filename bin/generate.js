#!/usr/bin/env node
const process = require('process');
const fetch = require('node-fetch');
const fs = require('fs');

const { swaggerDocPath, generateFiles, parseDefinitions } = require('../index');

const [baseUrl] = process.argv.slice(2);
if (!baseUrl) {
  throw new Error(
    'The baseUrl is required. Please configure the base url in the command'
  );
}
const swaggerDocUrl = `${baseUrl}${swaggerDocPath}`;

fetch(swaggerDocUrl)
  .then((res) => res.json())
  .then((json) => {
    const { paths, definitions } = json;
    // const parsedDefinitions = parseDefinitions(definitions);
    // fs.writeFileSync(
    //   'definitions.js',
    //   JSON.stringify(parsedDefinitions, null, 2)
    // );
    generateFiles(paths, definitions);
  })
  .catch(console.log);
