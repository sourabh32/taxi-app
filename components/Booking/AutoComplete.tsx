"use client"
import React, { useEffect, useState } from 'react'

const AutoComplete = () => {
const [source,setSource] = useState<any>()
const [addressList,setAddressList] = useState<any>([])

useEffect(()=>{

  const delayDebounceEffect = setTimeout(()=>{
    getAddress()
  },500)
  return ()=> clearTimeout(delayDebounceEffect)
  
},[source])
  const getAddress = async () =>{
    const result  = await fetch(`/api/search-address?q=${source}`,{
      headers:{
        "Content-Type":"application/json",
      }
    })
    const data = await result.json()
    console.log(data)
    setAddressList(data)
  }
  return (
    <div className='mt-5'>
        <div>
        <label className='text-gray-400' >Where From?</label>
        <input className='bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-500' type="text"
        value={source}
        onChange={(e)=>setSource(e.target.value)}
         />
         <div>
         {addressList?.suggestions?
            <div className='shadow-md p-1 rounded-md
            absolute w-full bg-white z-20'>
            {addressList?.suggestions.map((item:any,index:number)=>(
                <h2 key={index} className='p-3 hover:bg-gray-100
                cursor-pointer'
                
                >{item.full_address}</h2>
            ))}
           </div>:null}
         </div>
        </div>
        <div className='mt-3'>
        <label className='text-gray-400' >Where To?</label>
        <input className='bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-500' type="text" />
        {addressList?.suggestions?
            <div className='shadow-md p-1 rounded-md
            absolute w-full bg-white z-20'>
            {addressList?.suggestions.map((item:any,index:number)=>(
                <h2 key={index} className='p-3 hover:bg-gray-100
                cursor-pointer'
                
                >{item.name},{item.place_formatted}</h2>
            ))}
           </div>:null}
        </div>

    </div>
  )
}

export default AutoComplete