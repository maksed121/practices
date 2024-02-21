"use client"
import React, { useEffect, useState } from 'react'
import Right from './components/Right'
import Left from './components/Left'

const Page = () => {

    const [allData, setAllData] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getData = async () => {
            const request = await fetch("https://api.scordemy.in/web-api/public/api/website/states-with-categories");
            const response = await request.json();
            setAllData(response.states);
            setCategories(response.states[0].categories)
        };
        getData();
    }, [])

    return (
        <div className='w-screen h-screen bg-white p-3'>
            <div className='bg-[#e5dff7] p-4 rounded-sm'>
                <h1 className='font-bold text-xl'>Explore Course Categories</h1>
                <p>Choose the category for your preparation</p>
                <div className='flex gap-2 mt-3'>
                    <Left allData={allData} categories = { categories } setCategories = { setCategories } />
                    <Right categories={ categories }/>
                </div>
            </div>
        </div>
    )
}

export default Page