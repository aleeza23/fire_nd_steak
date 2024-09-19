import React from 'react'
import { motion } from 'framer-motion';
import Button from './Button';

const variants = {
    initial: { opacity: 0, scale: 1.6 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.2 }
};

const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 }
};



const Home = ({ slide, index }) => {
    return (
        <motion.div
            key={index}
            className="absolute inset-0"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <video
                src={slide.video}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <div className="mb-4">
                    {/* Container for icon and heading */}
                    <div className="flex flex-col items-center">
                        {slide.icon} {/* Icon */}
                        <motion.h1
                            className="text-4xl font-bold mt-4 font-pirata-one tracking-widest"
                            initial="initial"
                            animate="animate"
                            variants={textVariants}
                            transition={{ delay: .5, duration: 0.5 }}
                        >
                            {slide.heading}
                        </motion.h1>
                    </div>
                </div>
                <motion.p
                    className="text-lg mb-4"
                    initial="initial"
                    animate="animate"
                    variants={textVariants}
                    transition={{ delay: .7, duration: 0.5 }}
                >
                    {slide.text}
                </motion.p>
                <Button slide={slide} />
            </div>
        </motion.div>
    )
}

export default Home