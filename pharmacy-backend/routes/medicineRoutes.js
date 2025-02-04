const express = require('express');
const { getAllMedicines, addMedicine } = require('../controllers/medicineController');

const router = express.Router();

router.get('/', getAllMedicines);
router.post('/', addMedicine);

module.exports = router;