"use client"
import React from 'react'

const Right = ({state,reffed}) => { 
  let variable = state.backgroundspace
  let backgroundcolor = state.backgroundcolor
    return (
    <div className={`relative w-8/12 max-md:w-full max-md:h-max md:h-screen px-10 gap-5 py-32 md:overflow-y-scroll `}>
        <div className='flex flex-col items-center justify-center h-max w-full gap-10'>
        <div className='relative hehe h-max text-xl rounded-xl bg-white w-4/5 p-5'>
        Welcome to Fake Posts! - A tool to quickly create stunning Fake Linkedin Posts for Social Media, Presentation, Memes and much more, made by <a className='underline text-blue-600' href="https://www.linkedin.com/in/akshay-kumar-bb0bbb184?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">Akshay tyagi</a></div>
        <div ref={reffed} id='canva' className={`relative max-w-full max-[600px]:scale-90 max-[500px]:scale-75 max-[400px]:scale-50 w-max rounded-xl`} style={{padding: `${variable*.5}px`, background: `${backgroundcolor}`}} >
            <div className={`relative h-max flex gap-4 max-[600px]:scale-90 max-[500px]:scale-75 max-[400px]:scale-50 flex-col w-[440px] ${state.mode === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"} w-80 p-5 rounded-xl`}>
                 <div className='flex gap-3 items-center w-full'>
                 <img className='h-14 w-14 object-cover bg-center rounded-full' src={`${state.image}`} alt="" />
                 <div className='flex flex-col'>
                    <div className='flex gap-[1px] items-center'>
                 <div className='text-lg font-bold'>{state.name}</div>
                 {state.icon == "yes"? <img className='h-5 w-5' src="/lindin.png" alt="" />:<></>}
                    </div>
                 <div className='text-sm font-normal opacity-60'>{state.headline}</div>
                 </div>
                 </div>
                 <div className='relative h-max w-full min-h-5'>
                    <div className='relative text-base w-full break-words h-max font-normal'>{state.message}</div>
                 </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Right