const ErrorResponse = require('../utilitis/errorRespons');
const Bootcamp = require('../models/Bootcamp');

// @desc Get All bootcamps
// @route GET/api/v1/bootcapms
// @access Public

exports.getBootcamps = async(req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({
            success: true,
            data: bootcamps
        });
    } catch (e) {
        // res.status(400).json({
        //     success: false
        // });
        next(e);
    }
};

// @desc Get Single bootcamps
// @route GET/api/v1/bootcapms/:id
// @access Public

exports.getBootcamp = async(req, res, next) => {

    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        if (!bootcamp) {
            return next(new ErrorResponse(`BootCamp Not found with id of ${req.params.id}`, 400));
        }
        res.status(200).json({
            success: true,
            data: bootcamp
        });
    } catch (e) {
        // res.status(400).json({
        //     success: false
        // });
        next(e);
    }
};

// @desc Create bootcamps
// @route POST/api/v1/bootcapms
// @access Private

exports.createBootcamp = async(req, res, next) => {

    try {
        const bootcamp = await Bootcamp.create(req.body);

        res.status(200).json({
            success: true,
            data: bootcamp
        });
    } catch (e) {
        // res.status(400).json({
        //     success: false,
        // })
        next(e);
    }
};

// @desc Update bootcamps
// @route PUT/api/v1/bootcapms
// @access Private

exports.UpdateBootcamp = async(req, res, next) => {

    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!bootcamp) {
            return next(new ErrorResponse(`BootCamp Not found with id of ${req.params.id}`, 400));
        }
        res.status(200).json({
            success: true,
            data: bootcamp
        })
    } catch (e) {
        // res.status(400).json({
        //     success: false
        // });
        next(e);
    }
};

// @desc Delete bootcamps
// @route DELETE/api/v1/bootcapms
// @access Private

exports.DeleteBootcamp = async(req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
        if (!bootcamp) {
            return next(new ErrorResponse(`BootCamp Not found with id of ${req.params.id}`, 400));
        }
        res.status(200).json({
            success: true,
            msg: "Data Delete Success"
        })
    } catch (e) {
        // res.status(400).json({
        //     success: false
        // });
        next(e);
    }
};