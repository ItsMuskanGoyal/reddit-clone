'use client'
import Image from "next/image";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import ModalAdd from "./components/ModalAdd";
import RightNav from "./components/RightNav";
import { getDatabase, ref, onValue, get, child } from "firebase/database";
import app from "./firebase";
import { useEffect, useState } from "react";
import Post from "./components/Post";
import { FaNode } from "react-icons/fa";


export default function Home() {
  const [postData, setPostData] = useState({post:  {}})
  const [toggle, setToggle] = useState(false)
  console.log(Object.keys(localStorage))

  
  return (
    <div className=" h-screen w-full flex items-center flex-col">
       
       
       
       <div className='flex items-center justify-between w-[100vw] h-[8vh] border-b border-white mb-2 '>
        <div className=' h-[8vh] border-b flex'>

            <h1 className='text-3xl font-bold text-center flex items-center justify-center pl-5'>Reddit</h1>
        </div>

            <input type="text" className="h-[70%] px-4 w-[50%] box-border  border border-white md:box-content rounded-lg" placeholder="Search"  />
            
        <div >
            <button className="border-2 p-2 rounded-lg border-white-500 box-content outline-white" onClick={()=>setToggle(!toggle)}>Create Post</button>
        </div>
    </div>




      <div className="h-[92vh] w-full flex justify-center items-center ">
        <SideNav/>
        <main className="h-full w-3/5 pt-8 grid  gap-5 overflow-y-auto " >
        {Object.keys(localStorage).map((d)=>
        {if(d.includes('post')){
          return <Post props={localStorage.getItem(d)} />
        }}
        )}
        </main>
        <RightNav/>
        {toggle && <ModalAdd/>}
      </div>
    </div>
  );
}
