import React from 'react';
import Image from 'next/image';
import detailImg01 from '@/public/1.webp';
import detailImg02 from '@/public/354066148_655661479916586_5371156573225261096_n.webp';
import detailImg03 from '@/public/354234019_655661653249902_4259876218223913307_n.webp';
import detailImg04 from '@/public/354467733_655661563249911_6152788108891838076_n.webp';
import detailImg05 from '@/public/354561664_655661476583253_4774570942138302752_n.webp';

const images = [
  detailImg01,
  detailImg02,
  detailImg03,
  detailImg04,
  detailImg05
];

const MenuDetails = () => {
  return (
    <section className="bg-[#0f0f0f] py-10 w-[100vw] xl:w-[83vw]">
      <h1 className="text-4xl font-bold mb-4 text-white text-center font-pirata-one tracking-widest">Detailed Menu</h1>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {images.map((img, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/5 px-4 mb-4">
              <div className="relative w-full h-64">
                <Image
                  src={img}
                  alt={`Detail Image ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 
                         (max-width: 768px) 50vw, 
                         (max-width: 1024px) 25vw, 
                         20vw"
                  className="rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuDetails;
