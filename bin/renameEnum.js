#!/usr/bin/env node
const fs = require('fs');
const process = require('process');

const cwd = process.cwd();
const outputPath = 'dist';
const configPath = `${cwd}/${outputPath}/enumNameConfig.json`;
const nameConfig = JSON.parse(fs.readFileSync(configPath) + '');
const configBakPath = `${cwd}/${outputPath}/enumNameConfigBak.json`;
const nameConfigBak = JSON.parse(fs.readFileSync(configBakPath) + '');

const enumPath = `${cwd}/${outputPath}/enum.js`;
let enumFile = fs.readFileSync(enumPath) + '';

const nameConfigList = Object.entries(nameConfig);
nameConfigList.forEach(([name, targetName]) => {
  const originalName = nameConfigBak[name];
  nameConfigBak[name] = targetName;
  const regex = new RegExp(`${originalName}`, 'g');
  enumFile = enumFile.replace(regex, targetName);
});

fs.writeFileSync(configBakPath, JSON.stringify(nameConfigBak, null, 2));
fs.writeFileSync(enumPath, enumFile);