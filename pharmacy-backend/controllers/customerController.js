const pool = require('../db');

// Get all customers
const getAllCustomers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM customers');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// Add a new customer
const addCustomer = async (req, res) => {
  const { name, phone, email } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO customers (name, phone, email) VALUES ($1, $2, $3) RETURNING *',
      [name, phone, email]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

module.exports = { getAllCustomers, addCustomer };