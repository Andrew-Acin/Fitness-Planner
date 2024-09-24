const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const { Sequelize } = require('sequelize');

// Connect to database
const sequelize = new Sequelize('fitness_planner', 'user_id', 'first_name', 'last_name' ,'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

const app = express();
const port = 5000;

// Test Sequelize connection
sequelize.authenticate()
  .then(() => {
    console.log('Sequelize connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Apply CORS middleware before routes
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

// API Routes for login and signup
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
