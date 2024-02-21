"use client"
import React, { useState } from 'react'
import FormLeft from './components/FormLeft'
import RightQoutes from './components/RightQoutes'

const Quotes = () => {
    const [quotesGenerate, setQuotesGenerate] = useState({
        quote: '',
         author: '',
         color:''
        });
  return (
    <div className='w-screen h-screen flex'>
        <FormLeft quotesGenerate={quotesGenerate} setQuotesGenerate={setQuotesGenerate}/>
        <RightQoutes quotesGenerate={quotesGenerate} setQuotesGenerate={setQuotesGenerate}/>
    </div>
  )
}

export default Quotes