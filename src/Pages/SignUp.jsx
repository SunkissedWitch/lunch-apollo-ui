import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import FormAlert from '../Components/Custom/FormAlert';
import { EMAIL_VALIDATION } from '../helpers/const';
import { _axios } from '../helpers/fetcher';


const SignUp = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    _axios.post('/users/create', JSON.stringify(data))
      .then(res => {
        console.log(res);
      })
  };

  return (
    <>
      <div className="fixed left-0 top-0 h-full w-full bg-black/75 -z-10"></div>

      <section className='flex justify-center flex-col px-4 py-14 z-50'>
        <div className='max-w-[450px] w-full mx-auto bg-black/80 text-white'>
          <div className='py-10 px-5 lg:px-10'>
            <h1 className='mb-6 font-bold text-center uppercase text-xl'>
              Sign Up
            </h1>

            <form className='flex flex-col w-full' onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-5'>
                <p className='text-white mb-2'>Email</p>

                <input
                  type="text"
                  className='w-full p-2 text-black'
                  placeholder='email'
                  name="email"
                  {...register("email", { required: true, pattern: EMAIL_VALIDATION })}
                />

                {errors.email?.type === 'required' && <FormAlert text="Email is required" />}
                {errors.email?.type === 'pattern' && <FormAlert text="Please provide valid email" />}
              </div>

              <div className='mb-5'>
                <p className='text-white mb-2'>Password</p>

                <input
                  type="password"
                  className='w-full p-2 text-black'
                  placeholder='password'
                  name="password"
                  {...register("password", { required: true })}
                />

                {errors.password?.type === 'required' && <FormAlert text="Password is required" />}
              </div>

              <div className='mb-5'>
                <p className='text-white mb-2'>Username</p>

                <input
                  type="text"
                  className='w-full p-2 text-black'
                  placeholder='johndoe'
                  name='username'
                  {...register("username", { required: true })}
                />

                {errors.username?.type === 'required' && <FormAlert text="Username is required" />}
              </div>

              <div className='mt-7'>
                <button type="submit" className='bg-red-700 py-2 font-bold px-4 hover:bg-red-500 w-full'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp