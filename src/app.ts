import http from 'http';
import fs from 'fs';
import path from 'path';

const pagesFolder = 'public';
const indexPage = fs.readFileSync(path.resolve(__dirname, pagesFolder, 'index.html'));
const homePage = fs.readFileSync(path.resolve(__dirname, pagesFolder, 'home.html'));
const notFoundPage = fs.readFileSync(path.resolve(__dirname, pagesFolder, 'not_found.html'));

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.end(indexPage);
            break;
        case '/home':
            res.end(homePage);
            break;
        default:
            res.writeHead(404);
            res.end(notFoundPage);
    }
})

server.listen(3000);
