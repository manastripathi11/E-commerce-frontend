import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6 md:px-8">
      <div className="flex flex-col md:flex-row gap-8 w-full">
        {/* Left side: Filters sidebar */}
        <aside className="w-full md:w-64 lg:w-72 shrink-0">
          <div className="bg-[#0e62af] text-white rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Filters</h2>
            
            {/* Category filter */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Category</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="category" defaultChecked className="w-4 h-4 accent-white cursor-pointer" />
                  <span className="text-sm font-medium">All</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="category" className="w-4 h-4 accent-white cursor-pointer" />
                  <span className="text-sm font-medium">Electronics</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="category" className="w-4 h-4 accent-white cursor-pointer" />
                  <span className="text-sm font-medium">Clothing</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="category" className="w-4 h-4 accent-white cursor-pointer" />
                  <span className="text-sm font-medium">Home</span>
                </label>
              </div>
            </div>

            {/* Price range slider */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Price</h3>
              <div className="px-1">
                <input 
                  type="range" 
                  min="0" 
                  max="1000" 
                  defaultValue="1000" 
                  className="w-full h-1.5 bg-blue-300 rounded-lg appearance-none cursor-pointer accent-white" 
                />
                <div className="flex justify-between mt-2 text-sm font-medium">
                  <span>0</span>
                  <span>1000</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Right side: Product listing grid */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#142d54] mb-6">Product Listing</h2>
          
          {/* 3 columns desktop, 2 tablet, 1 mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
