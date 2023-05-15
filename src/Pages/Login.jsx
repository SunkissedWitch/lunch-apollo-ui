import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import LoginGradient from '../Components/backgrounds/gradient';
import { useForm } from "react-hook-form";
import { _axios } from '../services/axiosInstance';
import { LOCAL_STORAGE_TOKEN_NAME, LOCAL_STORAGE_USER } from '../config';
import { EMAIL_VALIDATION } from '../helpers/const';
import FormAlert from '../Components/Custom/FormAlert';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const location = useLocation();
  const from = location.state?.from || "/";
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const navigate = useNavigate()
  const fromUrl = location.state?.from || "/";

  const onSubmit = (data, e) => {
    _axios.post('/users/login', data)
      .then(res => {
        if (res.status === 200) {
          const { token, user } = res.data;

          localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, token);
          localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(user));

          toast.success("Succses!", {
            autoClose: 500,
            onClose: () => navigate(fromUrl, { replace: true })
          })
        }
      }).catch(e => {
        const { message } = e.response.data

        toast.error(message, {
          autoClose: 1500,
        })
      });
  }
  const onError = (errors, e) => console.log(errors, e);

  return (
    <>
      <ToastContainer />

      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <LoginGradient />

        <div className="w-full max-w-md space-y-8">
          <h2 className="mt-6 text-center text-3xl font-medium tracking-tight text-gray-900">
            Login
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
                  className="relative block w-full rounded-b-md border-0 py-3 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />

                {errors.password?.type === 'required' && <FormAlert text="Password is required" />}
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
                  {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                </span>
                Login
              </button>
            </div>
          </form>

          <div className="pt-5 text-center">
            <NavLink to="/register" className="link">
              Go to Sing up
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
