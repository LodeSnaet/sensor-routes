const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/sensors', (req, res) => {
    res.status(200).send({
        sensors: [ 1, 2, 3]
    });
});

app.post('/sensors/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        return res.status(418).send({
            error: 'Logo is required'
        });
    }

    res.send({
        tshirt: `👕 with your logo: ${logo}, with ID of ${id}`
    })
});

app.listen(
    PORT,
    () => console.log(`🚀 Server running on http://localhost:${PORT}`)
);