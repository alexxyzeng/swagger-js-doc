const fs = require('fs');
const { Methods } = require('../const/methods');
const { parseParams } = require('./parseParameters');

function generateFiles(paths, definitions, methods = Methods) {
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }
  const pathList = Object.entries(paths);
  const availableMethodsSet = new Set(Object.values(methods));
  pathList.forEach(path => {
    const [key, value] = path;
    const relativePath = key.replace(/\//g, '_').substr(1, key.length - 1);
    const targetPath = `dist/${relativePath}.js`;
    const apiInfos = Object.entries(value);
    let result = {};
    apiInfos.forEach(apiInfo => {
      const [method, methodInfo] = apiInfo;
      //  TODO: 增加对响应的解析
      //  TODO: 增加对definitions的解析
      if (availableMethodsSet.has(method)) {
        const parsedMethod = parseParams(methodInfo, definitions);
        result[method] = parsedMethod;
      }
    });

    fs.writeFileSync(targetPath, JSON.stringify(result));
  });
}

module.exports = {
  generateFiles
};
