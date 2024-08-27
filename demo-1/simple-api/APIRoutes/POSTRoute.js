app.use(express.json());

app.post('/api/data', (req, res) => {
    const receivedData = req.body;
    res.json({ received: receivedData });
});
