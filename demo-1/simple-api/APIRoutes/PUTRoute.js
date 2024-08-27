app.put('/api/data/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    res.json({ id: id, updated: updatedData });
});
