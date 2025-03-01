import React from 'react';

const Page404 = () => {
  return (
    <div
      className="h-screen w-screen flex flex-col space-y-4 justify-center items-center"
      style={{
        backgroundImage:
          'radial-gradient(circle at 10% 10%, #55A0FF, #77A0FA 70%, #CCCCFF)',
      }}
    >
      <h1 className="font-roboto font-bold text-white text-9xl">404</h1>
      <h2 className="font-roboto font-bold text-white text-2xl">
        Page not Found
      </h2>
    </div>
  );
};

export default Page404;
