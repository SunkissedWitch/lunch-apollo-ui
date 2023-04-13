import React from 'react';
import { useLocation } from 'react-router';
import LoginGradient from '../Components/backgrounds/gradient';
import { useForm } from "react-hook-form";
import { LockClosedIcon } from '@heroicons/react/24/solid'

const Login = () => {
  const location = useLocation();
  const from = location.state?.from || "/";
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log('[submit]: ', data, e);
    // TODO: send request to API /users/login
    // if (response.access_token) {
    //   return navigate('/users');
    // }
  }
  const onError = (errors, e) => console.log(errors, e);

  return (
    <>
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <LoginGradient />
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-medium tracking-tight text-gray-900">
              Login
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-3 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                  {...register('username')}
                />
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
                  className="relative block w-full rounded-b-md border-0 py-3 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                  {...register('password')}
                />
              </div>
            </div>

            {/* <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div> */}

            <div>
              <button
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-4 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="fixed left-0 top-0 h-full w-full bg-black/75 -z-10"></div> */}
      {/* <section className='flex justify-center flex-col px-4 py-14 z-50'>
        <div className='max-w-[450px] w-full mx-auto'>
          <div className='py-10 px-5 lg:px-10'>
            {
              location.state?.message &&
              <h3 className="text-red-600 text-center mb-2">
                {location.state.message}
              </h3>
            }

            <h1 className='mb-6 font-bold text-center uppercase text-xl'>
              Login
            </h1>

            <form className='flex flex-col w-full' onSubmit={handleSubmit}>
              <div className='mb-5'>
                <p className=' mb-2'>Email</p>

                <input type="text" className='w-full p-2 ' placeholder='email' />
              </div>

              <div className='mb-5'>
                <p className=' mb-2'>Password</p>

                <input type="password" className='w-full p-2' placeholder='password' />
              </div>

              <div className='mt-7'>
                <button type="submit" className='bg-red-700 py-2 font-bold px-4 hover:bg-red-500 w-full'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Login;
