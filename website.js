const { Console } = require('console');
const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3004;

const server = http.createServer((req,res)=>{
    
    // console.log(req.referer);
    res.setHeader('Content-Type','text/html')
    if (req.url == '/') {
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }

    else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1>This is About page</h1>');
    }

    else  {
        res.statusCode = 404;
        // console.log(res.statusMessage);
        res.end('<h1>Page not found Error</h1>');
    }
    

});

server.listen(port,()=>{console.log(`Server is listening on port ${port}`);});

