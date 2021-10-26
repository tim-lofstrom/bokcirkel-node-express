import express from 'express'
import path from 'path';

const app = express();
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'home.html'));
});

app.get('/api', (req, res) => {
    res.json({
        name: 'Tim'
    });
});

app.listen(3000);
