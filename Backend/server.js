const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables from .env
const { Workout, Exercise, WorkoutOnExercise } = require('./models');

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

// Apply CORS middleware before routes
app.use(cors({
    origin: 'http://localhost:3000', 
    methods: 'GET,POST,PUT,DELETE', 
}));

// Body Parser Middleware
app.use(bodyParser.json()); 

// API Ninjas fetch requests from here to frontend SearchExercise.js
app.get('/api/exercise', async (req, res) => {
  const muscle = req.query.muscle; // Extract muscle from the query string
  const apiKey = process.env.API_NINJAS_KEY;
  const apiUrl = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`;

  if (!muscle) {
    return res.status(400).json({ error: 'Muscle parameter is required' });
  }

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey
      }
    });

    if (!response.ok) {
      throw new Error(`Error fetching exercises: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching exercise:', error);
    res.status(500).json({ error: 'Unable to fetch data' });
  }
});

// API Routes for workout creation
app.post('/api/workouts', async (req, res) => {
  const { name, type, exercises } = req.body;

  try {
    // Create a new workout
    const newWorkout = await Workout.create({
      name,
      type,
      created_by: 1 // Replace with actual user ID in a real app
    });

    // Ensure that exercises array is not empty
    if (exercises && exercises.length > 0) {
      for (const ex of exercises) {
        let exercise = await Exercise.findOne({
          where: {
            name: ex.name,
            type: ex.type,
            muscle: ex.muscle,
            equipment: ex.equipment,
            difficulty: ex.difficulty,
          },
        });

        if (!exercise) {
          exercise = await Exercise.create({
            name: ex.name,      
            type: ex.type,
            muscle: ex.muscle,
            equipment: ex.equipment,
            difficulty: ex.difficulty,
          });
        }

        // Link the exercise to the workout
        await WorkoutOnExercise.create({
          workout_id: newWorkout.id,
          exercise_id: exercise.id,
        });
      }
    }

    res.status(201).json({ message: 'Workout and exercises saved successfully' });
  } catch (error) {
    console.error('Error saving workout and exercises:', error);
    res.status(500).json({ error: 'Failed to save workout and exercises' });
  }
});

// API Routes for login and signup
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
