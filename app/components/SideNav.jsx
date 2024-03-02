import React from 'react'
import { CiHome } from "react-icons/ci";
import { GrResources } from "react-icons/gr";
import { IoIosNotifications } from "react-icons/io";
import { MdCategory, MdExplore } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { CgDetailsMore } from "react-icons/cg";




function SideNav() {
  return (

    <div className = 'h-full w-1/5 border-r border-white pl-8 pt-8'>
        <ul className=' grid text-lg'>
            <li className='flex p-2  '> <CiHome /> Home</li>
            <li className='flex p-2'> <MdExplore />Explore</li>
            <li className='flex p-2' > <TiMessages /> Messages</li>
            <li className='flex p-2' > <IoIosNotifications /> Notifications</li>
            <li className='flex p-2' > <MdCategory /> Topics</li>
            <li className='flex p-2' > <GrResources /> Resources</li>

            <li className='flex p-2'> <CgProfile /> Profile</li>
            <li className='flex p-2'> <CgDetailsMore /> More</li>

            </ul>


        </div>

    
  )
}

export default SideNav
