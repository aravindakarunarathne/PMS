const express = require('express');
const { getAllSales, addSale } = require('../controllers/salesController');

const router = express.Router();

router.get('/', getAllSales);
router.post('/', addSale);

module.exports = router;