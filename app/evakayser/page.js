"use client"
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NavbarItems from './components/NavbarItems'

const Page = () => {
  return (
    <div className=' bg-black'>
        <Navbar/>
        <Hero/>
        <NavbarItems/>
    </div>
  )
}

export default Page