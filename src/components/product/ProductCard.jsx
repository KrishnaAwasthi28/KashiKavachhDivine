import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Eye, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const fmt = (price) => `₹${price.toLocaleString('en-IN')}`;

export default function ProductCard({ product }) {
  const [wishlist, setWishlist] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  function handleAddToCart(e) {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  }

  return (
    <motion.div
      className="
        group relative bg-[#0f0d0a] border border-[#1d1a12] overflow-hidden
        transition-colors duration-500
        hover:border-[#c5a028]/40
        hover:shadow-[0_0_28px_rgba(197,160,40,0.07)]
      "
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/product/${product.slug}`} className="block">
        
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-[#1a1710]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          {/* Image hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07060a]/70 via-[#07060a]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Quick actions */}
          <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            
            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3 text-[10px] font-sans font-semibold tracking-[0.18em] uppercase border transition-all duration-300 ${
                added
                  ? 'bg-[#2a4a2a] border-[#4f8a4f]/70 text-[#a8e0a8] shadow-[0_0_20px_rgba(79,138,79,0.18)]'
                  : `
                    bg-[#d4a72c]/95
                    text-[#17120a]
                    border-[#f0c95a]/80
                    shadow-[0_0_22px_rgba(212,167,44,0.35)]
                    hover:bg-[#e2b63d]
                    hover:border-[#f6d36a]
                    hover:shadow-[0_0_32px_rgba(212,167,44,0.52)]
                    hover:-translate-y-0.5
                  `
              }`}
            >
              <ShoppingBag size={13} />
              {added ? 'Added' : 'Add to Cart'}
            </button>

            {/* Quick View */}
            <Link
              to={`/product/${product.slug}`}
              onClick={(e) => e.stopPropagation()}
              className="
                w-11 h-11
                bg-[#120f0b]/95
                border border-[#c5a028]/30
                text-[#b8a890]
                hover:text-[#d4af37]
                hover:border-[#d4af37]/70
                hover:shadow-[0_0_16px_rgba(212,175,55,0.15)]
                transition-all duration-300
                flex items-center justify-center
                backdrop-blur-sm
              "
              aria-label="View product"
            >
              <Eye size={15} />
            </Link>
          </div>

          {/* Wishlist */}
          <button
            className="
              absolute top-3 right-3
              w-9 h-9
              bg-[#120f0b]/85
              border border-[#c5a028]/20
              backdrop-blur-sm
              text-[#b8a890]
              hover:text-red-400
              hover:border-red-400/40
              transition-all duration-300
              flex items-center justify-center
              opacity-0 group-hover:opacity-100
            "
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setWishlist(!wishlist);
            }}
            aria-label={wishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart
              size={15}
              className={wishlist ? 'fill-red-400 text-red-400' : ''}
            />
          </button>

          {/* Sale badge */}
          {product.originalPrice && (
            <div className="absolute top-3 left-3 bg-[#d4a72c] text-[#17120a] border border-[#f0c95a]/60 text-[9px] font-bold px-2.5 py-1 uppercase tracking-wider font-sans shadow-[0_0_12px_rgba(212,167,44,0.18)]">
              Sale
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          
          {/* Category */}
          <p className="text-[10px] text-[#8c7c65] uppercase tracking-[0.2em] mb-1.5 font-sans">
            {product.category}
          </p>

          {/* Product Name */}
          <h3 className="text-sm text-[#e8dac6] font-serif leading-snug mb-2 line-clamp-2">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={9}
                  className={
                    i < Math.floor(product.rating)
                      ? 'fill-[#d4af37] text-[#d4af37]'
                      : 'text-[#2a241a]'
                  }
                />
              ))}
            </div>

            <span className="text-[10px] text-[#5e5244] font-sans">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            
            {/* Glowing Price */}
            <span
              className="
                inline-flex items-center
                bg-[#c5a028]/[0.13]
                border border-[#c5a028]/45
                px-3 py-1
                text-base text-[#e0b945]
                font-cinzel
                font-bold
                shadow-[0_0_16px_rgba(197,160,40,0.13)]
                transition-all duration-300
                group-hover:bg-[#c5a028]/[0.18]
                group-hover:border-[#d4af37]/65
                group-hover:shadow-[0_0_22px_rgba(197,160,40,0.22)]
              "
            >
              {fmt(product.price)}
            </span>

            {/* Original Price
            {product.originalPrice && (
              <span className="text-xs text-[#554b3e] line-through font-sans">
                {fmt(product.originalPrice)}
              </span>
            )} */}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}