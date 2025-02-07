// const express = require('express');
// const { getAllMedicines, addMedicine } = require('../controllers/medicineController');

// const router = express.Router();

// router.get('/', getAllMedicines);
// router.post('/', addMedicine);

module.exports = router;

//////////////Improvement Code

const express = require('express');
const { addMedicine, getAllMedicines, updateMedicine, deleteMedicine } = require('../controllers/medicineController');
const { validateMedicine } = require('../middlewares/validationMiddleware');

const router = express.Router();

router.post('/', validateMedicine, addMedicine);
router.get('/', getAllMedicines);
router.put('/:id', validateMedicine, updateMedicine);
router.delete('/:id', deleteMedicine);

module.exports = router;
