import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between px-11 py-5">
      <img
        src="https://assets-global.website-files.com/65aa727d2cba3ce6160ccfb1/65abfed8237f9e7f85127167_evekayser-gradient.svg"
        alt="logo"
      />
      <div className="right-nav text-white flex items-center gap-6 text-sm">
        <Link href="#">Digital Marketing</Link>
        <div className="px-8 py-4 rounded-full border border-[#ffffff3d] border-1 flex items-center text-sm gap-3">
          <div className="w-[10px] h-[10px] rounded-full bg-green-500"></div>
          <marquee behavior="" direction="rtl">
            <p className="text-sm">Available for work</p>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Navbar;