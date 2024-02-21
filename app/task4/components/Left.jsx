import Link from 'next/link'
import React from 'react'

const Left = ({ sidebarItems }) => {
    return (
        <div className='w-[20%]  '>
            <div className='p-4 hidden md:block'>
                <div >
                    <input type="text" className='py-2 w-full rounded-lg px-2' placeholder='Search...' />
                </div>
                <ul className='mt-3 rounded-md p-3 space-y-3'>
                    {sidebarItems.map((item, index) => (
                        <li className='list-none text-xl text-zinc-600 hover:text-white font-bold' key={index}>
                            <Link href={item.link}>{item.title}</Link>
                        </li>
                    ))}
                </ul>

            </div>
            <div className='p-4 md:hidden'>
                <div>
                    <input type="text" className='py-2 w-full rounded-lg px-2' placeholder='Search...' />
                </div>
                <select className='mt-3 rounded-lg w-full py-3 px-4'>
                    {sidebarItems.map((item, index) => (
                        <option value="" key={index}>{item.title}</option>
                    ))}
                </select>

            </div>

        </div>
    )
}

export default Left