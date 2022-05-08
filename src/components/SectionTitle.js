import React from 'react'

function SectionTitle({title}) {
  return (
    <div className='h-20 w-full bg-white items-center py-5 flex flex-col justify-center'>
        <p className='text-2xl font-bold px-5 rounded-r-lg'>{title}</p>
        <div className='w-24 h-1 bg-cyan-500 mt-1'></div>
    </div>
  )
}

export default SectionTitle