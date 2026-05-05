"use client";

import { useState } from 'react';
import { Product } from '@/types/product';
import { useCartStore } from '@/store/cartStore';

export default function ProductDetailClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product, quantity);
    alert('Added to cart!');
  };

  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="w-full md:w-1/2 bg-white p-8 rounded-xl flex items-center justify-center border border-gray-100 shadow-sm">
        <img src={product.image} alt={product.title} className="w-full max-w-md object-contain mix-blend-multiply" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <p className="text-sm text-[#0e62af] font-semibold uppercase tracking-wider mb-2">{product.category}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
        <p className="text-2xl font-bold text-gray-900 mb-6">${product.price}</p>
        <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>
        
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
            >-</button>
            <span className="px-4 py-2 font-medium border-x border-gray-300 min-w-[3rem] text-center">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
            >+</button>
          </div>
        </div>

        <button 
          onClick={handleAddToCart}
          className="bg-[#0e62af] hover:bg-[#0b5196] text-white font-semibold py-3 px-8 rounded-md transition-colors w-full sm:w-auto"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
