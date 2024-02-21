'use client'
import React from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUp } from '@/libe/scema';

const FormComponent = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(signUp),
      });
    
      const onSubmit = async (data) => {
        console.log(data);
        reset()
      };
    return (
        <div className='w-full flex items-center justify-center'>
            <form onSubmit={handleSubmit(onSubmit)} className="w-[30%] pb-5 bg-gray-500 p-4 rounded-lg text-white space-y-2">
                <h1 className='font-bold text-xl text-center'>Form validation</h1>
                <div>
                    <label className='block'>Name</label>
                    <input
                        placeholder='Type your name'
                        {...register("name")}
                        className='block py-2 w-full outline-none rounded-lg mt-1 text-black px-2' />
                    {errors?.name && <p className='text-red-600'>{errors.name.message}</p>}
                </div>
                <div>
                    <label className='block'>Email</label>
                    <input
                        placeholder='Type your Email'
                        {...register("email")}
                        className='block py-2 w-full outline-none rounded-lg mt-1 text-black px-2' />
                    {errors?.email && <p className='text-red-600'>{errors.email.message}</p>}
                </div>
                <div>
                    <label className='block'>Phone</label>
                    <input
                     placeholder='Type your Phone'
                        {...register("phone")}
                        className='block py-2 w-full outline-none rounded-lg mt-1 text-black px-2' />
                    {errors?.phone && <p className='text-red-600'>{errors.phone.message}</p>}
                </div>
                <div>
                    <label className='block'>Password</label>
                    <input
                    type='password'
                     placeholder='Type your Password'
                        {...register("password")}
                        className='block py-2 w-full outline-none rounded-lg mt-1 text-black px-2' />
                    {errors?.password && <p className='text-red-600'>{errors.password.message}</p>}
                </div>
                <div>
                    <label className='block'>Confirm Password</label>
                    <input type='password'
                     placeholder='Type your Confirm Password'
                        {...register("confirmpassword")}
                        className='block py-2 w-full outline-none rounded-lg mt-1 text-black px-2' />
                    {errors?.confirmpassword && <p className='text-red-600'>{errors.confirmpassword.message}</p>}
                </div>
                <button type='submit' className='w-full py-2 rounded-lg bg-gray-800'>Submit</button>
            </form>
        </div>
    )
}

export default FormComponent
