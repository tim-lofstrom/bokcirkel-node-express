import http from 'http';

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end('Hello Node!!');
})

server.listen(3000);
