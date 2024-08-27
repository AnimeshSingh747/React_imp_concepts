app.delete('/api/data/:id', (req, res) => {
    const id = req.params.id;
    res.json({ message: `Data with id ${id} deleted.` });
});
