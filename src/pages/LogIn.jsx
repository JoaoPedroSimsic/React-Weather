import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiArrowSmLeft } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
const LogIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const logged = localStorage.getItem('logged');
    if (logged === 'true') {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (email === savedEmail && password === savedPassword) {
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
        toast.success('Logged successfully');
        localStorage.setItem('logged', 'true');
        navigate('/dashboard');
      }, 2000);
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div
      className="h-screen w-screen flex flex-col space-y-4 justify-center items-center"
      style={{
        backgroundImage:
          'radial-gradient(circle at 10% 10%, #55A0FF, #77A0FA 70%, #CCCCFF)',
      }}
    >
      <div className="flex flex-col w-screen h-screen m-0 bg-white lg:shadow-5x justify-center items-center lg:w-2/4 lg:h-2/3 lg:rounded-lg xl:w-2/7">
        <div className="w-full h-10">
          <HiArrowSmLeft
            onClick={() => navigate(-1)}
            size={40}
            className="ml-3 text-gray-500 hover:text-black rounded-full hover:bg-gray-200 transition-color duration-300"
          />
        </div>

        <form
          className="h-8/9 flex flex-col w-full justify-center item-center space-y-4 p-6"
          onSubmit={handleLogin}
        >
          <h1 className="text-center font-bold font-roboto text-3xl text-blue-500">
            Log In
          </h1>
          <label
            className="text-gray-500 sm:mx-30 font-roboto mx-5 lg:mx-20 text-lg"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            className={`${error ? 'border-red-500' : 'border-gray-500'} w-auto text-gray-600 mx-5 p-2 md:mx-20 lg:mx-20 my-1 px-3 rounded-md border-1 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none mb-10`}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            className="text-gray-500 sm:mx-30 font-roboto mx-5 lg:mx-20 my-0 text-lg"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            type="password"
            className={`${error ? 'border-red-500' : 'border-gray-500'} w-auto mx-5 text-gray-600 md:mx-20 lg:mx-20 my-1 px-3 p-2 rounded-md border-1 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none mb-10`}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <p className="bottom-8 left-5 md:left-20 lg:left-20 text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className={`${isActive ? 'bg-gray-500' : 'bg-gradient-to-r from-blue-900 to-blue-500'} py-3 mb-15 sm:mx-30 mx-20 text-white font-bold font-roboto rounded-full shadow-5xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95`}
          >
            {isActive ? 'Entering...' : 'Enter'}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LogIn;
