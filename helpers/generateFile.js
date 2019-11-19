const fs = require('fs');
const { Methods } = require('../const/methods');

function generateFiles(paths, definitions, methods = Methods) {
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }
  const pathList = Object.entries(paths);
  const availableMethodsSet = new Set(Object.values(Methods));
  pathList.forEach(path => {
    const [key, value] = path;
    const relativePath = key.replace(/\//g, '_').substr(1, key.length - 1);
    const targetPath = `dist/${relativePath}.js`;
    const apiInfos = Object.entries(value);
    apiInfos.forEach(apiInfo => {
      const [method, methodInfo] = apiInfo;
      //  TODO: 解析请求参数
      //  TODO: 解析响应
      //  TODO: 增加对definitions的解析
      if (availableMethodsSet.has(method)) {
        console.log('============');
        console.log(method);
        console.log(methodInfo);
        console.log('============');
      }
    });

    fs.writeFileSync(targetPath, JSON.stringify(value));
  });
}

function parseParameters(api) {
  const { parameters } = api;
  console.log(parameters);
}

module.exports = {
  generateFiles
};
