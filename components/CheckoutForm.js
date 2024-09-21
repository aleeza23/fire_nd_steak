"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const CheckoutForm = ({ selectedItems, subtotal }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const isFormValid = () => name && address && phoneNumber;

    const generateWhatsAppMessage = () => {
        const itemsList = selectedItems
            .map(item => `• ${item.title} (Quantity: ${item.quantity})`)
            .join('\n');

        return encodeURIComponent(`
*New Order:*
Name: ${name}
Address: ${address}
Phone Number: ${phoneNumber}

*Items:*
${itemsList}
*Subtotal: Rs. ${subtotal}*
        `);
    };

    return (
        <div className="w-full bg-[#0f0f0f] p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white font-pirata-one tracking-widest">Place Your Order</h2>
            <form className="flex flex-col gap-4 text-white">
                <label className="flex flex-col">
                    <span className="font-semibold">Name:</span>
                    <input
                        type="text"
                        required
                        placeholder='Enter name...'
                        className="p-2 rounded bg-[#1f1f1f] text-white border-yellow-300"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label className="flex flex-col">
                    <span className="font-semibold">Phone Number:</span>
                    <input
                        type="text"
                        required
                        placeholder='Enter phone number...'
                        className="p-2 rounded text-white bg-[#1f1f1f] border-yellow-300"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </label>
                <label className="flex flex-col">
                    <span className="font-semibold">Address:</span>
                    <textarea
                        type="text"
                        required
                        rows={10}
                        placeholder='Enter address...'
                        className="p-2 rounded text-white bg-[#1f1f1f] border-yellow-300"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </label>
                <Link
                    href={`https://wa.me/447360506217?text=${generateWhatsAppMessage()}`}
                    className={`px-6 py-2 text-center rounded-full transition ${isFormValid() ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:shadow-lg' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
                    style={{ pointerEvents: isFormValid() ? 'auto' : 'none' }}
                >
                    Place Order
                </Link>
            </form>
        </div>
    );
};

export default CheckoutForm;
