import Image from 'next/image';
import React from 'react';
import bgImg from '@/public/footer-bg.webp'; 
import Link from 'next/link';

const ContactUs = () => {
    return (
        <section className="relative text-center py-14 w-[100vw] xl:w-[83vw]">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src={bgImg}
                    alt="Background Image"
                    fill                   
                    quality={100}
                    priority
                    className='transform scale-x-[-1]'
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            <div className="relative container mx-auto px-4">
                <div className="flex items-center justify-center h-full">
                    <div className="text-white">
                        <h6 className="text-lg mb-3 text-yellow-300">Book Now</h6>
                        <h4 className="text-3xl font-bold mb-4 font-pirata-one tracking-widest">Online Reservation</h4>
                        <p className="text-xl mb-4">Monday to Sunday 12:00 - 00:30</p>
                        <Link
                            href="https://shtheme.org/demosd/redboawp/?page_id=53"
                            className="inline-flex items-center px-6 py-2 rounded-full bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition"
                        >
                            <span className="flex items-center">
                                <i className="ti-phone mr-2"></i> 03165089741  </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
