import React from 'react'

const NavbarItems = () => {
    return (
        <div className='w-full h-[500px] mt-9 p-4'>
            <div className='w-[70%] m-auto py-5 rounded-full text-white border border-gray-800'>
                <div className="flex items-center justify-center gap-[80px] px-5">
                    <div className='border-r border-gray-800 w-[100px]'>Home </div>
                    <div className='border-r border-gray-800 w-[100px]'>About Me</div>
                    <div className='border-r border-gray-800 w-[100px]'>Work</div>
                    <div className='border-r border-gray-800 w-[100px]'>Services</div>
                    <div className=''>Webflow Expert</div>
                </div>
            </div>
            
        </div>


    )
}

export default NavbarItems