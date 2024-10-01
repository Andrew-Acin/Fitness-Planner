import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem('token');
    // Redirect to home or login page
    navigate('/'); // Use navigate to redirect
  };

  return (
    <Stack>
      <Link to="/">
        <img 
          src={Logo} 
          alt="logo" 
          style={{ width: '48px', height: '48px' }} 
        />
      </Link>

      <Stack>
        <Link 
          to="/" 
        >
          Home
        </Link> 

        <a 
          href="#exercises">
          Workouts
        </a>

        <Link to="/calendar">
          Calendar
        </Link>

        {/* Logout Button */}
        <button 
          onClick={handleLogout} 
        >
          Logout
        </button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
