"use client";
import React, { useState, useEffect, useCallback, memo } from 'react';
import dynamic from 'next/dynamic';
import { GrRestaurant } from "react-icons/gr";
import Home from '@/components/Home';
import { AnimatePresence } from 'framer-motion';

const Container = dynamic(() => import('@/components/Container'), {
  ssr: false,
});

const slides = [
  {
    video: '8477334-hd_1920_1080_24fps.mp4',
    heading: "Welcome to The Fire and Steak House",
    text: "We are glad to have you here. Explore our services and offerings",
    buttonText: "View Menu",
    icon: <GrRestaurant className="text-yellow-500 text-5xl" />,
    link: '/menu',
  },
];

const Main = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndex = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(updateIndex, 7000);
    return () => clearInterval(interval);
  }, [updateIndex]);

  return (
    <Container>
      <div className="relative w-[100vw] xl:w-[83vw] ms-0 lg:ms-auto h-[100vh] overflow-hidden">
        <AnimatePresence>
          {slides.map((slide, index) => (
            index === currentIndex && (
              <Home slide={slide} key={index} />
            )
          ))}
        </AnimatePresence>
      </div>
    </Container>
  );
});

Main.displayName = "Main"; // Adding display name

export default Main;
