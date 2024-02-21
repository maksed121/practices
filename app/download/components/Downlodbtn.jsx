import React, { useState } from 'react'
import { FaDownload } from "react-icons/fa";

const Downlodbtn = () => {

  const [isDownloading, setIsDownloading] = useState(false);

  return (
    <>
      {!isDownloading ? (
        <div onClick={() => setIsDownloading(true)} className='bg-blue-400 w-[300px] py-4 rounded-full flex justify-center items-center gap-2 text-white font-bold text-xl cursor-pointer hover:bg-zinc-400 transition-all duration-150'>
          <FaDownload />
          Download
        </div>
      ) : (
        <div className='bg-blue-400 w-[300px] h-[30px] rounded-full flex items-center overflow-hidden'>
          <div className=' bg-gradient-to-r from-violet-500 to-fuchsia-500 w-[15%] h-[20px] rounded-full '></div>
        </div>
      )}

    </>
  )
}

export default Downlodbtn;