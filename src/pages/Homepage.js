import Navbar from '../components/Navbar'
import React from 'react'
import Videos from '../components/Videos'

function Homepage() {
  return (
    <div className='m-0 p-0'>
        <Navbar page={'home'} />
        <Videos />
    </div>
  )
}

export default Homepage