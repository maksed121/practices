import Image from 'next/image'
import React from 'react'

const ResumePDF = ({ formData }) => {



    return (
        <div>
            <div className='flex w-[100%]'>
                <div className='left w-[25%] bg-slate-700 ps-12 '>
                    <div className='w-[380px] h-[380px] bg-slate-700 flex items-center justify-start'>
                        <div className='w-[260px] h-[260px] bg-blue-400 rounded-full flex justify-center items-center'>
                            <Image src={'/maksed.png'} height={150} width={150} alt='photo' className='w-[260px] h-[260px] rounded-full' />
                        </div>
                    </div>
                    <div>
                        <h1 className=' font-bold text-3xl  text-white'>Contact</h1>
                        <div className='border-b mt-2'></div>
                        <div className='mt-5'>
                            <p className='font-bold text-lg text-white'>Name</p>
                            <p className=' text-white'>{formData.name}</p>
                        </div>
                        <div className='mt-5'>
                            <p className='font-bold text-lg text-white'>C/O Name</p>
                            <p className=' text-white'>{formData.co}</p>
                        </div>
                        <div className='mt-5'>
                            <p className='font-bold text-lg text-white'>Email</p>
                            <p className=' text-white'>{formData.email}</p>
                        </div>
                        <div className='mt-5'>
                            <p className='font-bold text-lg text-white'>Phone</p>
                            <p className=' text-white'>{formData.phone}</p>
                        </div>
                        <div className='mt-5'>
                            <p className='font-bold text-lg text-white'>Date of Birth</p>
                            <p className=' text-white'>{formData.dob}</p>
                        </div>
                        <div className='mt-5'>
                            <p className='font-bold text-lg text-white'>Address</p>
                            <p className='text-white text-[12px]'> {formData.address}</p>
                        </div>
                    </div>

                    <div className='mt-10 text-white font-bold' >
                        <h1 className='text-3xl '>Expertise</h1>
                        <div className='border-b mt-2'></div>
                        {formData.skills.split(',').map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}

                    </div>
                    <div className='mt-10 text-white font-bold'>
                        <h1 className='text-3xl'>Language</h1>
                        <div className='border-b mt-2'></div>
                        {formData.languages.split(',').map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}

                    </div>

                </div>
                <div className='right w-[75%]  bg-gray-100'>
                    <div className='px-10 py-[80px] h-[380px]'>
                        <h1 className='font-bold text-8xl'>Maksed
                            <span className='text-8xl font-normal'>Ali</span>
                        </h1>
                        <p className='my-2'>{formData.about}</p>
                    </div>
                    <div className='px-10'>
                        <h1 className='font-bold text-3xl text-black'>Experience</h1>
                        <div className='border-b border-1 border-black mt-2'></div>
                    </div>
                    {[1, 2, 3].map((item, index) => (
                        <div key={index} className='border-left mt-5 px-10 py-6 border-black flex gap-8'>
                            <div className='border-left border-2 border-black'></div>
                            <div>
                                <p>Start and End Date</p>
                                <p className='font-bold mb-1'>{formData[`company${item}StartDate`]} to {formData[`company${item}EndDate`]}</p>
                                <p>Company Name: {formData[`company${item}Name`]}</p>
                                <p className='font-bold my-1'>Job position here</p>
                                <p className='font-bold my-1'>{formData[`company${item}Designation`]}</p>
                            </div>
                        </div>
                    ))}

                    <div className='mx-10'>
                        <div className='mt-10 text-black'>
                            <h1 className='text-3xl font-bold'>Education Information</h1>
                            <div className='border-b border-black mt-1'></div>
                            <div className='flex justify-between mt-6'>
                                {[
                                    { level: 'HSLC', formDataKey: 'hslc' },
                                    { level: 'HS', formDataKey: 'hs' },
                                    { level: 'GRADUATION', formDataKey: 'grad' }
                                ].map((item, index) => (
                                    <div key={index} className='mt-5'>
                                        <h1 className='font-bold'>{item.level}</h1>
                                        <p>Institute Name: {formData[`${item.formDataKey}Institute`]}</p>
                                        {item.level !== 'GRADUATION' ? (
                                            <p>Percentage: {formData[`${item.formDataKey}Percentage`]}%</p>
                                        ) : (
                                            <p>CGPA: {formData[`${item.formDataKey}CGPA`]}</p>
                                        )}
                                        <p>Year: {formData[`${item.formDataKey}Year`]}</p>
                                        <p>Board/University Name: {formData[`${item.formDataKey}Board`]} </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default ResumePDF
