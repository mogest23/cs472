const express = require("express");

const additionController = require('../controllers/addition_controller');

const router = express.Router();

router.get('/:num1/:num2', additionController.withParam);
router.get('/', additionController.withQuery);

// Handle POST requests with either query params or body params
router.post('/', (req, res, next) => {
    if (req.query.num1 !== undefined && req.query.num2 !== undefined) {
        additionController.withQuery(req, res, next);
    } else {
        additionController.withBody(req, res, next);
    }
});

module.exports = router;