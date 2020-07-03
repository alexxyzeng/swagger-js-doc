#!/usr/bin/env node
const fs = require('fs');
const process = require('process');

const cwd = process.cwd();
const outputPath = 'dist';

const nameConfig = JSON.parse(fs.readFileSync(`${cwd}/${outputPath}/enumNameConfig.json`) + '');
const nameConfigBak = JSON.parse(fs.readFileSync(`${cwd}/${outputPath}/enumNameConfigBak.json`) + '');

const enumPath = `${cwd}/${outputPath}/enum.js`;
let enumFile = fs.readFileSync(enumPath) + '';

const nameConfigList = Object.entries(nameConfig);
nameConfigList.forEach(([name, targetName]) => {
  const originalName = nameConfigBak[name];
  const regex = new RegExp(`${originalName}`, 'g');
  enumFile = enumFile.replace(regex, targetName);
});

fs.writeFileSync(enumPath, enumFile);