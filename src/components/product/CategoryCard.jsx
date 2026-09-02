import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CategoryCard({ category, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        to={`/shop?category=${category.id}`}
        className="group block relative overflow-hidden bg-[#0f0d0a]"
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1710]">
          
          {/* Image */}
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />

          {/* Dark gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07060a] via-[#07060a]/45 to-transparent" />

          {/* Slight warm overlay */}
          <div className="absolute inset-0 bg-[#c5a028]/[0.02] group-hover:bg-[#c5a028]/[0.04] transition-colors duration-500" />

          {/* Gold border */}
          <div className="absolute inset-0 border border-[#c5a028]/10 group-hover:border-[#c5a028]/50 transition-all duration-500" />

          {/* Content */}
          <div className="absolute bottom-0 inset-x-0 p-5">
            
            {/* Tagline */}
            <p className="text-[10px] text-[#d4af37] uppercase tracking-[0.28em] mb-2 font-sans">
              {category.tagline}
            </p>

            {/* Category Name */}
            <h3 className="text-lg font-cinzel text-[#e8dac6] mb-5">
              {category.name}
            </h3>

            {/* Explore Button */}
            <div
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                bg-[#d4a72c]/90
                text-[#17120a]
                border
                border-[#f0c95a]/70
                px-6
                py-3
                text-[10px]
                font-semibold
                tracking-[0.22em]
                uppercase
                font-sans
                shadow-[0_0_20px_rgba(212,167,44,0.28)]
                transition-all
                duration-300
                group-hover:bg-[#e2b63d]
                group-hover:shadow-[0_0_30px_rgba(212,167,44,0.45)]
                group-hover:-translate-y-0.5
              "
            >
              <span>Explore</span>

              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>

          </div>
        </div>
      </Link>
    </motion.div>
  );
}