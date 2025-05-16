const express = require("express");

const divisionController = require('../controllers/division_controller');

const router = express.Router();

router.get('/:num1/:num2', divisionController.withParam);
router.get('/', divisionController.withQuery);
router.post('/', divisionController.withBody);

module.exports = router; 