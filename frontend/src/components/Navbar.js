import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack 
     direction="row"
     justifyContent="space-around"
     gap= '40px' 
    >
        <Link to="/">
            <img src={Logo} alt="logo" style={{
                width: '48px', height: '48px', margin: '0 20px'
            }} />
        </Link>
        <Stack
         direction="row"
         gap= "40px"
         fontSize= '24px'
         alignItems= "flex-end"
        >

            <Link to="/" style= {{
                textDecoration: 'none', color: '#FFD700', borderBottom: '3px solid #FFD700'
                }}>Home</Link> 

            <a href= "#excercises" style= {{
                textDecoration: 'none', color: '#FFD700' 
            }}>Excercises</a>

            <Link to="/calendar">
            Calendar
            </Link>

        </Stack>
    </Stack>
  )
}

export default Navbar