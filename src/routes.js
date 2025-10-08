const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Welcome to Backend CI/CD Demo' });
});

router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API working fine!' });
});

module.exports = router;
