import React from 'react';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-[#fcfcfc] rounded-lg p-5 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Product Image */}
      <div className="relative w-full aspect-square mb-4 bg-transparent rounded-md overflow-hidden flex items-center justify-center">
        {/* Using standard img tag for external urls to avoid Next.js domain config requirements in this setup */}
        <img 
          src={product.image} 
          alt={product.title}
          className="object-contain w-full h-full mix-blend-multiply"
          loading="lazy"
        />
      </div>
      
      {/* Product Info */}
      <div className="flex flex-col flex-1">
        <h3 className="text-[1.1rem] font-bold text-gray-900 leading-tight mb-1">
          {product.title}
        </h3>
        <p className="text-md font-bold text-gray-800 mb-4">
          ${product.price}
        </p>
        
        {/* Add to Cart Button */}
        <button className="mt-auto self-start bg-[#0e62af] hover:bg-[#0b5196] text-white font-medium py-2 px-5 rounded-md transition-colors text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
