const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {

    res.status(200).json({ success: true, msg: 'This is Bootcapms' });
});
router.post('/', (req, res) => {

    res.status(200).json({ success: true, msg: 'Create Bootcapms' });
});

router.put('/:id', (req, res) => {

    res.status(200).json({ success: true, msg: `Update Bootcamps ${req.params.id}` });
});
router.delete('/:id', (req, res) => {

    res.status(200).json({ success: true, msg: `Delete Bootcamps ${req.params.id}` });
});

module.exports = router;