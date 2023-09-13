import React from 'react'
import Image from "next/image"
const Loading = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <Image height={200} width={200} src={"/assets/XOsX.gif"}/>
    </div>
  )
}

export default Loading
