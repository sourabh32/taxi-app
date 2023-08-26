
import React from 'react'
import AutoComplete from './AutoComplete'

const Booking = () => {

    
  return (
    <div className='p-5'>
        <h2 className='text-[20px] font-semibold'>Booking</h2>
        <div className="p-5 rounded-md border-[1px] " style={{height:"70vh"}}>
        <AutoComplete />
        </div>
    </div>
  )
}

export default Booking