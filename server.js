const express = require('express');
const dotenv = require('dotenv');

//load env vars

dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/', (req, res) => {

    //res.send('Hello Node')
    //res.json({ name: 'Band', model: '1000' });
    //res.sendStatus(400);
    //res.status(200).json({ success: false });
    res.status(200).json({ success: true, data: { id: 1 } });
})

app.get('/api/v1/bootcamps', (req, res) => {

    res.status(200).json({ success: true, msg: 'This is Bootcapms' });
});
app.post('/api/v1/bootcamps', (req, res) => {

    res.status(200).json({ success: true, msg: 'Create Bootcapms' });
});

app.put('/api/v1/bootcamps/:id', (req, res) => {

    res.status(200).json({ success: true, msg: `Update Bootcamps ${req.params.id}` });
});
app.delete('/api/v1/bootcamps/:id', (req, res) => {

    res.status(200).json({ success: true, msg: `Delete Bootcamps ${req.params.id}` });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`));