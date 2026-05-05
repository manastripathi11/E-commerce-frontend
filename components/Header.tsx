import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#0e62af] text-white py-4 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo on left */}
        <div className="text-3xl font-bold tracking-tight">
          <Link href="/">Logo</Link>
        </div>

        {/* Search bar in center */}
        <div className="w-full md:w-auto flex-1 max-w-xl relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full bg-[#12589e] border border-blue-400/50 text-white rounded-md py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-300 text-sm"
          />
        </div>

        {/* Cart button on right */}
        <button className="bg-[#0b3874] hover:bg-[#082a5c] transition-colors flex items-center gap-2 px-5 py-2.5 rounded-md font-medium text-sm whitespace-nowrap">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Cart
        </button>
      </div>
    </header>
  );
}
