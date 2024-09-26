import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
// import './Home.css';  // Import the CSS file

function Home() {
  return ( 
    <div>
      <Navbar/>
      <Banner/>
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