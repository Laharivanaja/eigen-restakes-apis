const express = require('express');
const connectDB = require('./config/index');

const routes = require('./src/routes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to database
connectDB();

// Mount routes
app.use('/', routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

