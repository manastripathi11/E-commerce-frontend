"use client";

import { useMemo, useCallback, Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useSearch } from "@/store/SearchContext";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

function FilteredProducts() {
  const { searchQuery } = useSearch();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const category = searchParams.get("category") || "All";
  const priceParam = searchParams.get("price");
  // Supports "0-1000" format or direct max number format
  const maxPrice = priceParam ? (priceParam.includes('-') ? Number(priceParam.split('-')[1]) : Number(priceParam)) : 1000;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleCategoryChange = (cat: string) => {
    router.push(pathname + "?" + createQueryString("category", cat), { scroll: false });
  };

  const handlePriceChange = (val: number) => {
    router.push(pathname + "?" + createQueryString("price", `0-${val}`), { scroll: false });
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCategory = category === "All" || product.category.toLowerCase() === category.toLowerCase();
      const matchPrice = product.price <= maxPrice;
      return matchSearch && matchCategory && matchPrice;
    });
  }, [searchQuery, category, maxPrice]);

  return (
    <div className="flex flex-col lg:flex-row gap-10 w-full">
      {/* Left side: Filters sidebar */}
      <aside className="w-full lg:w-72 shrink-0 flex flex-col gap-6">
        {/* Blue Filter Box */}
        <div className="bg-[#0e62af] text-white rounded-2xl p-7 shadow-md">
          <h2 className="text-2xl font-bold mb-8 tracking-tight">Filters</h2>
          
          {/* Category filter */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-5 text-blue-50">Category</h3>
            <div className="space-y-4">
              {["All", "Electronics", "Clothing", "Home"].map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="category-blue" 
                    value={cat}
                    checked={category.toLowerCase() === cat.toLowerCase()}
                    onChange={() => handleCategoryChange(cat)}
                    className="w-4 h-4 accent-white cursor-pointer" 
                  />
                  <span className="text-sm font-medium group-hover:opacity-80 transition-opacity">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price range slider */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-blue-50">Price</h3>
            <div className="px-1">
              <input 
                type="range" 
                min="0" 
                max="5000" 
                value={maxPrice}
                onChange={(e) => handlePriceChange(Number(e.target.value))}
                className="w-full h-1.5 bg-blue-300 rounded-lg appearance-none cursor-pointer accent-white" 
              />
              <div className="flex justify-between mt-3 text-sm font-medium text-blue-100">
                <span>0</span>
                <span>1000</span>
              </div>
            </div>
          </div>
        </div>

        {/* White Filter Box (Cacyroy) */}
        <div className="bg-[#fcfcfc] rounded-2xl p-7 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-6 text-gray-900 tracking-tight">Cacyroy</h2>
          
          <div className="mb-8">
            <div className="space-y-4">
              {["All", "Electronics", "Clothing", "Home"].map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="category-white" 
                    value={cat}
                    checked={category.toLowerCase() === cat.toLowerCase()}
                    onChange={() => handleCategoryChange(cat)}
                    className="w-4 h-4 accent-[#0e62af] cursor-pointer" 
                  />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Price</h3>
            <input 
              type="number" 
              min="0"
              value={maxPrice}
              onChange={(e) => handlePriceChange(Number(e.target.value))}
              className="w-full border border-gray-200 rounded-md py-2 px-3 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#0e62af] focus:border-[#0e62af] bg-white"
            />
          </div>
        </div>
      </aside>

      {/* Right side: Product listing grid */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-[#142d54] mb-8 tracking-tight">Product Listing</h2>
        
        {/* 3 columns desktop, 2 tablet, 1 mobile */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center text-gray-500 font-medium text-lg bg-white rounded-xl shadow-sm border border-gray-100">
            No products found matching your filters.
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="max-w-[1400px] mx-auto py-12 px-6 sm:px-8 lg:px-10">
      <Suspense fallback={<div className="py-20 text-center font-medium text-gray-500">Loading products...</div>}>
        <FilteredProducts />
      </Suspense>
    </div>
  );
}
