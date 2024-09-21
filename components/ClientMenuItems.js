"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import CheckoutForm from '@/components/CheckoutForm';
import OrderSummary from '@/components/OrderSummary';
import bgImg from '@/public/slide01.webp';
import dynamic from 'next/dynamic';
import Loader from './Loader';

const ClientMenuItems = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const categoryRefs = useRef({}); // To store refs for each category

  useEffect(() => {
    const fetchMenuData = async () => {
      const data = await import('@/Data/MenuData');
      setMenuData(data.default);
      setIsLoading(false);
    };

    fetchMenuData();
  }, []);

  const calculateSubtotal = () => {
    return selectedItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('Rs. ', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const subtotal = calculateSubtotal();

  const toggleCategory = (categoryId) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
      // Scroll the opened category into view
      categoryRefs.current[categoryId].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section className="relative pb-10 w-[100vw] xl:w-[83vw]">
        <section className="relative w-full h-[400px]">
          <Image
            src={bgImg}
            alt="Background Image"
            fill
            priority
            sizes="100vw"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-4xl font-bold text-white text-center font-pirata-one tracking-widest">Discover Our Delicious Menu</h1>
            <p className="text-lg mt-3 text-center text-white max-w-2xl px-3 lg:px-0">
              Savor the taste of flame-grilled perfection with every delicious bite. Our expertly crafted dishes are designed to tantalize your taste buds.
            </p>
          </div>
        </section>

        {/* Card Container */}
        <div className="relative container mx-auto px-4 mt-5">
          {isLoading ? <Loader /> : menuData.map((elm) => {
            const MenuCard = dynamic(() => import('./MenuCard'), { suspense: true }); // Dynamic import

            return (
              <div key={elm.id} ref={el => categoryRefs.current[elm.id] = el}>
                <h1 
                  className="text-2xl font-bold hover:text-yellow-300 text-white font-pirata-one tracking-widest my-2 cursor-pointer" 
                  onClick={() => toggleCategory(elm.id)}
                >
                  {elm.title}
                </h1>
                <hr />
                {expandedCategory === elm.id && (
                  <React.Suspense fallback={<Loader />}> {/* Loader while the component is loading */}
                    <div className="mt-2">
                      <MenuCard
                        loading={isLoading}
                        menuItem={elm}
                        selectedItems={selectedItems}
                        setSelectedItems={setSelectedItems}
                      />
                    </div>
                  </React.Suspense>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Place order */}
      <div id='check-order' className="container mx-auto px-4 py-10 flex md:flex-row flex-col-reverse gap-6">
        <CheckoutForm selectedItems={selectedItems} subtotal={subtotal} />
        <OrderSummary items={selectedItems} calculateSubtotal={calculateSubtotal} />
      </div>
    </>
  );
};

export default ClientMenuItems;
