"use client"
import Left from "@/components/Left";
import Right from "@/components/Right";
import { useState,useRef, useEffect } from "react";
import html2canvas from "html2canvas";

export default function Home() { 
  const captureRef = useRef(null);
  const downloadLinkRef = useRef(null);
  const handleCapture = async () => {
    if (captureRef.current) {
      const canvas = await html2canvas(captureRef.current);
      const imgData = canvas.toDataURL('image/png');
      if (downloadLinkRef.current) {
        downloadLinkRef.current.href = imgData;
        downloadLinkRef.current.download = 'capture.png';
        downloadLinkRef.current.click();
      }
    }
  };
  const attributes = {
    name: "Mark zuckerburg",
    headline: 'Founder @Meta',
    message: '',
    image: '/mark.png',
    backgroundcolor: '#008000',
    backgroundspace: 0,
    mode: "dark",
    icon: 'yes'
  }
  const [state,setstate] = useState(attributes)
  return (
    <main className="relative flex w-full h-full min-w-80">
      <div className='w-full z-20 bg-slate-200 h-28 fixed flex p-5 justify-between items-center'>
       <div className='h-full max-sm:scale-75 max-[400px]:scale-50 flex items-center gap-3 w-max'>
       <img className='h-full rounded-full' src="/icon.png" alt="" />
       <div className='text-xl font-semibold'>Fake Post</div>
       </div>
       <button id="anchor" className='p-5 max-sm:scale-75 max-[400px]:scale-50 border-2 hover:bg-green-500 hover:text-white transition-all border-green-500 rounded-xl' onClick={()=>handleCapture()}>Download image🔥</button>
       <a ref={downloadLinkRef} style={{display: "none"}}></a>
    </div>
      <div className="relative z-10 max-md:flex-col-reverse flex w-full max-md:overflow-y-scroll h-full min-w-80">
        <Left state={state} setstate={setstate} />
        <Right state={state} reffed={captureRef} setstate={setstate} />
      </div>
    </main>
  );
}
