import React, { useState } from 'react';

const SearchExercises = () => {
  const [query, setQuery] = useState(''); // State to track the search input
  const [exercises, setExercises] = useState([]); // State to store fetched exercises
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
            'Content-Type': 'application/json'
          }
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

  return (
    <div>
      <h1>Search Exercises by Muscle</h1>
      <input
        type="text"
        placeholder="Enter muscle group (e.g., biceps, triceps)..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={searchExercises}>Search</button>

      {/* Display error message if there's any */}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <div>
        {exercises.length > 0 ? (
          <ul>
            {exercises.map((exercise, index) => (
              <li key={index}>
                <strong>{exercise.name}</strong> - {exercise.type} | {exercise.equipment}
              </li>
            ))}
          </ul>
        ) : (
          !error && <p>No exercises found. Try searching for a muscle group.</p>
        )}
      </div>
    </div>
  );
};

export default SearchExercises;

