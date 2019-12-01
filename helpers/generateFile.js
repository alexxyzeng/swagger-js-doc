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
    let methods = {};
    if (key !== '/appointment/loop/{apptId}') {
      return;
    }
    apiInfos.forEach(apiInfo => {
      const [method, methodInfo] = apiInfo;
      if (availableMethodsSet.has(method)) {
        const parsedMethod = parseParams(methodInfo, definitions);
        console.log('====================================');
        console.log(method);
        // console.log('--------------------------------');
        // console.log(parsedMethod.parameters.body);
        console.log('====================================');
        //  TODO: 增加对响应的解析
        methods[method] = parsedMethod;
      }
    });
    result = { path: key, methods };
    fs.writeFileSync(targetPath, JSON.stringify(result));
  });
}

module.exports = {
  generateFiles
};
