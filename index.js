//  TODO: 获取命令行参数
//  TODO: 抓取swagger接口数据
const http = require('http');
const process = require('process');

const { Methods } = require('./const/methods');
const { swaggerDocPath } = require('./const');
const { generateFiles } = require('./helpers/generateFile');

const [baseUrl] = process.argv.slice(2);
if (!baseUrl) {
  throw new Error(
    'The baseUrl is required. Please configure the base url in the command'
  );
}
console.log(`${baseUrl}${swaggerDocPath}`);

http.get(`${baseUrl}${swaggerDocPath}`, res => {
  res.setEncoding('utf-8');
  let result = '';
  res.on('error', err => {
    throw new Error(err);
  });
  res.on('data', data => {
    result += data;
  });
  res.on('end', () => {
    console.log('ended');
    const { paths, definitions } = JSON.parse(result);
    generateFiles(paths, definitions);
  });
  res.on('close', () => {
    console.log('closed');
  });
});
