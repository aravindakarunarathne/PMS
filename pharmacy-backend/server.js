// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 6000;

// app.get("/", (req, res) => {
//   res.send("Server is running!");
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// // /////////////////////////////////

// // // const pool = require('./db');

// // // app.get('/test-db', async (req, res) => {
// // //   try {
// // //     const result = await pool.query('SELECT NOW()');
// // //     res.json(result.rows);
// // //   } catch (err) {
// // //     console.error(err);
// // //     res.status(500).send('Database error');
// // //   }
// // // });

// // ////////////////////
// // require('dotenv').config();  // ✅ Correct way

// // const express = require('express');
// // const app = express();


// /////////////Link the routes to your Express app in server.js:

// // const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const medicineRoutes = require('./routes/medicineRoutes');
// const customerRoutes = require('./routes/customerRoutes');
// const salesRoutes = require('./routes/salesRoutes');

// dotenv.config();
// // const app = express();
// // const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/medicines', medicineRoutes);
// app.use('/api/customers', customerRoutes);
// app.use('/api/sales', salesRoutes);

// // Test endpoint
// app.get('/test-db', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT NOW()');
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Database error');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

//////////////////////////////

require("dotenv").config();  // ✅ Load .env first

const express = require("express");
const cors = require("cors");
const pool = require("./db"); // ✅ Import database connection

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Test Database Connection
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
});

// Import Routes
const medicineRoutes = require("./routes/medicineRoutes");
const customerRoutes = require("./routes/customerRoutes");
const salesRoutes = require("./routes/salesRoutes");

// Use Routes
app.use("/api/medicines", medicineRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/sales", salesRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


///////////////

// const pool = require('./db');

// app.get('/test-db', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT NOW()');
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Database error');
//   }
// });
