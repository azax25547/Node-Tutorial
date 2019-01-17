const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res) => {
    const rs = fs.createReadStream('./stat/index.html');
    //header
    res.writeHead(200,{'Content-type': 'text/HTML'})
    rs.pipe(res);
}).listen('3000',() => console.log('server is running'));
