import React from 'react'
import Image from 'next/image'
import { FaNode } from "react-icons/fa";

function Header() {
  return (
    
    <div className='flex justify-between w-[100vw] '>
        <div className=' h-[8vh] border-b flex'>
            <Image src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.redditinc.com%2Fbrand&psig=AOvVaw2s-AIICbJs4Pv267pCNvKL&ust=1709461793087000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLCm-Miv1YQDFQAAAAAdAAAAABAE" className=' h-4/5 ' height={50} width={50} alt="logo" />
            <h1 className='text-3xl font-bold text-center pt-2'>Reddit</h1>
        </div>
        <div className="box-border h-10% w-80% p-4 border-4 md:box-content rounded-lg" >
            <input type="text" placeholder="Search"  />
            
        </div>
        <div >
            <button className="border-2 rounded-lg border-white-500 box-content outline-white">Create Post</button>

        </div>
    </div>
    
  )
}

export default Header
