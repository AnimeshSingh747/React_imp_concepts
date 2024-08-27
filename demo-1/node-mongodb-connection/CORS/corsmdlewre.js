const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/date', (req, res) => {
    res.json({ message: 'CORS is enabled for this route'});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});