import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { loginUser } from '../config/firebase/FirebaseMethod';
import { Link, useNavigate } from 'react-router-dom';
import NavbarBlow from '../Components/NavbarBlow';
import Navbar from '../Components/Navbar';

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // Start with false

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const loginUserFromFirebase = async (data) => {
    setIsSubmitting(true)
    console.log(data);
    try {
      const userLogin = await loginUser({
        email: data.email,
        password: data.password,
      });
      console.log(userLogin);
      navigate('/');
    } catch (error) {
      alert(error)
      console.log(error);
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <nav className="bg-[#7749F8] sm:p-0 p-1 flex flex-wrap justify-between items-center">
        <Link to="/" className="text-white sm:ml-24 ml-5 sm:text-[1.4rem] text-[1.3rem] font-bold hover:bg-[#5628F6]  rounded-lg transition duration-300 sm:px-2 px-0 py-0  sm:py-1">Personal Blogging App</Link>
        <div className="flex justify-center items-center font-semibold sm:mr-12 mr-5 ">
          <Link to="/register" className="text-white sm:px-2 px-0 py-0  sm:py-1 hover:bg-[#5628F6]  rounded-lg transition duration-300">Register</Link>
        </div>
      </nav>
      <NavbarBlow PageName='Login' />






      <div className="flex items-center justify-center pt-[5rem]">
        <div className="w-full max-w-sm p-6 m-3 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

          <form onSubmit={handleSubmit(loginUserFromFirebase)} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1 block">This field is required</span>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.password && (
                <span className="text-red-500 text-sm mt-1 block">This field is required</span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center justify-center w-full py-2 rounded-lg transition duration-300 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
            >
              {isSubmitting ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12c0-1.5.4-2.9 1.1-4.1l1.5 1.5C6.9 10.3 6 11.1 6 12s.9 1.7 2.6 2.6l-1.5 1.5C4.4 14.9 4 13.5 4 12zm16 0c0 1.5-.4 2.9-1.1 4.1l-1.5-1.5C17.1 13.7 18 12.9 18 12s-.9-1.7-2.6-2.6l1.5-1.5C19.6 9.1 20 10.5 20 12z"
                  ></path>
                </svg>
              ) : (
                'Login'
              )}
              {isSubmitting && <span className="ml-2">Processing...</span>}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
