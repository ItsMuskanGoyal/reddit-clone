import React from 'react'
import Image from 'next/image'
function Post({props}) {
    const data = JSON.parse(props);
    console.log(data)

  return (
    <div className='border m-auto w-3/4 h-fit rounded-md flex justify-evenly items-center flex-col gap-4 p-4'>
        <h1 className='text-2xl font-bold border-b border-white'>{data.title}</h1>
        <p className='w-3/4'>{data.desc}</p>
        <p className='text-sm underline'>{new Date(data.timeStamp).toLocaleString()}</p>
        {data && <Image src={"data:image/jpg;base64," + data.imageUrl} height={100} width={10} className=' w-full' alt="user" />}

    </div>
  )
}

export default Post
