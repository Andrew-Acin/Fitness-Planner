import { Button } from '@mui/material'
import React from 'react'

const Banner = () => {
  return (
    <div>
        <h3>
            Fitness Club
        </h3>
        <h2>
            Lift, Sleep <br/> and repeat
        </h2>
        <h3>
            Find new lifts for you!
        </h3>
        <Button variant="contained" color="error" href="#excercises">Explore Excersises</Button>
    </div>
  )
}

export default Banner