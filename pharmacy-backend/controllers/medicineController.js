const pool = require('../db');

// Get all medicines
const getAllMedicines = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM medicines');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Add a new medicine
const addMedicine = async (req, res) => {
  const { name, quantity, price, expiry_date } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO medicines (name, quantity, price, expiry_date) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, quantity, price, expiry_date]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

module.exports = { getAllMedicines, addMedicine };