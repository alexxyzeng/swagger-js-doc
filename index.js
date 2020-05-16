//  TODO: 获取命令行参数
//  TODO: 抓取swagger接口数据
const process = require('process');
const fetch = require('node-fetch');
const fs = require('fs');

// const { Methods } = require('./const/methods');
const { swaggerDocPath } = require('./const');
const { generateFiles } = require('./helpers/generateFile');
const { parseDefinitions } = require('./helpers/parseDefinitions');

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
    const parsedDefinitions = parseDefinitions(definitions);
    fs.writeFileSync(
      'definitions.js',
      JSON.stringify(parsedDefinitions, null, 2)
    );
    generateFiles(paths, definitions);
  })
  .catch(console.log);
