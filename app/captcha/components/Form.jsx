"use client"
import React, { useEffect, useRef, useState } from 'react'
import { RxReload } from "react-icons/rx";
import { toast } from 'react-toastify';



const Form = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState()
    const [captcha, setCaptcha] = useState()
    const [captchaInput, setCaptchaInput] = useState('');
    const [rotation, setRotation] = useState(0);
    const inputRef = useRef(null);


    const createCaptcha = () => {

        const randomText = (Math.random() * 99999).toString(36).substring(7);
        setCaptcha(randomText)
        setCaptchaInput('');
        console.log(randomText)
        setRotation(rotation => rotation + 180);
        inputRef.current.focus();
      
    }

    const handleLogin = () => {
        if (captcha === captchaInput) {
            toast.success("Login Successfully")
        } else {
            toast.error("Invalid Captcha")
        }
    }
    useEffect(() => {
        createCaptcha();

    }, [])


    return (
        <div className='bg-black w-screen h-screen flex items-center justify-center'>
            <div className="bg-zinc-700 w-[400px]  rounded-lg p-5">
                <h1 className='text-white font-bold text-center'>Login Form</h1>
                <div className='text-white mb-2'>
                    <label htmlFor="">Username</label>
                    <input type="text" className='w-full py-3 px-3 rounded-lg bg-zinc-800' placeholder='Enter your username'
                    value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className='text-white mb-2'>
                    <label htmlFor="">Password</label>
                    <input type="password" className='w-full py-3 px-3 rounded-lg bg-zinc-800' placeholder='Enter your password'
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <hr className='mb-2' />
                <div className='text-white mb-2'>
                    <div className="flex items-center justify-between mb-2">
                        <label htmlFor="">Fill the Captcha</label>
                        <button onClick={createCaptcha} style={{ transform: `rotate(${rotation}deg)` }}>
                            <RxReload size={25} />
                        </button>
                    </div>
                    <div className='w-full captcha py-3 px-3 rounded-lg bg-zinc-800 select-none text-center tracking-[25px]'>
                        <span>{captcha}</span>
                    </div>
                    <div className="mt-2">
                        <input type="text" className='w-full py-3 px-3 rounded-lg bg-zinc-800' placeholder='Enter captcha'
                            value={captchaInput}
                            onChange={(e) => setCaptchaInput(e.target.value)}
                            ref={inputRef} 
                        />
                    </div>
                </div>
                <button
                    onClick={handleLogin}
                    className='bg-zinc-900 w-full rounded-lg py-3 px-3 text-white'>Login</button>

            </div>

        </div>
    )
}

export default Form