import React, { useState } from 'react';
import './ExcerciseStyles.css'; 

const SearchExercises = () => {
  const [query, setQuery] = useState(''); // State to track the search input
  const [exercises, setExercises] = useState([]); // State to store fetched exercises
  const [selectedExercises, setSelectedExercises] = useState([]); // State to track selected exercises
  const [error, setError] = useState(null); // State to track errors

  const apiKey = 'xFltSpGOWQcYFSylxD6cyg==mPcZ6sJpHZPkTQMr';

  // Function to handle the search input change
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Function to fetch exercises from API based on the muscle query
  const searchExercises = async () => {
    if (query.trim()) {
      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${query}`, {
          method: 'GET',
          headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        setExercises(result);
        setError(null); // Clear any previous errors
      } catch (error) {
        setError(error.message);
        setExercises([]); // Clear exercises on error
      }
    }
  };

  // Function to handle exercise selection
  const handleSelectExercise = (exercise) => {
    setSelectedExercises((prevSelected) => {
      if (prevSelected.includes(exercise)) {
        return prevSelected.filter((ex) => ex !== exercise);
      } else {
        return [...prevSelected, exercise];
      }
    });
  };

  // Function to save selected exercises (e.g., to local storage or send to a backend)
  const saveSelectedExercises = () => {
    // Placeholder for saving logic (localStorage, API, etc.)
    console.log('Selected exercises saved:', selectedExercises);
  };

  return (
    <div className="exercise-container">
      <h1>Search Exercises by Muscle</h1>
      <input
        type="text"
        placeholder="Enter muscle group (e.g., biceps, triceps)..."
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
      <button onClick={searchExercises} className="search-button">Search</button>

      {/* Display error message if there's any */}
      {error && <p className="error-message">Error: {error}</p>}

      <div className="exercise-list">
        {exercises.length > 0 ? (
          exercises.map((exercise, index) => (
            <div key={index} className={`exercise-card ${selectedExercises.includes(exercise) ? 'selected' : ''}`}>
              <h3>{exercise.name}</h3>
              <p><strong>Type:</strong> {exercise.type}</p>
              <p><strong>Equipment:</strong> {exercise.equipment}</p>
              <p><strong>Muscle:</strong> {exercise.muscle}</p>
              <button 
                onClick={() => handleSelectExercise(exercise)} 
                className="select-button"
              >
                {selectedExercises.includes(exercise) ? 'Deselect' : 'Select'}
              </button>
            </div>
          ))
        ) : (
          !error && <p>No exercises found. Try searching for a muscle group.</p>
        )}
      </div>

      {selectedExercises.length > 0 && (
        <div className="selected-exercises">
          <h2>Selected Exercises</h2>
          <ul>
            {selectedExercises.map((exercise, index) => (
              <li key={index}>{exercise.name}</li>
            ))}
          </ul>
          <button onClick={saveSelectedExercises} className="save-button">Save Selected Exercises</button>
        </div>
      )}
    </div>
  );
};

export default SearchExercises;


