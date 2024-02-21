import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';

const Left = ({ refresh, setRefresh }) => {
    const [imageData, setImageData] = useState([]);


    const getData = async () => {

        const request = await fetch("http://localhost/PHP%20CODE/calculator%20api/read.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "table": "secret",
                "select": ["id", "title", "image"],
            })
        });

        const response = await request.json();

        setImageData(response.data);
        setRefresh(!refresh)


    };

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const deleteRequest = await fetch("http://localhost/PHP%20CODE/calculator%20api/delete.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(
                        {
                            "table": "secret",
                            "conditions": [
                                {
                                    "on": "id",
                                    "type": "=",
                                    "value": id
                                }
                            ]
                        }
                    ),
                });
                const response = await deleteRequest.json();
             
            }
        });
    };
    useEffect(() => {
        getData();

    }, [refresh]);



    return (
        <div className="gap-3 w-[900px] p-3 grid grid-cols-4">
            {imageData.map((item, index) => (
                <div key={index} className="w-[200px] bg-zinc-600 rounded-2xl p-6">
                    <Image
                        width={200}
                        height={200}
                        src={"http://localhost/PHP%20CODE/calculator%20api/" + item.image}
                        alt="image"
                        className="rounded-xl mb-3 w-[150px] h-[150px]"
                    />
                    <div className="flex justify-between items-center">
                        <h1 className="text-white font-bold">{item.title}</h1>
                        <div onClick={() => {
                            handleDelete(item.id);
                        }}>
                            <MdDelete size={30} color="red" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Left;
