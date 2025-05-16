const express = require("express");

const subtractionController = require('../controllers/subtraction_controller');

const router = express.Router();

router.get('/:num1/:num2', subtractionController.withParam);
router.get('/', subtractionController.withQuery);

// Handle POST requests with either query params or body params
router.post('/', (req, res, next) => {
    if (req.query.num1 !== undefined && req.query.num2 !== undefined) {
        subtractionController.withQuery(req, res, next);
    } else {
        subtractionController.withBody(req, res, next);
    }
});

module.exports = router; 