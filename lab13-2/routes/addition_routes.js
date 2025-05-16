const express = require("express");

const additionController = require('../controllers/addition_controller');

const router = express.Router();

router.get('/:num1/:num2', additionController.withParam);
router.get('/', additionController.withQuery);
router.post('/', additionController.withQuery);
router.post('/', additionController.withBody);

module.exports = router;