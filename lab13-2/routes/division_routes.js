const express = require("express");

const divisionController = require('../controllers/division_controller');

const router = express.Router();

router.get('/:num1/:num2', divisionController.withParam);
router.get('/', divisionController.withQuery);

// Handle POST requests with either query params or body params
router.post('/', (req, res, next) => {
    if (req.query.num1 !== undefined && req.query.num2 !== undefined) {
        divisionController.withQuery(req, res, next);
    } else {
        divisionController.withBody(req, res, next);
    }
});

module.exports = router; 