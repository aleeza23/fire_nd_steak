"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const CheckoutForm = ({ selectedItems, subtotal }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const generateWhatsAppMessage = () => {
        const itemsList = selectedItems.map(item => `${item.title} (Quantity: ${item.quantity})`).join(', ');
        return encodeURIComponent(`
            New Order:
            Name: ${name}
            Address: ${address}
            Phone Number: ${phoneNumber}
            Subtotal: ${subtotal}
            Items: ${itemsList}
        `);
    };

    return (
        <div className="w-full bg-[#0f0f0f] p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 font-pirata-one tracking-widest">Place your order </h2>
            <form className="flex flex-col gap-4">
                <label className="flex flex-col">
                    <span className="font-semibold">Name:</span>
                    <input type="text" required placeholder='Enter name...' className="p-2 rounded  bg-[#1f1f1f]  text-white border-yellow-300" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label className="flex flex-col">
                    <span className="font-semibold">Address:</span>
                    <input type="text" required placeholder='Enter address...' className="p-2 rounded  text-white bg-[#1f1f1f] border-yellow-300" value={address} onChange={(e) => setAddress(e.target.value)} />
                </label>
                <label className="flex flex-col">
                    <span className="font-semibold">Phone Number:</span>
                    <input type="text" required placeholder='Enter phone number...' className="p-2 rounded  text-white bg-[#1f1f1f] border-yellow-300" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </label>
                <Link
                    href={`https://wa.me/03175970487?text=${generateWhatsAppMessage()}`}
                    className="px-6 py-2 bg-gradient-to-r bg-yellow-300 text-black text-center rounded-full hover:shadow-lg transition"
                >
                    Place Order
                </Link>
            </form>
        </div>
    );
};

export default CheckoutForm;
