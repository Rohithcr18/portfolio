const express = require('express');
const { contactForm } = require('../controllers/controller');

const router = express.Router();

router.post('/contact', contactForm);

module.exports = router;
