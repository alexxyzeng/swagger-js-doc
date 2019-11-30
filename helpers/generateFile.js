const fs = require('fs');
const { Methods } = require('../const/methods');
const { parseParams } = require('./parseParamters');

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
    apiInfos.forEach((apiInfo, index) => {
      const [method, methodInfo] = apiInfo;
      //  TODO: 增加对响应的解析
      //  TODO: 增加对definitions的解析
      if (availableMethodsSet.has(method)) {
        parseParams(methodInfo, definitions);
      }
    });

    fs.writeFileSync(targetPath, JSON.stringify(value));
  });
}

module.exports = {
  generateFiles
};
