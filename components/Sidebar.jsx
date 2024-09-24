import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import logo from '@/public/fire logo.webp'


const Sidebar = ({ isOpen }) => {
    return (
        <div className={`fixed top-0 left-0 h-full z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} xl:translate-x-0 transition-transform w-[55vw]  md:w-[17vw] bg-[#000]`}>
            <div className="h-screen flex flex-col justify-between">

                {/* logo */}
                <div className="flex justify-center mt-10">
                    <div className="relative w-60 sm:w-24 lg:w-32">
                        <Image
                            src={logo}
                            alt="logo-img"                            
                            priority
                        />
                    </div>


                </div>


                {/* user */}


                {/* navbar */}
                <Navbar />

                {/* upgrade plans */}
                <div className={`text-white text-3xl md:text-xl mx-auto mb-10 font-rambla`}>
                    <p><span>Rezervation</span></p>

                    <h6 className='text-yellow-300'>03165089741</h6>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
