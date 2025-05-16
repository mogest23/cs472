const express = require("express");

const multiplicationController = require('../controllers/multiplication_controller');

const router = express.Router();

router.get('/:num1/:num2', multiplicationController.withParam);
router.get('/', multiplicationController.withQuery);

// Handle POST requests with either query params or body params
router.post('/', (req, res, next) => {
    if (req.query.num1 !== undefined && req.query.num2 !== undefined) {
        multiplicationController.withQuery(req, res, next);
    } else {
        multiplicationController.withBody(req, res, next);
    }
});

module.exports = router; 