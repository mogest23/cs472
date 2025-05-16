const express = require("express");

const subtractionController = require('../controllers/subtraction_controller');

const router = express.Router();

router.get('/:num1/:num2', subtractionController.withParam);
router.get('/', subtractionController.withQuery);
router.post('/', subtractionController.withBody);

module.exports = router; 