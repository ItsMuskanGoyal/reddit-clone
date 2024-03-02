import { set } from 'firebase/database';
import React, { useState } from 'react'

function ModalAdd() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [image, setImage] = useState('')

  function imageUploaded() {
    let base64String = "";
    let file = document.querySelector('input[type=file]')['files'][0];
    let reader = new FileReader();
    console.log("next");

    reader.onload = function () {
        base64String = reader.result.replace("data:", "")
            .replace(/^.+,/, "");

        console.log(base64String);
        setImage(base64String)
    }
    reader.readAsDataURL(file);
}


  function addPost(){
    var time = new Date().getTime();
    
    const post = {
      title: title,
      desc: desc,
      imageUrl: image,
      timeStamp: new Date().getTime()

    }
    console.log(post)
    // append post to localstorage
    localStorage.setItem("post"+time, JSON.stringify(post))


  }
  return (
    <div className='w-[25vw] h-[70vh] absolute border -mt-10' id='postModal'>
      <div className='w-full h-full py-2 px-4 border box-border  flex justify-evenly items-center flex-col'>
        <input type='file' className=' h-[40%] border w-full' onChange={imageUploaded} />
        <input type="text" name="title" id="titlePost" className=' p-2 border w-full' placeholder='Title' onChange={(e)=>setTitle(e.target.value)} />
        <textarea className='border w-full h-[25%] p-2' name="Desc" id="Desc" cols="30" rows="10" placeholder='Description' onChange={(e)=>setDesc(e.target.value)}></textarea>
        <button className='border bg-black text-white w-full h-[2.2rem] rounded-md' onClick={addPost}>POST</button>
      </div>
    </div>
  )
}

export default ModalAdd
