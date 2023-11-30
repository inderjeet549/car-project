const express = require('express');
const connectDB = require('./config/db');
const Book = require('./models/Books');


const app = express();

connectDB();

app.use(express.json());

app.use('/api/book',Bookroutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });