const express = require('express');
const axios = require('axios');
const weatherController = require('../controllers/weatherController');

const router = express.Router();

router.get('/:city', weatherController.getWeather);

module.exports = router;
