"use client";
import React, { useState, useEffect, useRef, memo } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { FaShoppingCart } from 'react-icons/fa';
import bgImg from '@/public/slide01.webp';
import Loader from './Loader';


const DynamicMenuCard = dynamic(() => import('./MenuCard'), { suspense: true });
const DynamicCartModal = dynamic(() => import('./CartModal'));

const MenuCard = memo((props) => <DynamicMenuCard {...props} />);
MenuCard.displayName = 'MenuCard';

const ClientMenuItems = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const categoryRefs = useRef({});

  useEffect(() => {
    const fetchMenuData = async () => {
      const data = await import('@/Data/MenuData');
      setMenuData(data.default);
      setIsLoading(false);
    };

    fetchMenuData();
  }, []);

  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add('disable-scroll');
    } else {
      document.body.classList.remove('disable-scroll');
    }
  }, [isCartOpen]);

  const calculateSubtotal = () => {
    return selectedItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('Rs. ', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const subtotal = calculateSubtotal();

  const removeFromCart = (itemId) => {
    setSelectedItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  const toggleCategory = (categoryId) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
      categoryRefs.current[categoryId].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section className="relative pb-10 w-[100vw] xl:w-[83vw]">
        <section className="relative w-auto h-[400px]">
          <Image
            src={bgImg}
            alt="Background Image"
            fill
            sizes="(min-width: 1280px) 83.02vw, 100vw"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-4xl font-bold text-white text-center font-pirata-one tracking-widest">Discover Our Delicious Menu</h1>
            <p className="text-lg mt-3 text-center text-white max-w-2xl px-3 lg:px-0">
              Savor the taste of flame-grilled perfection with every delicious bite. Our expertly crafted dishes are designed to tantalize your taste buds.
            </p>
            <div className="absolute top-6 lg:top-4 right-4 flex items-center">
              <div className="relative">
                <FaShoppingCart
                  className="text-yellow-300 text-3xl cursor-pointer"
                  onClick={() => setIsCartOpen(true)}
                />
                {selectedItems.length > 0 && (
                  <div className="absolute -top-2 -right-2 bg-white text-yellow-300 text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {selectedItems.length}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <div className="relative container mx-auto px-4 mt-5">
          {isLoading ? <Loader /> : menuData.map((elm) => {
            return (
              <div key={elm.id} ref={el => categoryRefs.current[elm.id] = el}>
                <h1
                  className="text-2xl font-bold text-white hover:text-yellow-300 font-pirata-one tracking-widest my-2 cursor-pointer"
                  onClick={() => toggleCategory(elm.id)}
                >
                  {elm.title}
                </h1>
                <hr />
                {expandedCategory === elm.id && (
                  <div className="mt-2">
                    <MenuCard
                      loading={isLoading}
                      menuItem={elm}
                      selectedItems={selectedItems}
                      setSelectedItems={setSelectedItems}
                      setIsCartOpen={setIsCartOpen}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Cart Modal */}
      {isCartOpen && <DynamicCartModal setIsCartOpen={setIsCartOpen} isCartOpen={isCartOpen} items={selectedItems} subtotal={subtotal} calculateSubtotal={calculateSubtotal} removeFromCart={removeFromCart}  />}
    </>
  );
};

export default ClientMenuItems;
