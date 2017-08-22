const express = require('express');
const router = express.Router();

router.get('/another', (req, res, next) => {
  res.render('index', { title: 'Second-Express' });
});

module.exports = router;
