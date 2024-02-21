import Image from 'next/image'
import React from 'react'
import { HiMiniFingerPrint } from "react-icons/hi2";
import { GrGift } from "react-icons/gr";
import { FaReact } from "react-icons/fa";




const About = () => {
  return (
    <div className='w-full flex '>

      <div className=" left px-[100px] flex-1">
        <Image width={1000} height={1000} src={"/about.jpg"} className='w-[100%] h-[600px] object-contain' />
      </div>
      <div className="right px-[100px]  w-[48%] pt-[100px] ">
        <h3 className='text-xl font-bold mb-3 '>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
        <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>
        <div className="flex gap-5 items-center pt-5 p-5">
          <div className='w-[110px] h-[50px] hover:bg-[#49b5e7] border border-blue-400 rounded-full flex items-center justify-center'>
            <HiMiniFingerPrint size={30} color='blue'/>

          </div>
          <div className="contain">
            <h1 className='font-bold'>Lorem Ipsum</h1>
            <p className='text-sm leading-1'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>
        </div>
        <div className="flex gap-5 items-center pt-5 p-5">
          <div className='w-[110px] h-[50px] hover:bg-[#49b5e7] border border-blue-400 rounded-full flex items-center justify-center'>
            <GrGift  size={30} color='blue'/>

          </div>
          <div className="contain">
            <h1 className='font-bold'>Nemo Enim</h1>
            <p className='text-sm leading-1'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>
        </div>
        <div className="flex gap-5 items-center pt-5 p-5">
          <div className='w-[110px] h-[50px] hover:bg-[#49b5e7] border border-blue-400 rounded-full flex items-center justify-center'>
            <FaReact  size={30} color='blue'/>

          </div>
          <div className="contain">
            <h1 className='font-bold'>Dine Pad</h1>
            <p className='text-sm leading-1'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About