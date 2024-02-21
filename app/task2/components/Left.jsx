import React from 'react'
import { FaMapMarkedAlt } from "react-icons/fa";

const Left = ({ allData, categories, setCategories }) => {
    const handleSubmit = (item) => {
        setCategories(item.categories);
    }
    return (
        <div className='w-[20%]  bg-zinc-400 p-3 rounded-lg'>
            {allData.map((item, index) => (
                <div onClick={() => { handleSubmit(item) }} key={index} className='cursor-pointer'>
                    <div className='p-3 gap-2 bg-[#f5f7fc] rounded-lg flex items-center mb-2 text-black'>
                        <FaMapMarkedAlt />
                        <li className='list-none'>{item.name}</li>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Left