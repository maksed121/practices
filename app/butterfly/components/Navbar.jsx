import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full p-6 bg-white fixed'>
      <nav className='flex items-center justify-between px-[90px]'>
        <div>
          <Image width={1000} height={1000} src={"/logo.png"} className='w-[106px] object-contain' />
        </div>
        <div className='flex items-center justify-between gap-4'>
          <Link href={"#home"}>HOME</Link>
          <Link href={"#about"}>ABOUT</Link>
          <Link href={"#Services"}>SERVICES</Link>     
          <Link href={"#"}>PORTFOLIO</Link>
          <Link href={"#"}>TEAM</Link>
          <Link href={"#"}>DROPDOWN</Link>
          <Link href={"#"}>CONTACT</Link>
        </div>
      </nav>

    </div>
  )
}

export default Navbar