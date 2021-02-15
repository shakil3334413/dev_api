const Bootcamp = require('../models/Bootcamp');

// @desc Get All bootcamps
// @route GET/api/v1/bootcapms
// @access Public

exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'This is Bootcapms' });
}

// @desc Get Single bootcamps
// @route GET/api/v1/bootcapms/:id
// @access Public

exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Single Bootcamps ${req.params.id}` });
}

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
        res.status(400).json({
            success: false,

        })
    }
};

// @desc Update bootcamps
// @route PUT/api/v1/bootcapms
// @access Private

exports.UpdateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update Bootcamps ${req.params.id}` });
}

// @desc Delete bootcamps
// @route DELETE/api/v1/bootcapms
// @access Private

exports.DeleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete Bootcamps ${req.params.id}` });
}