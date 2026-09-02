import { useParams, Link } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { getProductsByCategory } from '../data/products';
import { categories } from '../data/categories';
import ProductCard from '../components/product/ProductCard';

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = categories.find((c) => c.id === categoryId);
  const products = getProductsByCategory(categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-[#07060a] flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-[#3a3028] font-sans text-sm mb-4">Category not found.</p>
          <Link to="/shop" className="text-[#c5a028] text-[11px] font-sans underline underline-offset-4">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07060a]">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[320px] flex items-end overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07060a]/20 to-[#07060a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07060a]/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <motion.p
            className="text-[10px] text-[#c5a028] tracking-[0.28em] uppercase font-sans mb-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {category.tagline}
          </motion.p>
          <motion.h1
            className="font-cinzel text-4xl lg:text-5xl text-[#e8dac6]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {category.name}
          </motion.h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Back */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-[11px] text-[#2a2018] hover:text-[#c5a028] transition-colors font-sans uppercase tracking-widest mb-8"
        >
          <ArrowLeft size={11} /> All Collections
        </Link>

        <p className="text-sm text-[#3a3028] font-sans leading-relaxed max-w-xl mb-12">
          {category.description}
        </p>

        {products.length === 0 ? (
          <div className="text-center py-20 border border-[#1d1a12]">
            <p className="text-[#2a2018] font-sans text-sm">New products coming soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
