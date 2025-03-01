import React, { useState } from 'react';
import { HiOutlineSearch, HiOutlineX } from 'react-icons/hi';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="absolute w-full h-screen">
      {isOpen && (
        <div className="absolute inset-0 bg-opacity-50 backdrop-blur-sm z-0" />
      )}

      <div className="h-screen w-full p-3 relative z-10">
        <button
          className="p-2 rounded-full active:bg-white/20 transition"
          onClick={toggleSearch}
        >
          {isOpen ? (
            <HiOutlineX size={30} className="text-white" />
          ) : (
            <HiOutlineSearch size={30} className="text-white" />
          )}
        </button>

        {isOpen && (
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 md:w-1/3 p-2 bg-white shadow-lg rounded-full flex items-center transition-all z-20">
            <input
              type="text"
              className="font-roboto font-bold w-2/3 rounded-full outline-none text-black p-1 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
