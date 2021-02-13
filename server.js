const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
// var morgan = require('morgan')

//Routes Conncet 
const bootcamps = require('./routes/bootcamps');

//load env vars
dotenv.config({ path: './config/config.env' });

const app = express();


app.use(logger);

// Mounte Routes
app.use('/api/v1/bootcamps', bootcamps);



// app.get('/', (req, res) => {

//     //res.send('Hello Node')
//     //res.json({ name: 'Band', model: '1000' });
//     //res.sendStatus(400);
//     //res.status(200).json({ success: false });
//     res.status(200).json({ success: true, data: { id: 1 } });
// })



const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`));