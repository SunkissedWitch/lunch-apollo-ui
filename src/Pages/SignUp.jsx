import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import FormAlert from '../Components/Custom/FormAlert';
import { EMAIL_VALIDATION } from '../helpers/const';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import LoginGradient from '../Components/backgrounds/gradient';
import { _axios } from '../services/axiosInstance';
import { LOCAL_STORAGE_USER } from '../config';

const SignUp = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log('submitted', data);

    _axios.post('/users/create', data)
      .then(res => {
        if (res.status === 200) {
          const { message, user } = res.data;

          // localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, token);
          localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(user));

          toast.success(message, {
            autoClose: 500,
            onClose: () => navigate('/', { replace: true })
          })
        }
      }).catch(e => {
        const { message } = e.response.data

        toast.error(message, {
          autoClose: 1500,
        })
      });
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <>
      <ToastContainer />

      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <LoginGradient />

        <div className="w-full max-w-md space-y-8">
          <h2 className="mt-6 text-center text-3xl font-medium tracking-tight text-gray-900">
            Register
          </h2>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit, onError)} noValidate>
            <div className="-space-y-px rounded-md shadow-sm">
              <div className="">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="relative block w-full rounded-t-md border-0 py-3 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                  {...register("email", { required: true, pattern: EMAIL_VALIDATION })}
                />

                {errors.email?.type === 'required' && <FormAlert text="Email is required" />}
                {errors.email?.type === 'pattern' && <FormAlert text="Please provide valid email" />}
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full border-0 py-3 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />

                {errors.password?.type === 'required' && <FormAlert text="Password is required" />}
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="relative block w-full rounded-b-md border-0 py-3 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Username"
                  {...register("username", { required: true })}
                />

                {errors.username?.type === 'required' && <FormAlert text="Username is required" />}
              </div>
            </div>

            <div>
              <button
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-4 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="pt-5 text-center">
            <NavLink to="/login" className="link">
              Go to login
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp