import Image from 'next/image';
import React from 'react';
import { FaLeaf, FaTree, FaCalendar } from 'react-icons/fa';
import { SiCodechef } from "react-icons/si";

import testimonialBg from '@/public/testimonial-bg.webp';
import reviewAvatar from '@/public/client02.webp';
import Ceo from './Ceo';
import GoogleReviews from './GoogleReviews';

const features = [
  {
    Icon: FaLeaf,
    title: 'Hygienic Food',
    text: 'We guarantee top-notch hygiene, ensuring every meal is prepared with the utmost care for a safe and delicious dining experience.',
  },
  {
    Icon: FaTree,
    title: 'Fresh Environment',
    text: 'Our best steak house in Islamabad offers a fresh, welcoming environment where every detail is designed to enhance your dining experience.',
  },
  {
    Icon: SiCodechef,
    title: 'Skilled Chefs',
    text: 'Our steak house boasts skilled chefs who craft each dish with precision, delivering an exceptional dining experience, and prioritize hygiene.',
  },
  {
    Icon: FaCalendar,
    title: 'Event & Party',
    text: 'Fire and House is the perfect venue for events and parties, offering a memorable experience with top-tier cuisine and ambiance.',
  },
];

const Testimonials = () => {
  return (
    <>
      <section className="relative text-center py-14 w-[100vw] xl:w-[83vw]">
        <div className="absolute inset-0">
          <Image
            src={testimonialBg}
            alt="Background Image"
            fill
            priority
            sizes="(min-width: 1280px) 83.02vw, 100vw"
            quality={100}
            className="z-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        </div>
        <div className="relative container mx-auto px-4 z-20">
          <p className="text-xl text-white mb-8 w-full mx-auto lg:max-w-2xl">
            I just went to Firensteak, and man, it was amazing! Had their chili beef dry, herbs kitchen steak, French onion chicken and soup with garlic bread – all delicious! The taste was so good, and the place had a great vibe. Definitely recommend trying it out – you&#39;ll want to come back for more!
          </p>
          <div className="flex flex-col items-center mb-16">
            <Image
              src={reviewAvatar}
              alt="reviews"
              width={100}
              height={100}
              className="rounded-full"
            />
            <p className="text-lg font-semibold text-white mt-4">Ismail Vlogger</p>
          </div>
          {/* Feature Cards Container */}

        </div>

      </section>
      <div className="relative z-30 -mt-16">
        <ul className="grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto px-10">
          {features.map((feature, index) => (
            <li key={index} className="bg-[#0f0f0f] p-6 rounded-lg shadow-md text-center">
              <div className="mb-4 text-yellow-300">
                <feature.Icon size={40} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white font-pirata-one tracking-widest">{feature.title}</h3>
              <p className="text-white">{feature.text}</p>
            </li>
          ))}
        </ul>
      </div>

     <Ceo />
     <GoogleReviews />
      
    </>
  );
};

export default Testimonials;
