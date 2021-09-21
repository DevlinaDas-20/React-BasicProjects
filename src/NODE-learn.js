const fs = require("fs");

//fs.mkdirSync('./folder1');
fs.writeFileSync('./folder1/hello.txt','Hello this is my node text file');
fs.appendFileSync('./folder1/hello.txt','\n This is my second line')

const data = fs.readFileSync('./folder1/hello.txt','utf8');
console.log(data)

fs.renameSync('./folder1/hello.txt','./folder1/Bye.txt')
fs.unlinkSync('./folder1/Bye.txt')
fs.rmdirSync('./folder1')