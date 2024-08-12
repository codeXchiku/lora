import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { SlHome } from "react-icons/sl";
import { MdOutlineRouter } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoGlobeOutline } from "react-icons/io5";

import { Link } from 'react-router-dom';



const Sidebar = () => {
    
    const toggleSidebar = () => {
        document.querySelector('.sidebar').classList.toggle('translate-x-0');
        document.querySelector('.sidebar').classList.toggle('-translate-x-full');
    };

    // State to manage visibility
    const toggleContent = (event) => {
        const content = event.currentTarget.nextElementSibling;
        if (content) {
            content.classList.toggle('hidden');
        }
    };

    return (
        <>
            <span className='absolute text-4xl top-2.5 left-4 cursor-pointer lg:hidden z-30' onClick={toggleSidebar}>
                <GiHamburgerMenu className='p-1 text-black rounded-md mt-2 ' />
            </span>
            
            <div className='sidebar fixed top-0 bottom-0 lg:left-0 p-2 left-0 w-[230px] duration-300 ease-in-out transform -translate-x-full lg:translate-x-0 overflow-y-auto text-center  z-10'>

                <div className=' text-xl mt-20 ml-4'>
                    {/* Add your sidebar content here */}
                    <div className='flex '>
                        <img src={"/images/boy.jpg"} alt="profile" className='h-12  rounded-full' />
                        <div className='ml-4'>
                            <p className='text-lg'>Welcome,</p>
                            <p className='text-sm font-bold'>Chiku</p>
                        </div>
                    </div>
                    <div className='flex  mt-5 mb-5 justify-between'>
                        <div className='mr-5'>
                            <p className='text-lg'>Sales</p>
                            <p className='text-sm'>456</p>
                        </div>
                        <div className='mr-5'>
                            <p className='text-lg'>Order</p>
                            <p className='text-sm'>1350</p>
                        </div>
                        <div className='text-sm'>
                            <p className='text-lg'>Revenue</p>
                            <p className='text-sm'>$2.13B</p>
                        </div>
                    </div>

                    <div className=' mt-3'>
                        <div className='flex cursor-pointer items-center' onClick={toggleContent}>
                            <SlHome className='text-purple-400  text-2xl mr-4 ' />
                            <Link to={'/'}><p>Dashboard</p></Link>
                            <IoMdArrowDropdown className='ml-5 text-gray-400' />
                        </div>
                        <div className='hidden mt-2'>
                            {/* Dashboard Content */}
                            <ul>
                                <li>Gateway1</li>
                                <li>Gateway2</li>
                                <li>Gateway3</li>
                            </ul>
                        </div>

                        <div className='flex cursor-pointer mt-6 items-center' onClick={toggleContent}>
                            <MdOutlineRouter className='text-purple-400 mr-2 text-3xl'/>
                            <Link to={'/Allgateway'}><p>AllGateway</p></Link>
                            <IoMdArrowDropdown className='ml-5 text-gray-400' />
                        </div>
                        <div className='hidden mt-2'>
                            {/* Gateway Content */}
                            <ul>
                            <li>Gateway1</li>
                                <li>Gateway2</li>
                                <li>Gateway3</li>
                            </ul>
                        </div>

                        <div className='flex cursor-pointer mt-6 items-center' onClick={toggleContent}>
                            <IoGlobeOutline className='text-purple-400 mr-3 text-3xl'/>
                            <Link to={'/Allnode'}><p>AllNode</p></Link>
                            <IoMdArrowDropdown className='ml-5 text-gray-400' />
                        </div>
                        <div className='hidden mt-2'>
                            {/* Gateway Content */}
                            <ul>
                                <li>Node1</li>
                                <li>Node2</li>
                                <li>Node3</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
