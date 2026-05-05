"use client";

import React from 'react';
import { Product } from '@/types/product';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to the product detail page when clicking the button
    addItem(product, 1);
  };

  return (
    <Link href={`/product/${product.id}`} className="bg-[#fcfcfc] rounded-lg p-5 flex flex-col h-full shadow-sm hover:shadow-md transition-all duration-200 block group">
      {/* Product Image */}
      <div className="relative w-full aspect-square mb-4 bg-transparent rounded-md overflow-hidden flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.title}
          className="object-contain w-full h-full mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      
      {/* Product Info */}
      <div className="flex flex-col flex-1">
        <h3 className="text-[1.1rem] font-bold text-gray-900 leading-tight mb-1 group-hover:text-[#0e62af] transition-colors">
          {product.title}
        </h3>
        <p className="text-md font-bold text-gray-800 mb-4">
          ${product.price}
        </p>
        
        {/* Add to Cart Button */}
        <button 
          onClick={handleAddToCart}
          className="mt-auto self-start bg-[#0e62af] hover:bg-[#0b5196] text-white font-medium py-2 px-5 rounded-md transition-colors text-sm"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}
