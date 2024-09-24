import React from 'react';
import { Link } from 'react-router-dom';
// import './Home.css';  // Import the CSS file

function Home() {
  return (
    <div>
      <h1>Welcome to the Fitness Planner App</h1>
      <p>Please choose an option below:</p>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
    </div>
  );
}

export default Home;