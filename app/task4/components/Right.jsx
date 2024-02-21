import React from 'react'

const Right = ({ sidebarItems }) => {
    return (
        <div className='flex-1  p-4'>
            {sidebarItems.map((item, index) => (
                <div className='text-white' key={index}>
                    <h1 className='mt-4'>{item.title}</h1>
                    <div className='grid grid-cols-3 gap-2 '>
                        {item?.items?.map((itemData, indexData) => (
                            <div className='bg-zinc-900 text-white w-[300px] border border-zinc-700 hover:border-white transition-all duration-400 rounded-lg mt-3 p-3' key={indexData}>
                                <div className="flex  gap-3">
                                    <div className='w-[50px] h-[50px] bg-[#beb8b8] rounded-full'>

                                    </div>
                                    <div>
                                        <h1>{itemData.title}</h1>
                                        <button className='bg-blue-400 rounded-full px-3'>New</button>
                                    </div>
                                </div>
                                <p className='mb-2'>{itemData.subtitle}</p>
                            </div>
                        ))}

                    </div>
                </div>
            ))}
        </div>
    )
}

export default Right