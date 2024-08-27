const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('Normal middleware');
});

app.get('/', (req, res) => {
    throw new Error('Something went wrong!');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});