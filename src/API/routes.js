const express = require('express');
const { resumenController } = require('./controller');

const router = express.Router();

router.post('/resumir', resumenController);

module.exports = router;
