import React from 'react';
import Image from 'next/image';

const OrderSummary = ({ items, calculateSubtotal }) => {


    return (
        <div className="w-full md:w-1/2 p-6 rounded-lg bg-[#0f0f0f]">
            <h2 className="text-2xl font-bold mb-4 font-pirata-one tracking-widest text-white">Order Summary</h2>
            {items.length === 0 ? (
                <p className="text-center text-white">No items selected.</p>
            ) : (
                <div className="flex flex-col mb-4">
                    {items.map((item, index) => (
                        <React.Fragment key={item.id}>
                            <div className="flex items-center p-4 rounded-lg">
                                <div className="relative w-16 h-16 mr-4">
                                    <Image
                                        src={item.imgSrc}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, 
                                               (max-width: 768px) 50vw, 
                                               (max-width: 1024px) 33vw, 
                                               25vw"
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                    <div className="flex justify-between mt-1 text-white">
                                        <span>Quantity: {item.quantity}</span>
                                        <span>Rs. {item.price}</span>
                                    </div>
                                </div>
                            </div>
                            {index < items.length - 1 && <hr className="border-gray-600" />}
                        </React.Fragment>
                    ))}
                    <div className="flex justify-between font-bold text-white mt-4">
                        <span>Subtotal:</span>
                        <span>Rs. {calculateSubtotal()}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderSummary;
