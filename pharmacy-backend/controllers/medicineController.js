// const pool = require('../db');

// // Get all medicines
// const getAllMedicines = async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM medicines');
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server error');
//   }
// };

// // Add a new medicine
// const addMedicine = async (req, res) => {
//   const { name, quantity, price, expiry_date } = req.body;
//   try {
//     const result = await pool.query(
//       'INSERT INTO medicines (name, quantity, price, expiry_date) VALUES ($1, $2, $3, $4) RETURNING *',
//       [name, quantity, price, expiry_date]
//     );
//     res.json(result.rows[0]);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server error');
//   }
// };

// module.exports = { getAllMedicines, addMedicine };


//////////////////////////////////////Improvement Code

const MedicineService = require('../services/medicineService');

const addMedicine = async (req, res, next) => {
  try {
    const newMedicine = await MedicineService.addMedicine(req.body);
    res.status(201).json(newMedicine);
  } catch (error) {
    next(error);
  }
};

const getAllMedicines = async (req, res, next) => {
  try {
    const medicines = await MedicineService.getAllMedicines();
    res.json(medicines);
  } catch (error) {
    next(error);
  }
};

const updateMedicine = async (req, res, next) => {
  try {
    const updatedMedicine = await MedicineService.updateMedicine(req.params.id, req.body);
    if (!updatedMedicine) return res.status(404).json({ error: 'Medicine not found' });
    res.json(updatedMedicine);
  } catch (error) {
    next(error);
  }
};

const deleteMedicine = async (req, res, next) => {
  try {
    const deletedMedicine = await MedicineService.deleteMedicine(req.params.id);
    if (!deletedMedicine) return res.status(404).json({ error: 'Medicine not found' });
    res.json({ message: 'Medicine deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { addMedicine, getAllMedicines, updateMedicine, deleteMedicine };
