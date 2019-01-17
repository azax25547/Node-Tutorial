const fs = require('fs');

const rs = fs.createReadStream('./example.txt','UTF-8');
const ws = fs.createWriteStream('example2.txt');
//it is good for read data also from very large files
rs.on('data', (chunk) => {
    ws.write(chunk);
})
