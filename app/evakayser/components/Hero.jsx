"use client"
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";


const Hero = () => {
  const [isSmiled, setIsSmiled] = useState(null);


  return (
    <div className="hero w-full text-white flex">
      <div className="left w-[50%] px-11">
        <div
          className="w-full overflow-hidden"
          style={{ boxSizing: "border-box" }}
        >
            {isSmiled == null &&(
                 <img
                 src="https://assets-global.website-files.com/65aa727d2cba3ce6160ccfb1/65abf5d18eb857e69f038a69_evekayser-ok-p-500.jpeg"
                 alt=""
                 className="object-cover"
               />
            )}
             {isSmiled == false &&(
                 <img
                 src="https://assets-global.website-files.com/65aa727d2cba3ce6160ccfb1/65abf5d1a6bef4b4571f5f26_evekayser-sad-p-500.jpeg"
                 alt=""
                 className="object-cover"
               />
            )}
            {isSmiled == true &&(
                 <img
                 src="https://assets-global.website-files.com/65aa727d2cba3ce6160ccfb1/65abf5d12f963c198a9563ba_evekayser-happy.jpeg"
                 alt=""
                 className="object-cover h-[500px] w-[500px]"
               />
            )} 
            
        </div>
      </div>
      <div className="right flex-1 flex flex-col justify-center">
        <p className="text-[#1FB5B3] font-[500] text-sm mb-3">
          WEB DEVELOPER & SOFTWARE ENGINEER
        </p>
        <h1 className="text-6xl">
          Agency-level web <br />
          development <br /> services at <br /> freelancer rates
        </h1>
        <p className="py-6 mb-7 text-xl text-[#C9CDCD]">
          My mission is to design and develop a website <br />
          that you and your audience love.
        </p>
        <button
          className="px-8 mr-auto py-5 rounded-full bg-[#048273b2] flex items-center gap-4 hover:bg-[#048273] shadow-2xl relative transition-all duration-300 ease-in-out"
          onMouseEnter={() => {
            setIsSmiled(true);
          }}
          onMouseLeave={() => {
            setIsSmiled(false);
          }}
        >
          <h1>Happy to chat on WhatApp</h1>
          <div className="p-3 bg-[#19FEB4] rounded-full text-black absolute right-3">
            <FaWhatsapp size={25} />
          </div>
          <div className="p-3 rounded-full text-black"></div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
