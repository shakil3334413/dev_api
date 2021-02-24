const ErrorResponse = require('../utilitis/errorRespons');
const errorHandler = (err, req, res, next) => {

    let error = {...err }
    error.message = err.message;
    console.error(err.stack.red)
        //Mongoes Bad Object

    if (err.name == 'CastError') {
        const message = `BootCamp Not found with id of ${err.value}`;
        error = new ErrorResponse(message, 404);
    }
    if (err.code == 11000) {
        const message = 'Duplicated value enter';
        error = new ErrorResponse(message, 400);
    }
    if (err.name == 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    });
};

module.exports = errorHandler;