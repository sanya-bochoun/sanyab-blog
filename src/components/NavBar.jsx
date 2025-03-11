import React from 'react';
import logo from '../assets/logo.svg';

function NavBar() {
  return (
    <nav className="w-full bg-[#F9F8F8] border-b border-[#DAD6D1]">
      <div className="w-[1440px] h-[80px] mx-auto px-[120px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-9" />
        </div>
        
        {/* Buttons */}
        <div className="flex items-center space-x-2">
          <button className="w-[127px] h-[48px] px-10 py-3 rounded-full border border-[#75716B] bg-[#FEFEFE] text-sm font-medium flex items-center justify-center gap-[6px]">
            Log in
          </button>
          <button className="w-[141px] h-[48px] px-10 py-3 bg-black text-white rounded-full font-medium text-sm hover:bg-gray-800 flex items-center justify-center gap-[6px]">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar