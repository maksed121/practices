import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#e0d5d5] w-full h-[500px] flex items-center '>
      <div className="left px-[100px] w-[50%] space-y-5 ">
        <h1 className='font-bold text-4xl '>CREATING WEBSITES THAT <br /> MAKE YOU STOP & STARE</h1>
        <p>Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. Maecen aliquam, risus at semper. Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum.</p>
        <button className='bg-[#76c7ed] px-6 py-2 rounded-[3px] text-white hover:bg-[#8fcfec]'>GET STARTED</button>
      </div>
      <div className="right flex-1">
        <Image width={1000} height={1000} src={"/hero-img.png"} className='w-[545px] object-contain' />
      </div>

    </div>
  )
}

export default Hero