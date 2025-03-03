import React, { useState } from 'react';
import { HiOutlineSearch, HiOutlineX, HiArrowSmRight } from 'react-icons/hi';

const Menu = ({ value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    value(input);
    setIsOpen(false);
  };

  const toggleSearch = () => {
    setIsOpen(!isOpen);
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
          <form className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 md:w-1/3 p-2 bg-white shadow-lg rounded-full flex items-center transition-all z-20">
            <input
              type="text"
              className="font-roboto font-bold w-full rounded-full outline-none text-gray-500 p-1"
              placeholder="Enter a city"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSubmit(e);
              }}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="text-gray-500 p-1 hover:bg-gray-200 rounded-full transition-all duration-200 active:scale-80"
            >
              <HiArrowSmRight size={30} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Menu;
