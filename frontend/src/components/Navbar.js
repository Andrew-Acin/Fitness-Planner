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
    <Stack 
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      px={2}
    >
      <Link to="/">
        <img 
          src={Logo} 
          alt="logo" 
          style={{ width: '48px', height: '48px', margin: '0 20px' }} 
        />
      </Link>

      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link 
          to="/" 
          style={{
            textDecoration: 'none', 
            color: '#FFD700', 
            borderBottom: '3px solid #FFD700'
          }}
        >
          Home
        </Link> 

        <a 
          href="#exercises" 
          style={{
            textDecoration: 'none', 
            color: '#FFD700'
          }}
        >
          Workouts
        </a>

        <Link 
          to="/calendar" 
          style={{
            textDecoration: 'none', 
            color: '#FFD700'
          }}
        >
          Calendar
        </Link>

        {/* Logout Button */}
        <button 
          onClick={handleLogout} 
          style={{
            background: 'none',
            border: 'none',
            color: '#FFD700',
            cursor: 'pointer',
            fontSize: '24px'
          }}
        >
          Logout
        </button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
