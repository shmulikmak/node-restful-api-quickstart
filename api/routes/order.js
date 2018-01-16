const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'get works'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'post works'
    });
});

router.get(':orderId', (req, res, next) => {
    const id = req.params.productId;

    if (id === '123') {
        res.status(200).json({
            message: '123:)'
        });
    } else {
        res.status(200).json({
            message: 'its else'
        });
    }
});

router.patch(':orderId', (req, res, next) => {
    res.status(200).json({
        message: 'its patch'
    });
});

router.delete(':orderId', (req, res, next) => {
    res.status(200).json({
        message: 'its delete'
    });
});


module.exports = router;