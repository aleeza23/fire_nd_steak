import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MenuCard = ({ imgSrc, title, description, link, index }) => {
  return (
    <div key={index} className="w-full px-4 mb-6 md:w-1/2 lg:w-1/3">
      <div className="bg-[#0f0f0f] rounded-lg p-4 flex flex-col relative overflow-hidden">
        <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
          <Image
            src={imgSrc}
            alt={title}
            fill
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <h6 className="text-white font-semibold mb-2 text-lg">
            <Link href={link} className="hover:text-yellow-300 transition-colors font-pirata-one tracking-widest">
              {title}
            </Link>
          </h6>
          <p className="text-white mb-4">{description}</p>
          <Link
            href={link}
            className="text-yellow-300 flex items-center mt-4"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
