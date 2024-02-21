"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const Page = () => {
    const [image, setImage] = useState(null);

    const handleImage = (e) => {
        const selectedFile = e.target.files[0];

        const fileSizeKB = selectedFile.size / 1000;

        if (fileSizeKB <= 300) {
            setImage(selectedFile);
        } else {
            alert('Image size must be less than or equal to 300 KB');
            e.target.value = null;
        }

    }

    return (
        <div className='bg-black px-3 w-screen h-screen flex items-center justify-center text-white'>
            <div className="bg-zinc-700 w-[400px]  rounded-xl p-5">
                <div className="text-3xl text-center mb-4 font-bold ">Image Validation</div>
                <label htmlFor="" className='text-md mb-2 block'>Select an image of size of maximum 300kb</label>
                <input
                    type="file"
                    className='w-full py-4 px-3 text-white bg-zinc-600 rounded-xl'
                    accept='image/*'
                    onChange={handleImage}
                />
                <div className="flex justify-between">
                    <label htmlFor="" className='text-lg my-2'>Preview</label>
                    {image && (
                        <label htmlFor="" className='text-lg my-2' onClick={(e) => setImage(null)}>Remove Image</label>
                    )}
                </div>
                <div className='border p-3 rounded-xl aspect-video flex items-center justify-center border-color-white'>
                    {image ? (
                        <Image width={300} height={300} src={URL.createObjectURL(image)} alt="Preview" className='object-contain w-full h-full' />
                    ) : (
                        <div>No Image Selected</div>
                    )}
                </div>

                {/* <div className="h-[30px]w-full bg-red-400 rounded-lg p-2 mt-2">
                    <p>Image size must be less than or equal to 300 KB. Please select another image</p>
                </div> */}
                <button className='px-4 py-2 bg-zinc-500 mt-3 float-right rounded-xl font-bold text-white'>Upload Image</button>
            </div>
        </div>
    );
}

export default Page;
