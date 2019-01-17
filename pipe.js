const fs = require('fs');
const zlib = require('zlib');
// const gzip = zlib.createGzip();
const gzip = zlib.createGunzip();

const rs = fs.createReadStream('./example2.txt.gz');
const ws = fs.createWriteStream('uncompressd.txt');

//chaining pipes
rs.pipe(gzip).pipe(ws);
