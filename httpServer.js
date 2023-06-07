const http = require('http')

const port = process.env.PORT || 3001;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    console.log(req.referer);
    console.log(req.url);
    res.setHeader('Content-Type','text/html')
    res.end('<h1>Hello this is running</h1>');

});

server.listen(port,()=>{console.log(`Server is listening on port ${port}`);});

