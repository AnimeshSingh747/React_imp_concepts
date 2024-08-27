const express = require('express');
const { Next } = require('react-bootstrap/esm/PageItem');
const app = express();

app.use((req, res, Next) => {
    console.log('${req.method} ${req.url}');
    Next();
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});