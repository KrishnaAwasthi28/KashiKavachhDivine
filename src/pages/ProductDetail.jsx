import { useState } from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Heart,
  Star,
  Minus,
  Plus,
  Check,
  Truck,
  Shield,
} from "lucide-react";
import { getProductBySlug, getProductsByCategory } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/product/ProductCard";
import SectionHeader from "../components/common/SectionHeader";

const fmt = (price) => `₹${price.toLocaleString("en-IN")}`;

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#07060a] flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-[#9a8d78] font-sans text-sm mb-5">
            Product not found.
          </p>

          <Link
            to="/shop"
            className="
              inline-flex
              items-center
              justify-center
              border
              border-[#c5a028]/50
              text-[#d4af37]
              px-6
              py-3
              text-[11px]
              uppercase
              tracking-widest
              font-sans
              transition-all
              duration-300
              hover:bg-[#c5a028]/10
              hover:border-[#d4af37]
              hover:shadow-[0_0_18px_rgba(212,175,55,0.15)]
            "
          >
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  function handleAddToCart() {
    addItem(product, quantity);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2500);
  }

  const images = product.images || [product.image];

  return (
    <div className="min-h-screen bg-[#07060a] pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* ═══════════════ BREADCRUMB ═══════════════ */}
        <nav className="flex flex-wrap items-center gap-2 text-[11px] font-sans mb-10">
          <Link
            to="/"
            className="
              text-[#887c69]
              hover:text-[#d4af37]
              transition-colors
              duration-200
            "
          >
            Home
          </Link>

          <span className="text-[#5a5040]">/</span>

          <Link
            to="/shop"
            className="
              text-[#887c69]
              hover:text-[#d4af37]
              transition-colors
              duration-200
            "
          >
            Shop
          </Link>

          <span className="text-[#5a5040]">/</span>

          <span className="text-[#a89a84] capitalize">{product.category}</span>

          <span className="text-[#5a5040]">/</span>

          <span className="text-[#d4af37]">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
          {/* ═══════════════ PRODUCT IMAGES ═══════════════ */}
          <div>
            <div
              className="
                relative
                aspect-square
                bg-[#0f0d0a]
                border
                border-[#c5a028]/20
                overflow-hidden
                mb-4
                shadow-[0_0_35px_rgba(197,160,40,0.04)]
              "
            >
              <motion.img
                key={selectedImage}
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Subtle golden image overlay */}
              <div className="absolute inset-0 bg-[#c5a028]/[0.02] pointer-events-none" />
            </div>

            {/* Image Thumbnails */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`
                      aspect-square
                      overflow-hidden
                      border-2
                      transition-all
                      duration-300
                      ${
                        selectedImage === i
                          ? "border-[#d4af37] shadow-[0_0_14px_rgba(212,175,55,0.25)]"
                          : "border-[#1d1a12] hover:border-[#c5a028]/60"
                      }
                    `}
                    aria-label={`View image ${i + 1}`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ═══════════════ PRODUCT DETAILS ═══════════════ */}
          <div>
            {/* Category */}
            <p
              className="
                text-[11px]
                text-[#d4af37]
                uppercase
                tracking-[0.28em]
                font-sans
                mb-4
                drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]
              "
            >
              {product.category}
            </p>

            {/* Product Name */}
            <h1
              className="
                font-cinzel
                text-3xl
                sm:text-4xl
                text-[#f0e5d2]
                mb-6
                leading-tight
                drop-shadow-[0_0_16px_rgba(232,218,198,0.08)]
              "
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-7">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < Math.floor(product.rating)
                        ? "fill-[#d4af37] text-[#d4af37] drop-shadow-[0_0_4px_rgba(212,175,55,0.35)]"
                        : "text-[#4a4030]"
                    }
                  />
                ))}
              </div>

              <span className="text-sm text-[#a89a84] font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-8 pb-8 border-b border-[#c5a028]/20">
              <div
                className="
      inline-flex
      items-center
      gap-4
      px-5
      py-4
      bg-gradient-to-r
      from-[#2a1d05]
      via-[#3b2a08]
      to-[#1a1205]
      border
      border-[#d4af37]/45
      shadow-[0_0_20px_rgba(212,175,55,0.16),inset_0_0_18px_rgba(212,175,55,0.05)]
    "
              >
                <span
                  className="
        text-2xl
        sm:text-2xl
        font-cinzel
        text-[#f0cf5a]
        drop-shadow-[0_0_12px_rgba(240,207,90,0.45)]
      "
                >
                  {fmt(product.price)}
                </span>

                {product.originalPrice && (
                  <span className="text-base text-[#9a8d78] line-through font-sans">
                    {fmt(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-[15px] text-[#a89a84] font-sans leading-relaxed mb-8">
              {product.description}
            </p>

            {/* ═══════════════ PRODUCT DETAILS BOX ═══════════════ */}
            {product.details && (
              <div
                className="
                  group
                  mb-8
                  bg-[#0f0d0a]
                  border
                  border-[#c5a028]/20
                  p-6
                  transition-all
                  duration-300
                  hover:border-[#c5a028]/45
                  hover:shadow-[0_0_22px_rgba(197,160,40,0.06)]
                "
              >
                <h3
                  className="
                    text-[13px]
                    font-cinzel
                    text-[#c5a028]
                    uppercase
                    tracking-[0.22em]
                    mb-5
                    drop-shadow-[0_0_6px_rgba(212,175,55,0.25)]
                  "
                >
                  Product Details
                </h3>

                <div className="space-y-3">
                  {Object.entries(product.details).map(([key, value]) => (
                    <div
                      key={key}
                      className="
                        flex
                        items-start
                        justify-between
                        gap-6
                        border-b
                        border-[#c5a028]/[0.08]
                        pb-2
                        last:border-0
                      "
                    >
                      <span className="text-[12px] text-[#887c69] font-sans capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </span>

                      <span className="text-[12px] text-[#c8baa5] font-sans text-right">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ═══════════════ QUANTITY + ADD TO CART ═══════════════ */}
            <div className="flex items-center gap-3 mb-6">
              {/* Quantity */}
              <div
                className="
                  flex
                  items-center
                  border
                  border-[#c5a028]/30
                  bg-[#0f0d0a]
                "
              >
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="
                    w-11
                    h-12
                    flex
                    items-center
                    justify-center
                    text-[#9a8d78]
                    hover:text-[#d4af37]
                    hover:bg-[#c5a028]/5
                    transition-all
                    duration-200
                  "
                  aria-label="Decrease quantity"
                >
                  <Minus size={15} />
                </button>

                <span className="w-10 text-center text-sm text-[#f0e5d2] font-sans">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="
                    w-11
                    h-12
                    flex
                    items-center
                    justify-center
                    text-[#9a8d78]
                    hover:text-[#d4af37]
                    hover:bg-[#c5a028]/5
                    transition-all
                    duration-200
                  "
                  aria-label="Increase quantity"
                >
                  <Plus size={15} />
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className={`
                  flex-1
                  flex
                  items-center
                  justify-center
                  gap-2
                  py-3.5
                  px-5
                  text-[11px]
                  font-semibold
                  tracking-[0.2em]
                  uppercase
                  transition-all
                  duration-300
                  font-sans
                  ${
                    added
                      ? `
                        bg-[#28452a]
                        text-[#b8e0a0]
                        border
                        border-[#6ab86a]/40
                        shadow-[0_0_22px_rgba(106,184,106,0.18)]
                      `
                      : `
                        bg-[#d4af37]
                        text-[#07060a]
                        shadow-[0_0_18px_rgba(212,175,55,0.32)]
                        hover:bg-[#e5c65c]
                        hover:shadow-[0_0_32px_rgba(212,175,55,0.5)]
                        hover:-translate-y-[1px]
                      `
                  }
                `}
              >
                {added ? (
                  <>
                    <Check size={15} />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag size={15} />
                    Add to Cart
                  </>
                )}
              </button>

              {/* Wishlist */}
              <button
                onClick={() => setWishlist(!wishlist)}
                className="
                  w-12
                  h-12
                  border
                  border-[#c5a028]/25
                  bg-[#0f0d0a]
                  flex
                  items-center
                  justify-center
                  text-[#887c69]
                  hover:border-[#d4af37]
                  hover:text-[#d4af37]
                  hover:shadow-[0_0_15px_rgba(212,175,55,0.12)]
                  transition-all
                  duration-300
                "
                aria-label={
                  wishlist ? "Remove from wishlist" : "Add to wishlist"
                }
              >
                <Heart
                  size={16}
                  className={
                    wishlist
                      ? "fill-[#d4af37] text-[#d4af37] drop-shadow-[0_0_6px_rgba(212,175,55,0.4)]"
                      : ""
                  }
                />
              </button>
            </div>

            {/* ═══════════════ TRUST BADGES ═══════════════ */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-4
                pt-3
                border-t
                border-[#c5a028]/10
              "
            >
              {[
                {
                  icon: Truck,
                  text: "Packaged and delivered with care",
                },
                {
                  icon: Shield,
                  text: "Authenticity assured",
                },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="
                    flex
                    items-center
                    gap-2
                    text-[11px]
                    text-[#9a8d78]
                    font-sans
                  "
                >
                  <Icon
                    size={14}
                    className="
                      text-[#d4af37]
                      drop-shadow-[0_0_5px_rgba(212,175,55,0.3)]
                    "
                  />

                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════ RELATED PRODUCTS ═══════════════ */}
        {related.length > 0 && (
          <div className="border-t border-[#c5a028]/15 pt-16">
            <SectionHeader
              eyebrow="You May Also Like"
              title="Related Sacred Products"
              className="mb-10"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
