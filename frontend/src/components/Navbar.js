import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack 
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      px={2} // Padding on the X axis for spacing
    >
      <Link to="/">
        <img 
          src={Logo} 
          alt="logo" 
          style={{
            width: '48px', 
            height: '48px', 
            margin: '0 20px'
          }} 
        />
      </Link>
{/* comment for commit */}
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
      </Stack>
    </Stack>
  );
};

export default Navbar;
