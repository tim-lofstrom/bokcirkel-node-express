import express from 'express'
import path from 'path';

import livereload from 'livereload';
import connectlivereload from 'connect-livereload';

const reloader = livereload.createServer();
reloader.watch(path.join(__dirname, 'public'));

reloader.server.once('connection', () => {
    setTimeout(() => {
        reloader.refresh('/');
    }, 100);
});

const app = express();

app.use(connectlivereload());

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'home.html'));
});

app.get('/api', (req, res) => {
    res.json({
        name: 'Tim Löfström'
    });
});

app.listen(3000);
