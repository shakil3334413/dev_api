const express = require('express');
const dotenv = require('dotenv');
// const logger = require('./middleware/logger');
const morgan = require('morgan');
const connectDB = require('./config/db');
var colors = require('colors');
//Routes Conncet 
const bootcamps = require('./routes/bootcamps');

//load env vars
dotenv.config({ path: './config/config.env' });

// connect Database
connectDB();

const app = express();

//Dev Morgan middleware 

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
// app.use(logger);

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

const server = app.listen(
    PORT,
    console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

// Handle Unhandle promise Rejection

process.on('unhandleRejection', (err, promise) => {
    console.log(`Error:${err.message}`.red);
    //close server and exit process
    server.close(() => process.exit(1));

});