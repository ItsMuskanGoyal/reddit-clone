import React from 'react'
import { MdLabelImportant } from "react-icons/md";
import { LuClover } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";




function RightNav() {
  return (
    <div className='text-right align-middle border-l h-full w-1/5 border-white text-lg pl-5 pt-8'>
            <li className='p-2 flex items-center font-semibold'> <MdLabelImportant /> Followed</li>
                <li className='pl-6 gap-2 flex items-center'> <CgProfile /> Aman</li>
                <li className='pl-6 gap-2 flex items-center'> <CgProfile /> Ayon</li>
            <li className='p-2 flex items-center font-semibold'> <LuClover /> Suggested</li>

            <li className='pl-6 gap-2 flex items-center'> <CgProfile /> Prashi</li>
            <li className='pl-6 gap-2 flex items-center'> <CgProfile /> Manan</li>
    </div>
  )
}

export default RightNav
