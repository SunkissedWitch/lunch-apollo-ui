import React from 'react';
import { useLocation } from 'react-router';

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(event);
};

const Login = () => {
  const location = useLocation();
  const from = location.state?.from || "/";

  return (
    <>
      {/* <div className="fixed left-0 top-0 h-full w-full bg-black/75 -z-10"></div> */}
      <section className='flex justify-center flex-col px-4 py-14 z-50'>
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
      </section>
    </>
  );
}

export default Login;
