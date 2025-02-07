const pool = require('../config/db');

class MedicineModel {
  static async create({ name, batch, expiry_date, price, quantity }) {
    const result = await pool.query(
      `INSERT INTO medicines (name, batch, expiry_date, price, quantity) 
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [name, batch, expiry_date, price, quantity]
    );
    return result.rows[0];
  }

  static async findAll() {
    const result = await pool.query(`SELECT * FROM medicines`);
    return result.rows;
  }

  static async findById(id) {
    const result = await pool.query(`SELECT * FROM medicines WHERE id = $1`, [id]);
    return result.rows[0];
  }

  static async update(id, { name, batch, expiry_date, price, quantity }) {
    const result = await pool.query(
      `UPDATE medicines SET name = $1, batch = $2, expiry_date = $3, price = $4, 
       quantity = $5, updated_at = CURRENT_TIMESTAMP WHERE id = $6 RETURNING *`,
      [name, batch, expiry_date, price, quantity, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await pool.query(`DELETE FROM medicines WHERE id = $1 RETURNING *`, [id]);
    return result.rows[0];
  }
}

module.exports = MedicineModel;
