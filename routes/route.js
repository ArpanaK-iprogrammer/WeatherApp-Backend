const express = require('express');

const middlewareValidation = require('../middleware/validate');
const weatherRoutes = require('../controllers/weather');

const router = express.Router();

router.post("/weather",middlewareValidation,weatherRoutes)


module.exports = router;