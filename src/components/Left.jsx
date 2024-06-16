import React from 'react'
const Left = ({state,setstate}) => {
    const handlestate = (e) =>{
        e.preventDefault()
        setstate({...state,[e.target.name]:e.target.value})
    }
    const handleimage = (e) =>{
         e.preventDefault()
         setstate({...state,image:URL.createObjectURL(e.target.files[0])})
        }
  return (
    <div className='relative bg-zinc-700 max-md:h-max md:h-screen w-4/12 max-md:w-full md:overflow-y-scroll px-8 py-32'>
         <form className='flex flex-col gap-7' action="">
            <div className='h-max w-full flex flex-col gap-4'>
            <label className='text-white bg-slate-500 p-4 rounded-xl w-max'  >Name:</label>
            <input onChange={(e)=>handlestate(e)} className='p-4 hehe rounded-xl outline-none'  type="text" id="fname" name="name" value={state.name} />
            </div>
            <div className='h-max w-full flex flex-col gap-4'>
            <label className='text-white bg-slate-500 p-4 rounded-xl w-max' >Headline</label>
            <input onChange={(e)=>handlestate(e)} className='p-4 hehe rounded-xl outline-none' type="text" id="lna" name="headline" value={state.headline}/>
            </div>
            <div className='h-max w-full flex flex-col gap-4'>
            <label  className='text-white bg-slate-500 p-4 rounded-xl w-max' >Message</label>
            <textarea className='p-4 hehe rounded-xl outline-none' onChange={(e)=>handlestate(e)} rows={8} id="lnam" name="message" value={state.message}/>
            </div>
            <div className='h-max w-full flex flex-col gap-4'>
            <div className='text-white bg-slate-500 p-4 rounded-xl w-max'>Profile Picture</div> 
            <label className='w-full h-32 p-5 hehe rounded-xl bg-white' htmlFor="images">Drop file here</label> 
            <input onChange={(e)=>handleimage(e)} type="file" className='hidden' name="images" accept='.png,.jpg' id="images" /> 
            </div>
            <div className='h-max w-full flex flex-col gap-4'>
                <label className='text-white bg-slate-500 p-4 rounded-xl w-max' >Background Color</label>
            <input onChange={(e)=>handlestate(e)} className='w-full h-32 p-5 rounded-xl' type="color" name="backgroundcolor" value={state.backgroundcolor} />
                </div>
            <div className='h-max w-full flex flex-col gap-4'>
                <label className='text-white bg-slate-500 p-4 rounded-xl w-max' >Background space</label>
            <input type="range" onChange={(e)=>handlestate(e)} min={0} max={100} name="backgroundspace" className="slideme" value={state.backgroundspace} />
                </div>
            <div className='h-max w-full flex flex-col gap-4'>
                <label className='text-white bg-slate-500 p-4 rounded-xl w-max' >Background Pattern</label>
            <select onChange={(e)=>handlestate(e)}  className='hehe' name="mode" id="pattern" value={state.mode}>
                <option value="dark">Dark mode</option>
                <option value="light">Light mode</option>
            </select>
                </div>
            <div className='h-max w-full flex flex-col gap-4'>
                <label className='text-white bg-slate-500 p-4 rounded-xl w-max' >Linkdin Icon</label>
            <select onChange={(e)=>handlestate(e)} className='hehe' name="icon" id="verify" value={state.icon}>
                <option value="yes">yes</option>
                <option value="no">no</option>
            </select>
                </div>
         </form>
    </div>
  )
}

export default Left