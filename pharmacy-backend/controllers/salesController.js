const pool = require('../db');

// Get all sales
const getAllSales = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM sales');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Add a new sale
const addSale = async (req, res) => {
  const { medicine_id, customer_id, quantity, total_price } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO sales (medicine_id, customer_id, quantity, total_price) VALUES ($1, $2, $3, $4) RETURNING *',
      [medicine_id, customer_id, quantity, total_price]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

module.exports = { getAllSales, addSale };