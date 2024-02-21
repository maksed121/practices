"use client"
import React from 'react'
import Leftside from './components/Leftside'
import Main from './components/Main'

const Spotify = () => {
  return (
    <div className=' bg-black flex cursor-pointer'>
        <Leftside/>
        <Main/>
    </div>
  )
}

export default Spotify