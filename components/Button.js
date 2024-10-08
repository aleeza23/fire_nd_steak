import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

const buttonVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
};

const Button = ({slide}) => {
    return (
        <motion.div

            initial="initial"
            animate="animate"
            variants={buttonVariants}
            transition={{ delay: .9, duration: 0.5 }}
        >

            <Link href={slide.link} className="relative inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-bold rounded-full group">
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-yellow-300 opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">{slide.buttonText}</span>
                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
            </Link>


        </motion.div>
    )
}

export default Button