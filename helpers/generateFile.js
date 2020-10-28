const fs = require("fs");
const chalk = require("chalk");

const { Methods } = require("../const/methods");
const { parseParams } = require("./parseParameters");
const { parseApiInfo } = require("./writeTpl");
const { parseEnumConfigToString } = require("./parseEnum");
const { resolve } = require("path");

/**
 *
 * @param {string[]} paths
 * @param {object} definitions
 * @param {string} apiPath
 * @param {string[]} methods
 * @param {string} outputPath
 * @param {string} routePaths
 * @param {string} servicePath
 */
function generateFiles(
  paths,
  definitions,
  apiPath,
  methods = Methods,
  baseUrl,
  outputPath = "dist",
  // routePaths,
  // servicePath = 'service'
  options = {}
) {
  const { servicePrefix = "import { API } from '@/helpers/api'\n" } = options;
  const enumNameConfigPath =
    process.cwd() + "/" + outputPath + "/enumNameConfig.json";
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
    global.enumNameConfig = JSON.parse(
      fs.readFileSync(enumNameConfigPath) || "{}"
    );
  }
  pathList.forEach(path => {
    const [key, value] = path;
    const relativePath = key.replace(/\//g, "_").substr(1, key.length - 1);
    // TODO: 指定路径和路径名称
    const targetPath = `${outputPath}/${relativePath}`;
    const apiInfos = Object.entries(value);
    let result = {};
    let methods = {};
    if (apiPath && key !== apiPath) {
      return;
    }
    apiInfos.forEach(apiInfo => {
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
    // 重写路径定义
    fs.writeFileSync(`${targetPath}/api.js`, JSON.stringify(path, null, 2));
    const { service, mock } = parseApiInfo(result, definitions, { baseUrl });
    fs.writeFileSync(`${targetPath}/service.js`, servicePrefix + service);
    fs.writeFileSync(`${targetPath}/mock.js`, mock);
  });
  const enumContent = parseEnumConfigToString(global.enumConfig);
  fs.writeFileSync(`${outputPath}/enum.js`, enumContent);
  // eslint-disable-next-line no-unused-vars
  const { hasNew, ...enumNameConfig } = global.enumNameConfig;
  fs.writeFileSync(
    `${outputPath}/enumNameConfig.json`,
    JSON.stringify(enumNameConfig, null, 2)
  );
  fs.writeFileSync(
    `${outputPath}/enumNameConfigBak.json`,
    JSON.stringify(enumNameConfig, null, 2)
  );
  console.log(
    chalk.blue.bold("Enum successfully generated. You can manually checkout ") +
      chalk.white.bgRed.bold(` ${outputPath}/enumNameConfig.json `) +
      chalk.blue.bold(" and update enum name using") +
      chalk.yellow(" npx rename-enum ")
  );
}

// {
//   pathItem: {
//     path: '/building/region',
//     methods: [ [Object] ],
//     tag: '(基础数据-空间位置)大厦/区域管理',
//     routes: [
//       '/',
//       '/user/home',
//       '/user',
//       '/third',
//       '/third/first',
//       '/third/second',
//       '/third/second/first',
//       '/ttt',
//       '/ttt/first',
//       '/ttt/second',
//       '/ttt/second/first'
//     ]
//   },
//   path: '/third/second',
//   fileName: 'buildingRegion',
//   names: { updateRegionUsingPUT: 'updateRegion' }
// }

function generateFile(pathInfo, definitions, apiPath, options) {
  const {
    swaggerUrl,
    mockPath,
    pagePath,
    serviceTag = "service",
    servicePrefix = "import { API } from '@/helpers/api'\n"
  } = options;
  const { pathItem, path: pathUrl, fileName, names } = pathInfo;
  const { path, methods: methodList } = pathItem;
  let result = {};
  let methods = {};
  methodList.forEach(methodInfo => {
    const { methodName } = methodInfo;
    methods[methodName] = parseParams(methodInfo, definitions);
  });
  result = { path, methods };
  const { service, mock } = parseApiInfo(result, definitions, {
    baseUrl: swaggerUrl,
    names
  });
  const servicePath = `${pagePath}${pathUrl}/${serviceTag}`;
  if (!fs.existsSync(servicePath)) {
    fs.mkdirSync(servicePath);
  }
  fs.writeFileSync(resolve(servicePath, `${fileName}.js`), servicePrefix + service);
  if (!fs.existsSync(mockPath)) {
    fs.mkdirSync(mockPath);
  }
  fs.writeFileSync(resolve(mockPath, `${fileName}.js`), mock);
}

function generateEnums(paths, definitions, options = {}) {
  const { configPath = 'config', enumPath = 'enums', enumConfigName = 'enumNameConfig.json' } = options;
  const enumNameConfigPath = resolve(configPath, enumConfigName);
  if (!fs.existsSync(configPath)) {
    fs.mkdirSync(configPath);
  }
  if (!fs.existsSync(enumPath)) {
    fs.mkdirSync(enumPath);
  }
  
  const pathList = Object.entries(paths);
  global.enumNameConfig = {};
  global.enumConfig = {};
  if (fs.existsSync(enumNameConfigPath)) {
    global.enumNameConfig = JSON.parse(
      fs.readFileSync(enumNameConfigPath || "{}")
    ) || {};
  }
  pathList.forEach(path => {
    const [key, value] = path;
    const apiInfos = Object.entries(value);
    let result = {};
    let methods = {};
    apiInfos.forEach(apiInfo => {
      const [method, methodInfo] = apiInfo;
      const parsedMethod = parseParams(methodInfo, definitions);
      methods[method] = parsedMethod;
    });
    result = { path: key, methods };
    parseApiInfo(result, definitions, { baseUrl: '' });
  });
  const enumContent = parseEnumConfigToString(global.enumConfig, global.enumNameConfig);
  fs.writeFileSync(`${enumPath}/index.js`, enumContent);
  // eslint-disable-next-line no-unused-vars
  const { hasNew, ...enumNameConfig } = global.enumNameConfig;
  fs.writeFileSync(
    enumNameConfigPath,
    JSON.stringify(enumNameConfig, null, 2)
  );
}

module.exports = {
  generateFiles,
  generateFile,
  generateEnums
};
