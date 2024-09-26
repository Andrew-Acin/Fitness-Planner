const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables from .env

// Connect to database using environment variables
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
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

// API Ninjas fecth requests frpm here to frontend SearchExercise.js
app.get('/api/exercise', async(req, res) => {
  const apiKey = process.env.API_NINJAS_KEY;
  const apiUrl = 'https://api.api-ninjas.com/v1/exercises?muscle' + muscle;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: 'X-Api-Key: apiKey'
      
    });

    const data = await response.json()
    res.json(data)
  } catch (error) {
    console.error('Error fetching exercise:', error)
    res.status(500).json({ error: 'Unable to fetch data'})
  }
})

// Apply CORS middleware before routes
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

// API Routes for login and signup
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
