const express = require('express');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/items', itemRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});