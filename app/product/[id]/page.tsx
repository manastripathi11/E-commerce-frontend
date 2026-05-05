import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import ProductDetailClient from './ProductDetailClient';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-6 md:px-8">
      <ProductDetailClient product={product} />
    </div>
  );
}
