const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

const app = express();
const port = 5000;

// Connect to database
mongoose.connect('mongodb://localhost:27017/fitness-planner', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
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
