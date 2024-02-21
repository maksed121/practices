import React from 'react'

const Textarea = ({placeholder,label,type,onChange}) => {
    return (
        <div className='text-white '>
            <label htmlFor="" className='block'>{label}</label>
            <textarea   type={type} className='bg-[#686465] px-4 py-3 rounded-lg outline-none w-full' placeholder={placeholder} onChange={onChange}></textarea>
        </div>

    )
}

export default Textarea