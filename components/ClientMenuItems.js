// components/ClientMenuItems.js
'use client'; // This directive tells Next.js that this component should be rendered on the client side

import React, { useState } from 'react';
import Image from 'next/image';
import CheckoutForm from '@/components/CheckoutForm';
import OrderSummary from '@/components/OrderSummary';

const ClientMenuItems = ({ menuItem }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [itemQuantities, setItemQuantities] = useState({});

    const handleAddToCart = (item) => {
        const quantity = itemQuantities[item.id] || 1; // Get the quantity or default to 1
        const existingItemIndex = selectedItems.findIndex(selectedItem => selectedItem.id === item.id);
        if (existingItemIndex > -1) {
            const updatedItems = [...selectedItems];
            updatedItems[existingItemIndex].quantity = quantity; // Set the new quantity
            setSelectedItems(updatedItems);
        } else {
            setSelectedItems([...selectedItems, { ...item, quantity }]);
        }
        
        // Scroll to the checkout section
        const checkoutSection = document.getElementById('check-order');
        if (checkoutSection) {
            checkoutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleIncreaseQuantity = (id) => {
        setItemQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: (prevQuantities[id] || 1) + 1,
        }));
    };

    const handleDecreaseQuantity = (id) => {
        setItemQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1,
        }));
    };

    const calculateSubtotal = () => {
        return selectedItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace('Rs. ', ''));
            return total + (price * item.quantity);
        }, 0).toFixed(2);
    };

    const subtotal = calculateSubtotal();

    return (
        <div className="container mx-auto px-4 py-10 text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {menuItem.subMenuItems.map((subItem) => (
                    <div key={subItem.id} className="bg-[#0f0f0f] rounded-lg p-4">
                        <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
                            <Image
                                src={subItem.imgSrc}
                                alt={subItem.title}
                                fill
                                sizes="(max-width: 640px) 100vw, 
                       (max-width: 768px) 50vw, 
                       (max-width: 1024px) 33vw, 
                       25vw"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h6 className="text-white font-semibold mb-2 text-lg">{subItem.title}</h6>
                        <p className="text-white mb-4">Rs. {subItem.price}</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <button className="bg-gray-700 text-white px-2 rounded" onClick={() => handleDecreaseQuantity(subItem.id)}>-</button>
                                <span className="text-white">
                                    {itemQuantities[subItem.id] || 1}
                                </span>
                                <button className="bg-gray-700 text-white px-2 rounded" onClick={() => handleIncreaseQuantity(subItem.id)}>+</button>
                            </div>
                            <button className="bg-yellow-300 text-black py-1 px-3 rounded-full" onClick={() => handleAddToCart(subItem)}>Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
            <div id='check-order' className="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-6">
                <CheckoutForm selectedItems={selectedItems} subtotal={subtotal} />
                <OrderSummary items={selectedItems} calculateSubtotal={calculateSubtotal} />
            </div>
        </div>
    );
};

export default ClientMenuItems;
