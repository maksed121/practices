import React from 'react'

const Input = ({placeholder,label,type,onChange}) => {
  return (
    <div className='text-white '>
        <label htmlFor="" className='block'>{label}</label>
        <input type={type} className='bg-[#686465] px-4 py-3 rounded-lg outline-none w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl' placeholder={placeholder}  onChange={onChange}/>

    </div>
  )
}

export default Input