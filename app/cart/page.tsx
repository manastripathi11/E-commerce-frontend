"use client";

import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="max-w-7xl mx-auto py-20 px-6 text-center text-gray-500">Loading cart...</div>;
  }

  const totalPrice = items.reduce((total, item) => total + item.product.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto py-20 px-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Cart is Empty</h1>
        <Link href="/" className="text-[#0e62af] font-semibold hover:underline">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-6 md:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3 space-y-4">
          {items.map((item) => (
            <div key={item.product.id} className="flex flex-col sm:flex-row items-center gap-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="w-24 h-24 shrink-0 bg-gray-50 rounded-md p-2 flex items-center justify-center">
                <img src={item.product.image} alt={item.product.title} className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <Link href={`/product/${item.product.id}`} className="font-semibold text-lg hover:text-[#0e62af] transition-colors">
                  {item.product.title}
                </Link>
                <p className="text-gray-600">${item.product.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100"
                >-</button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100"
                >+</button>
              </div>
              <div className="font-bold text-lg w-20 text-right">
                ${item.product.price * item.quantity}
              </div>
              <button 
                onClick={() => removeItem(item.product.id)}
                className="text-red-500 hover:text-red-700 font-semibold ml-4"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/3">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-4 text-lg">
              <span>Total:</span>
              <span className="font-bold">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-[#0e62af] hover:bg-[#0b5196] text-white font-semibold py-3 rounded-md transition-colors">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
