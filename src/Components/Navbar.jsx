import React from 'react'
import  { useState } from 'react';


const Navbar = () => {
    



  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(isMenuOpen);

  return (
    <nav className='bg-gray-200 p-4 sticky mirror top-0 z-50'>

      <div className='flex items-center justify-between w-full'>

        {/* Logo */}
        <div className='cursor-pointer text-2xl text-transparent [-webkit-text-stroke:1.5px_black] font-bold drop-shadow-[0_0_5px_rgb(59,130,246)] ml-6'>
          Manuni
        </div>

        {/* Mobile menu toggle */}
  <div className="md:hidden">
    <button className="text-black" onClick={toggleMenu}>
      {isMenuOpen ? (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )}
    </button>
  </div>

  {/* Desktop nav */}
  <ul id="nav" className="hidden md:flex space-x-8 items-center mr-16">
  <li>
    <a href="#" className="relative text-black font-semibold hover:text-blue-600 hover:drop-shadow-[0_0_12px_#60A5FA] transition-all duration-300 group">
      Home
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-500 ease-in-out rounded-full shadow-[0_0_8px_#FFD700]" />
    </a>
  </li>
  <li>
    <a href="#About" className="relative text-black font-semibold hover:text-blue-600 hover:drop-shadow-[0_0_12px_#60A5FA] transition-all duration-300 group">
      About
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-500 ease-in-out rounded-full shadow-[0_0_8px_#FFD700]" />
    </a>
  </li>
  <li>
    <a href="#Services" className="relative text-black font-semibold hover:text-blue-600 hover:drop-shadow-[0_0_12px_#60A5FA] transition-all duration-300 group">
      Services
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-500 ease-in-out rounded-full shadow-[0_0_8px_#FFD700]" />
    </a>
  </li>
  <li>
    <a href="#Testimonials" className="relative text-black font-semibold hover:text-blue-600 hover:drop-shadow-[0_0_12px_#60A5FA] transition-all duration-300 group">
      Testimonials
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-500 ease-in-out rounded-full shadow-[0_0_8px_#FFD700]" />
    </a>
  </li>
  <li>
    <a
      href="#Contact"
      className="bg-blue-800 text-black font-bold px-5 py-2 rounded-md hover:bg-blue-600 hover:drop-shadow-[0_0_12px_#60A5FA] transition-all duration-300"
    >
      Work With Us
    </a>
  </li>
</ul>
</div>

{/* Mobile menu when open */}
{isMenuOpen && (
  <ul id="nav" className="flex flex-col md:hidden space-y-2 p-4 rounded-md w-1/3 absolute bg-black">
    <li><a href="#" className="block text-white font-semibold">Home</a></li>
    <li><a href="#About" className="block text-white font-semibold">About</a></li>
    <li><a href="#Services" className="block text-white font-semibold">Services</a></li>
    <li><a href="#Testimonials" className="block text-white font-semibold">Testimonials</a></li>
    <li><a href="#Contact" className="block text-white font-semibold">Contact</a></li>
  </ul>
)}

    </nav>
  );
};

export default Navbar;
