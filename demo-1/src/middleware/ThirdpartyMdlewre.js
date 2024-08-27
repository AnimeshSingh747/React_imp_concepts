const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/data', (req, res) => {
    res.send('Recieved data: ${JSON.stringify.body)}');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});