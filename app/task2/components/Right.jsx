import Image from 'next/image'
import React from 'react'

const Right = ({ categories }) => {
    return (
        <div className='flex-1  p-3'>
            <div className="grid grid-cols-4 gap-2">
                {categories.map((item, index) => (
                    <div className='w-[250px]  bg-[#ceced6] p-3 rounded-lg' key={index}>
                        <Image width={300} height={300} src={"/maksed.png"} alt='images' className='w-[100px] h-[100px] rounded-full' />
                        <h1>{item.name}</h1>
                        <p>Available Courses:{item.course_count}</p>
                        <button className='bg-blue-400 px-4 py-1 rounded-full float-right'>Explore</button>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Right