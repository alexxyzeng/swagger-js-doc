const fs = require('fs');
const chalk = require('chalk');

const { Methods } = require('../const/methods');
const { parseParams } = require('./parseParameters');
const { parseApiInfo } = require('./writeTpl');
const { parseEnumConfigToString } = require('./parseEnum');

const outputPath = 'dist';

const enumNameConfigPath = process.cwd() + '/' + outputPath + '/enumNameConfig.json';


function generateFiles(paths, definitions, apiPath, methods = Methods) {
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
  }
  if (!Array.isArray(methods) || methods.length === 0) {
    methods = Methods;
  }
  const pathList = Object.entries(paths);
  const availableMethodsSet = new Set(Object.values(methods));
  global.enumNameConfig = {};
  global.enumConfig = {};
  if (fs.existsSync(enumNameConfigPath)) {
    global.enumNameConfig = JSON.parse(fs.readFileSync(enumNameConfigPath) || '{}');
  }
  pathList.forEach((path) => {
    const [key, value] = path;
    const relativePath = key.replace(/\//g, '_').substr(1, key.length - 1);
    const targetPath = `${outputPath}/${relativePath}`;
    const apiInfos = Object.entries(value);
    let result = {};
    let methods = {};
    if (apiPath && key !== apiPath) {
      return;
    }
    apiInfos.forEach((apiInfo) => {
      const [method, methodInfo] = apiInfo;
      if (availableMethodsSet.has(method)) {
        const parsedMethod = parseParams(methodInfo, definitions);
        methods[method] = parsedMethod;
      }
    });
    result = { path: key, methods };
    if (!fs.existsSync(targetPath)) {
      fs.mkdirSync(targetPath);
    }
    // fs.writeFileSync(`${targetPath}/api.js`, JSON.stringify(path, null, 2));
    const { service, mock } = parseApiInfo(result, definitions);
    fs.writeFileSync(
      `${targetPath}/service.js`,
      service
    );
    fs.writeFileSync(`${targetPath}/mock.js`, JSON.stringify(mock, null, 2));
  });
  const enumContent = parseEnumConfigToString(global.enumConfig);
  fs.writeFileSync(`${outputPath}/enum.js`, enumContent);
  // eslint-disable-next-line no-unused-vars
  const { hasNew, ...enumNameConfig } = global.enumNameConfig;
  fs.writeFileSync(`${outputPath}/enumNameConfig.json`, JSON.stringify(enumNameConfig, null, 2));
  fs.writeFileSync(`${outputPath}/enumNameConfigBak.json`, JSON.stringify(enumNameConfig, null, 2));
  console.log(chalk.blue.bold('Enum successfully generated. You can manually checkout ') + chalk.white.bgRed.bold(` ${outputPath}/enumNameConfig.json `) + chalk.blue.bold(' and update enum name using') + chalk.yellow(' npx rename-enum '));
}

module.exports = {
  generateFiles,
};
