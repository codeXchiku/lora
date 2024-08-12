import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { FaRegFolderOpen } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { SlEnvolope } from "react-icons/sl";
import { GoBell } from "react-icons/go";
import { SlEqualizer } from "react-icons/sl";
import { SlLogin } from "react-icons/sl";

const Navbar = () => {
  return (
    <>
      <nav className='h-16 max-h-full flex z-30 w-full fixed'>
        {/* logo part */}
        <div className='flex items-center ml-5 sm:ml-[70px] h-16'>
          <h1 className='text-2xl pr-5'>LORA</h1>
        </div>
        {/* search and nav elements */}
        <div className='flex items-center justify-between ml-32 flex-grow'>
          <div className='flex items-center border-2 border-gray-400 p-2'>
            <input type="text" placeholder='Search here..' />
            <IoIosSearch className='text-gray-400' />
          </div>
          <div className='flex ml-10 mr-4 space-x-8'>
            <FaRegFolderOpen className='text-2xl text-gray-500' />
            <FaRegCalendarAlt className='text-2xl text-gray-500' />
            <IoChatbubblesOutline className='text-2xl text-gray-500' />
            <SlEnvolope className='text-2xl text-gray-500' />
            <GoBell className='text-2xl text-gray-500' />
            <SlEqualizer className='text-2xl text-gray-500' />
            <SlLogin className='text-2xl text-gray-500' />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
