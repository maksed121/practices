import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

const Right = ({ refresh, setRefresh }) => {

    const [title, setTitle] = useState("")
    const [file, setFile] = useState("")

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("file", file);
        formData.append("destination", "Files");
        formData.append("validation", ["jpg", "png", "pdf", "webp"]);

        const request = await fetch("http://localhost/PHP%20CODE/calculator%20api/file-upload.php", {
            method: "POST",
            body: formData,
        });
        const response = await request.json();


        const request2 = await fetch("http://localhost/PHP%20CODE/calculator%20api/create.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    "table": "secret",
                    "data": [
                        {
                            title: title,
                            image: response.file

                        }
                    ]
                }
            )
        })
        const response2 = await request2.json();
        console.log(response2);
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your data has been submitted successfully.',
        });

        setRefresh(!refresh)

    }




    return (
        <div className="text-white h-screen w-[465px] p-9">
            <div className="bg-zinc-700 h-[350px] w-[400px] rounded-xl p-5">
                <div className="text-2xl text-center mb-4 ">Upload your image & video</div>
                <label htmlFor="" className='text-md mb-2 block'>Title</label>
                <input
                    type="text"
                    className='font-bold w-full py-4 px-3 text-white bg-zinc-500 rounded-xl mb-2'
                    placeholder='Enter your title'
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="" className='text-md mb-2 block'>Image</label>
                <input
                    type="file"
                    className='w-full py-4 px-3 text-white bg-zinc-600 rounded-xl'
                    accept='image/*'
                    onChange={(e) => setFile(e.target.files[0])}

                />
                <button className='px-4 py-2 bg-zinc-500 mt-5 w-full rounded-xl font-bold text-white'
                    onClick={handleSubmit}
                >Upload Image</button>
            </div>
        </div>
    )
}

export default Right