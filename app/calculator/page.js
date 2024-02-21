"use client"
import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import Button from './components/Button';
import Swal from 'sweetalert2';
import Secret from './components/Secret';
import { clsx } from 'clsx';

const Calculator = () => {
    const [input, setInput] = useState("");
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        const secretKey = localStorage.getItem('secret_key');

        if (!secretKey) {
            Swal.fire({
                title: "Set a secret key",
                text: "Your secret key is not set yet",
                icon: "warning",
                confirmButtonText: "Set Key"
            }).then(function (res) {
                if (res.isConfirmed) {
                    Swal.fire({
                        title: "Set Your Key",
                        input: "password",
                        showCancelButton: false,
                        preConfirm: async (password) => {
                            
                            localStorage.setItem('secret_key', password);
                            Swal.fire({
                                title: "Key Set Successfully",
                                icon: "success",
                                text: "Your secret key has been set successfully!",
                                confirmButtonText: "OK"
                            });
                        }
                    });
                }
            });
        }
    }, []);

    return (
        <div className={clsx("bg-[#2C2F38] ", validated ? " h-full flex items-start justify-between" : "w-screen h-screen flex items-center justify-center")}>
            {validated ? (
                <Secret />
            ) : (

                <div className="bg-[#2C2F38] w-[26%] h-[90%] border p-5 rounded-lg ">
                    <Header />
                    <div className='h-[80px] w-full mt-3'>
                        <input type="text" className='flex items-end w-full p-4 font-bold text-white text-right outline-none bg-[#2C2F38]' value={input} />

                    </div>
                    <div className='mt-8 relative  select-none'>
                        <div className='grid grid-cols-4 gap-4 absolute ml-4 '>
                            <Button text={'%'} input={input} setInput={setInput} />
                            <Button text={'C'} input={input} setInput={setInput} />
                            <Button text={'AC'} input={input} setInput={setInput} />
                            <Button text={'Back'} input={input} setInput={setInput} />
                            <Button text={'7'} input={input} setInput={setInput} />
                            <Button text={'8'} input={input} setInput={setInput} />
                            <Button text={'9'} input={input} setInput={setInput} />
                            <Button text={'/'} input={input} setInput={setInput} />
                            <Button text={'4'} input={input} setInput={setInput} />
                            <Button text={'5'} input={input} setInput={setInput} />
                            <Button text={'6'} input={input} setInput={setInput} />
                            <Button text={'X'} input={input} setInput={setInput} />
                            <Button text={'1'} input={input} setInput={setInput} />
                            <Button text={'2'} input={input} setInput={setInput} />
                            <Button text={'3'} input={input} setInput={setInput} />
                            <Button text={'-'} input={input} setInput={setInput} />
                            <Button text={'0'} input={input} setInput={setInput} />
                            <Button text={'.'} input={input} setInput={setInput} />
                            <Button text={'='} input={input} setInput={setInput} bgColor={'blue'} validated={validated} setValidated={setValidated} />
                            <Button text={'+'} input={input} setInput={setInput} />

                        </div>
                    </div>
                </div>

            )}

        </div>
    )
}

export default Calculator;