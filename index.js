const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

const sensors = [
    {
        id: 1,
        data:[]
    },
    {
        id: 2,
        data:[]
    },
    {
        id: 3,
        data:[]
    },
    {
        id: 4,
        data:[]
    }
]

app.get('/sensors', (req, res) => {
    res.status(200).send({
        sensors: sensors
    });
});

app.post('/sensor', (req, res) => {
    const newSensor = req.body;

    if (!newSensor || !newSensor.id) {
        return res.status(400).send({
            error: 'A sensor object with an ID is required in the body.'
        });
    }

    const idExists = sensors.some(sensor => sensor.id === newSensor.id);

    if (idExists) {
        return res.status(400).send({
            error: `Sensor ID ${newSensor.id} already exists.`
        });
    }

    sensors.push(newSensor);

    res.status(201).send({
        message: `Sensor ID ${newSensor.id} added successfully.`,
        data: newSensor
    });
})

app.listen(
    PORT,
    () => console.log(`🚀 Server running on http://localhost:${PORT}`)
);