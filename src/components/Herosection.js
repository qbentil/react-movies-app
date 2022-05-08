import { Link } from 'react-router-dom'
import React from 'react'

function Herosection() {
  return (
    <div className='h-[90vh] w-full bg-cover bg-center bg-no-repeat bg-[url("https://assets1.ignimgs.com/thumbs/userUploaded/2022/4/15/gamesfixkojimablogroll-1650056512101_large.png")]'>
        <div className='h-full w-full bg-black-overlay flex item-center justify-center'>
            <div className='h-full flex items-center justify-center flex-col'>
                <p className='text-5xl text-white font-bold uppercase font-mono mb-3'>Welcome to Top-G Movies Arena</p>
                <Link to='/' className='mt-5 py-3 px-5 bg-cyan-500 font-bold border-2 border-transparent  w-56 text-center text-white rounded-full text-lg hover:bg-transparent hover:text-cyan-500 hover:border-cyan-500 '>Start Here!</Link>
            </div>
        </div>
    </div>
  )
}

export default Herosection