const validateMedicine = (req, res, next) => {
    const { name, batch, expiry_date, price, quantity } = req.body;
    if (!name || !batch || !expiry_date || !price || !quantity) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    next();
  };
  
  module.exports = { validateMedicine };
  