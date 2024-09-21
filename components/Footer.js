import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <hr className='opacity-10' />
            <footer className="text-center py-8 bg-[#0f0f0f] w-[100vw] xl:w-[83vw] text-white">

                <div className="container mx-auto px-4">
                    <div className="flex justify-center mb-4">
                        <Link href="https://www.facebook.com/" className="mx-2 text-lg hover:text-yellow-300">
                            <FaFacebookF />
                        </Link>
                        <Link href="https://www.instagram.com/" className="mx-2 text-lg hover:text-yellow-300">
                            <FaInstagram />
                        </Link>
                        <Link href="https://www.youtube.com/" className="mx-2 text-lg hover:text-yellow-300">
                            <FaYoutube />
                        </Link>
                    </div>
                    <p className=" text-[#999] font-rambla">
                        <small>  © 2024 Fire n Steak House. All Rights Reserved
                        </small>
                    </p>
                </div>
            </footer>
        </>

    );
};

export default Footer;
