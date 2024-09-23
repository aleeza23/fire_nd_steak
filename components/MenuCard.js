import React, { useState } from 'react';
import Image from 'next/image';
import Loader from './Loader';

const MenuCard = ({ menuItem, selectedItems, setSelectedItems,setIsCartOpen  }) => {
    const [itemQuantities, setItemQuantities] = useState({});

    const handleAddToCart = (item) => {
        const quantity = itemQuantities[item.id] || 1; // Get the quantity or default to 1
        const existingItemIndex = selectedItems.findIndex(selectedItem => selectedItem.id === item.id);
        let updatedItems;

        if (existingItemIndex > -1) {
            updatedItems = [...selectedItems];
            updatedItems[existingItemIndex].quantity = quantity; // Set the new quantity
        } else {
            updatedItems = [...selectedItems, { ...item, quantity }];
        }

        setSelectedItems(updatedItems); // Update selected items in parent
        setIsCartOpen(true)
       
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

    return (
        <div className="container  mx-auto px-4 py-10 text-white">
          
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {menuItem.subMenuItems.map((subItem) => (
                        <div key={subItem.id} className="flex flex-col h-full">
                            <div className="relative w-full h-[10rem] overflow-hidden rounded-lg mb-4">
                                <Image
                                    src={subItem.imgSrc}
                                    alt={subItem.title}
                                    loading='lazy'
                                    fill
                                    sizes="(max-width: 640px) 100vw, 
                                          (max-width: 768px) 50vw, 
                                          (max-width: 1024px) 33vw, 
                                          25vw"
                                    className="w-full h-[20px] object-cover"
                                />
                            </div>
                            <div className="flex-grow">
                                <h6 className="text-white font-semibold mb-2 text-md">{subItem.title}</h6>
                                <p className="text-white mb-4">Rs. {subItem.price}</p>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-2">
                                    <button className="bg-gray-700 text-white px-2 rounded" onClick={() => handleDecreaseQuantity(subItem.id)}>-</button>
                                    <span className="text-white">{itemQuantities[subItem.id] || 1}</span>
                                    <button className="bg-gray-700 text-white px-2 rounded" onClick={() => handleIncreaseQuantity(subItem.id)}>+</button>
                                </div>
                            </div>
                            <button className="bg-yellow-300 text-black w-full rounded-full" onClick={() => handleAddToCart(subItem)}>Add to cart</button>
                        </div>
                    ))}
                </div>
            
        </div>
    );
};

export default MenuCard;
