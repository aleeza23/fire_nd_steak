import React from 'react'
import OrderSummary from './OrderSummary'
import CheckoutForm from './CheckoutForm'

const CartModal = ({items,setIsCartOpen, calculateSubtotal, subtotal, removeFromCart, isCartOpen}) => {
    return (
        <div
            className={`fixed top-0 overflow-y-auto z-40 right-0 h-full md:max-w-[400px] w-[85vw] bg-black shadow-lg transform transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'
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
                <OrderSummary items={items} calculateSubtotal={calculateSubtotal} removeFromCart={removeFromCart} />
                <CheckoutForm items={items} subtotal={subtotal} />
            </div>

        </div>
    )
}

export default CartModal