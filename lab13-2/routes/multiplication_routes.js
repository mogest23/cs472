const express = require("express");

const multiplicationController = require('../controllers/multiplication_controller');

const router = express.Router();

router.get('/:num1/:num2', multiplicationController.withParam);
router.get('/', multiplicationController.withQuery);
router.post('/', multiplicationController.withBody);

module.exports = router; 