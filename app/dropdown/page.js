"use client"
import React, { useState } from 'react'

const DropDown = () => {
    
    const [selectValue, setSelectValue] = useState(null)

    console.log(selectValue);

    const dataSet = [
        {
            title: 'Frontend',
            techs: ['HTML', 'CSS', 'JavaScript']
        },
        {
            title: 'Backend',
            techs: ['PHP', 'NodeJS', 'Python']
        },
        {
            title: 'MERN Stack',
            techs: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS']
        },
        {
            title: 'LAMP Stack',
            techs: ['Linux', 'Apache', 'MySQL', 'PHP']
        }
    ]
    return (
        <div className='w-screen bg-black h-screen p-3'>
            <div>
                <select onChange={(e)=>setSelectValue(dataSet[e.target.value].techs)} name="" id="" className='bg-zinc-500 text-white w-[200px] h-[30px] rounded-sm'>
                    {dataSet.map((item, index) => (
                        <option key={index} value={index}>{item.title}</option>
                    ))}
                </select>
            </div>
            {selectValue && (
                <div className='mt-4'>
                    <select className='bg-zinc-500 text-white w-[200px] h-[30px] rounded-sm'>
                        {selectValue.map((item, index) => (
                            <option>{item}</option>
                        ))}
                    </select>
                </div>
            )}
        </div>

    )
}

export default DropDown