const express = require('express');
const app = express();
const router = express.Router();

router.use((req, res, next) => {
    console.log('Router-level middleware executed');
    next();
});

router.get('/user', (req, res) => {
    res.send('user route')
});

app.use('/api', router);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});