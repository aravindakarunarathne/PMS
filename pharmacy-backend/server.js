// require("dotenv").config();  // ✅ Load .env first

// const express = require("express");
// const cors = require("cors");
// const pool = require("./db"); // ✅ Import database connection

// // Initialize Express
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Test Route
// app.get("/", (req, res) => {
//   res.send("Server is running!");
// });

// // Test Database Connection
// app.get("/test-db", async (req, res) => {
//   try {
//     const result = await pool.query("SELECT NOW()");
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Database error");
//   }
// });

// // Import Routes
// const medicineRoutes = require("./routes/medicineRoutes");
// const customerRoutes = require("./routes/customerRoutes");
// const salesRoutes = require("./routes/salesRoutes");

// // Use Routes
// app.use("/api/medicines", medicineRoutes);
// app.use("/api/customers", customerRoutes);
// app.use("/api/sales", salesRoutes);

// // Start Server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });


// ///////////////

// // const pool = require('./db');

// // app.get('/test-db', async (req, res) => {
// //   try {
// //     const result = await pool.query('SELECT NOW()');
// //     res.json(result.rows);
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).send('Database error');
// //   }
// // });

/////////////Improvement code

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const medicineRoutes = require('./routes/medicineRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/medicines', medicineRoutes);

// Error Middleware
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

