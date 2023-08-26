import Image from 'next/image'
import React from 'react'
import { UserButton } from "@clerk/nextjs";
const NavBar = () => {
  return (
    <div className='flex justify-between p-3 px-10 border-b-[1px]'>
        <div className='flex gap-10 items-center'>
        <Image src="/next.svg" alt="logo" width={120} height={60} />
        <div className='hidden md:flex gap-6'>
        
        <h2 className='hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer'>Home</h2>
        <h2 className='hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer'>History</h2>
        <h2 className='hover:bg-gray-100 p-2 rounded-md transition-all cursor-pointer'>Help</h2>
        </div>
        
        </div>
        <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default NavBar