const fs = require('fs');
const { Methods } = require('../const/methods');
const { parseParams } = require('./parseParameters');
const { parseApiInfo } = require('../writeTpl');

function generateFiles(paths, definitions, methods = Methods) {
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }
  const pathList = Object.entries(paths);
  const availableMethodsSet = new Set(Object.values(methods));
  console.log(pathList.length);

  pathList.forEach((path) => {
    const [key, value] = path;
    const relativePath = key.replace(/\//g, '_').substr(1, key.length - 1);
    const targetPath = `dist/${relativePath}`;
    const apiInfos = Object.entries(value);
    let result = {};
    let methods = {};
    // if (key !== '/appointment/loop/{apptId}') {
    //   return;
    // }
    apiInfos.forEach((apiInfo) => {
      const [method, methodInfo] = apiInfo;
      if (availableMethodsSet.has(method)) {
        const parsedMethod = parseParams(methodInfo, definitions);
        // TODO: 增加对响应的解析
        methods[method] = parsedMethod;
      }
    });
    result = { path: key, methods };
    if (!fs.existsSync(targetPath)) {
      fs.mkdirSync(targetPath);
    }
    fs.writeFileSync(`${targetPath}/api.js`, JSON.stringify(path, null, 2));
    fs.writeFileSync(
      `${targetPath}/original.js`,
      JSON.stringify(result, null, 2)
    );
    fs.writeFileSync(`${targetPath}/parsed.js`, parseApiInfo(result));
  });
}

module.exports = {
  generateFiles,
};
