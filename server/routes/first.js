const express = require('express');

const router = express.Router();
const firstService = require('../service/firstService');

router.get('/', firstService.serviceMethod);
router.get('/roper', firstService.serviceMethod);

module.exports = router;
