import React, { useState } from 'react'

import Navbar from '../components/Navbar'
import Watch from '../components/Watch';
import { useLocation } from 'react-router-dom'

function Watchpage() {
  const location = useLocation();  
  const {movie} = location.state
  // const [video, setVideo] = useState()

  return (
    <div className='m-0 p-0 w-screen overflow-hidden'>
      <Navbar page="watch" />
      <div className='flex justify-between h-[90vh]'>
        <Watch movie={movie} />
      </div>
    </div>
  )
}

export default Watchpage