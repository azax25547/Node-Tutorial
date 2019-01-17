const http = require('http');
const server = http.createServer((req,res)=> {
    if(req.url === '/node'){
        res.write("Hello World from NODE");
        res.end();
    }else {
        res.write("NIgga Wrong PAge");
        res.end();
    }
})

server.listen('3000',() => console.log('server is running'));