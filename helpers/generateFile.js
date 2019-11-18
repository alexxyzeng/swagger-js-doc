const fs = require('fs');

const generateFiles = paths => {
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }
  const pathList = Object.entries(paths);
  pathList.forEach(path => {
    const [key, value] = path;
    const relativePath = key.replace(/\//g, '_').substr(1, key.length - 1);
    const targetPath = `dist/${relativePath}.js`;
    //  TODO: 解析请求参数
    fs.writeFileSync(targetPath, JSON.stringify(value));
  });
};

module.exports = {
  generateFiles
};
