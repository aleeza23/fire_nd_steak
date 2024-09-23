"use client";
import React, { useState, useEffect, useRef, memo } from 'react';
import Image from 'next/image';
import CheckoutForm from '@/components/CheckoutForm';
import OrderSummary from '@/components/OrderSummary';
import bgImg from '@/public/slide01.webp';
import dynamic from 'next/dynamic';
import { FaShoppingCart } from 'react-icons/fa';
import Loader from './Loader';

const DynamicMenuCard = dynamic(() => import('./MenuCard'), { suspense: true });

const MenuCard = memo((props) => <DynamicMenuCard {...props} />);

const ClientMenuItems = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [menuData, setMenuData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const categoryRefs = useRef({}); // To store refs for each category

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
  // subtotal
  const subtotal = calculateSubtotal();

  //remove from cart fun
  const removeFromCart = (itemId) => {
    setSelectedItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  //toggle category fun
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

        {/* Card Container */}
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
                  <React.Suspense fallback={<Loader />}>
                    <div className="mt-2">
                      <MenuCard
                        loading={isLoading}
                        menuItem={elm}
                        selectedItems={selectedItems}
                        setSelectedItems={setSelectedItems}
                        setIsCartOpen={setIsCartOpen}
                      />
                    </div>
                  </React.Suspense>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Cart Modal */}
      <div
        className={`fixed top-0 overflow-y-auto z-40  right-0 h-full md:max-w-[400px] w-[85vw] bg-black shadow-lg transform transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold text-white tracking-widest">Your Cart</h2>
          <button
            className="text-white text-md border hover:bg-yellow-300 px-2"
            onClick={() => setIsCartOpen(false)}
          >
            &#10005;
          </button>
        </div>
        <div className="p-4">
          <OrderSummary items={selectedItems} calculateSubtotal={calculateSubtotal} removeFromCart={removeFromCart}  />
          <CheckoutForm selectedItems={selectedItems} subtotal={subtotal} />
        </div>
      </div>
    </>
  );
};

export default ClientMenuItems;
