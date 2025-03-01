import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/sign-in');
  };

  const handleLogIn = () => {
    navigate('/log-in');
  };

  return (
    <div
      className="h-screen w-screen flex flex-col space-y-4 items-center"
      style={{
        backgroundImage:
          'radial-gradient(circle at 10% 10%, #55A0FF, #77A0FA 70%, #CCCCFF)',
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/ce/MS_Weather.svg"
        alt="logo"
        className="w-32 h-32 mt-40"
      />
      <h1 className="font-roboto text-white text-center font-bold text-5xl mt-5">
        Weather Forecast
      </h1>
      <button
        className="mt-10 px-12 py-3 bg-gradient-to-r from-blue-900 to-blue-500 text-white font-bold font-roboto rounded-full shadow-5xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-black hover:scale-105 active:scale-95"
        onClick={handleSignIn}
      >
        Sign In
      </button>
      <button
        className="mt-3 px-12 py-3 border-2 border-blue-900 text-blue-900 font-bold font-roboto rounded-full shadow-5xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95"
        onClick={handleLogIn}
      >
        Log In
      </button>
    </div>
  );
};

export default Home;
