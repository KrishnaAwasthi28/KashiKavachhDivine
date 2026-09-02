import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Search, SlidersHorizontal } from "lucide-react";

import ProductCard from "../components/product/ProductCard";
import SectionHeader from "../components/common/SectionHeader";

import { products } from "../data/products";
import { categories } from "../data/categories";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Best Rated" },
  { value: "name", label: "Name A–Z" },
];

const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "₹0 – ₹1,000", min: 0, max: 1000 },
  { label: "₹1,000 – ₹5,000", min: 1000, max: 5000 },
  { label: "₹5,000 – ₹15,000", min: 5000, max: 15000 },
  { label: "₹15,000+", min: 15000, max: Infinity },
];

function FilterPanel({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  clearFilters,
  onClose,
}) {
  return (
    <div className="space-y-9">
      {/* Collection */}
      <div>
        <h3 className="text-[11px] font-cinzel text-[#b8942d] uppercase tracking-[0.24em] mb-5">
          Collection
        </h3>

        <div className="space-y-2">
          <button
            onClick={() => {
              setSelectedCategory("");
              onClose?.();
            }}
            className={`w-full text-left text-[15px] font-sans py-2 transition-all duration-300 ${
              !selectedCategory
                ? "text-[#d8b64a] drop-shadow-[0_0_8px_rgba(197,160,40,0.35)]"
                : "text-[#8f8068] hover:text-[#e8dac6]"
            }`}
          >
            All Products
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                onClose?.();
              }}
              className={`group w-full text-left text-[15px] font-sans py-2 transition-all duration-300 flex items-center justify-between ${
                selectedCategory === cat.id
                  ? "text-[#d8b64a] drop-shadow-[0_0_8px_rgba(197,160,40,0.35)]"
                  : "text-[#8f8068] hover:text-[#e8dac6]"
              }`}
            >
              <span>{cat.name}</span>

              <span
                className={`text-[10px] transition-colors ${
                  selectedCategory === cat.id
                    ? "text-[#c5a028]"
                    : "text-[#665b4a] group-hover:text-[#b8942d]"
                }`}
              >
                {cat.productCount}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="pt-2 border-t border-[#2d271d]">
        <h3 className="text-[11px] font-cinzel text-[#b8942d] uppercase tracking-[0.24em] mb-5 pt-6">
          Price Range
        </h3>

        <div className="space-y-2">
          {priceRanges.map((range) => {
            const isActive =
              priceRange[0] === range.min && priceRange[1] === range.max;

            return (
              <button
                key={range.label}
                onClick={() => setPriceRange([range.min, range.max])}
                className={`w-full text-left text-[14px] font-sans py-1.5 transition-all duration-300 ${
                  isActive
                    ? "text-[#d8b64a] drop-shadow-[0_0_8px_rgba(197,160,40,0.3)]"
                    : "text-[#8f8068] hover:text-[#e8dac6]"
                }`}
              >
                {range.label}
              </button>
            );
          })}
        </div>
      </div>

      <button
        onClick={clearFilters}
        className="text-[11px] text-[#8f8068] hover:text-[#d8b64a] hover:drop-shadow-[0_0_6px_rgba(197,160,40,0.35)] font-sans uppercase tracking-widest transition-all duration-300"
      >
        Clear All Filters
      </button>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filterOpen, setFilterOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");

  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "",
  );

  const [priceRange, setPriceRange] = useState([0, Infinity]);

  useEffect(() => {
    const category = searchParams.get("category");
    setSelectedCategory(category || "");
  }, [searchParams]);

  const filtered = useMemo(() => {
    let items = [...products];

    if (selectedCategory) {
      items = items.filter((product) => product.category === selectedCategory);
    }

    if (search.trim()) {
      const query = search.toLowerCase();

      items = items.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query),
      );
    }

    items = items.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1],
    );

    switch (sort) {
      case "price-asc":
        items.sort((a, b) => a.price - b.price);
        break;

      case "price-desc":
        items.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        items.sort((a, b) => b.rating - a.rating);
        break;

      case "name":
        items.sort((a, b) => a.name.localeCompare(b.name));
        break;

      default:
        items.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return items;
  }, [selectedCategory, search, sort, priceRange]);

  function clearFilters() {
    setSelectedCategory("");
    setSearch("");
    setSort("featured");
    setPriceRange([0, Infinity]);
    setSearchParams({});
  }

  function handleCategoryChange(id) {
    setSelectedCategory(id);

    if (id) {
      setSearchParams({
        category: id,
      });
    } else {
      setSearchParams({});
    }
  }

  const activeCategoryName = categories.find(
    (category) => category.id === selectedCategory,
  )?.name;

  return (
    <div className="min-h-screen bg-[#07060a]">
      {/* ═══════════════ SHOP HERO ═══════════════ */}
      {/* Navbar is now transparent over this image */}
      <section className="relative h-[52vh] min-h-[430px] lg:h-[58vh] lg:min-h-[500px] overflow-hidden border-b border-[#4a3c1e]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/sacred-shop.jpg"
            alt="Sacred collection inspired by Kashi"
            className="w-full h-full object-cover brightness-110 contrast-105"
          />

          {/* Softer overall cinematic darkness */}
          <div className="absolute inset-0 bg-[#07060a]/30" />

          {/* Left overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07060a]/70 via-[#07060a]/35 to-[#07060a]/10" />

          {/* Top overlay for transparent navbar readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07060a]/45 via-transparent to-[#07060a]" />

          {/* Golden atmospheric glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#c5a028]/15 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <motion.div
            className="text-center max-w-3xl pt-20 lg:pt-24"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <SectionHeader
              eyebrow="Sacred Shop"
              title="The Sacred Collection"
              subtitle="Authentic products from the heart of Kashi, curated with care."
            />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ SHOP CONTENT ═══════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        {/* Toolbar */}
        <div className="flex items-center gap-3 mb-8 flex-wrap">
          {/* Search */}
          <div className="relative flex-1 min-w-48 max-w-xs">
            <Search
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#b8942d] drop-shadow-[0_0_6px_rgba(197,160,40,0.4)]"
            />

            <input
              type="text"
              placeholder="Search sacred products…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#11100b] border border-[#4a3c1e] text-[#f0e3cf] placeholder-[#85765d] pl-10 pr-4 py-3 text-sm font-sans outline-none transition-all duration-300 focus:border-[#c5a028] focus:shadow-[0_0_18px_rgba(197,160,40,0.12)]"
            />
          </div>

          <div className="flex items-center gap-2 ml-auto">
            {/* Sort */}
            <div className="relative hidden sm:block">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-[#11100b] border border-[#4a3c1e] text-[#cbbda4] text-[11px] font-sans uppercase tracking-wider px-5 py-3 pr-10 outline-none focus:border-[#c5a028] focus:shadow-[0_0_16px_rgba(197,160,40,0.1)] transition-all duration-300 cursor-pointer"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <ChevronDown
                size={13}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#c5a028] pointer-events-none"
              />
            </div>

            {/* Mobile Filter */}
            <button
              onClick={() => setFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 border border-[#4a3c1e] text-[#cbbda4] text-[11px] font-sans uppercase tracking-wider px-4 py-3 hover:border-[#c5a028] hover:text-[#e8dac6] hover:shadow-[0_0_14px_rgba(197,160,40,0.12)] transition-all duration-300"
            >
              <SlidersHorizontal size={14} className="text-[#c5a028]" />
              Filter
            </button>
          </div>
        </div>

        {/* Active Filter */}
        {activeCategoryName && (
          <div className="flex items-center gap-3 mb-7">
            <span className="text-[12px] text-[#9a8c74] font-sans">
              Filtered by:
            </span>

            <div className="flex items-center gap-2 bg-[#c5a028]/10 border border-[#c5a028]/45 shadow-[0_0_14px_rgba(197,160,40,0.08)] text-[#d8b64a] text-[11px] px-3.5 py-1.5 font-sans">
              {activeCategoryName}

              <button
                onClick={clearFilters}
                aria-label="Clear filter"
                className="hover:text-[#fff1c9] transition-colors"
              >
                <X size={11} />
              </button>
            </div>
          </div>
        )}

        <div className="flex gap-10 lg:gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-48 flex-shrink-0 pt-2">
            <FilterPanel
              selectedCategory={selectedCategory}
              setSelectedCategory={handleCategoryChange}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              clearFilters={clearFilters}
            />
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Product Count */}
            <p className="text-[12px] text-[#8f8068] font-sans mb-7">
              <span className="text-[#d8b64a]">{filtered.length}</span> product
              {filtered.length !== 1 ? "s" : ""}
            </p>

            {filtered.length === 0 ? (
              <div className="text-center py-24 border border-[#2d271d] bg-[#0b0a07]">
                <p className="text-[#a99a80] font-sans text-sm mb-5">
                  No products found.
                </p>

                <button
                  onClick={clearFilters}
                  className="text-[11px] text-[#d8b64a] hover:text-[#fff0bd] underline underline-offset-4 font-sans transition-all duration-300 hover:drop-shadow-[0_0_6px_rgba(197,160,40,0.45)]"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ═══════════════ MOBILE FILTER DRAWER ═══════════════ */}
      <AnimatePresence>
        {filterOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-[2px] z-50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFilterOpen(false)}
            />

            <motion.div
              className="fixed top-0 left-0 bottom-0 w-72 max-w-full bg-[#0d0c08] z-50 p-6 overflow-y-auto border-r border-[#4a3c1e] shadow-[10px_0_40px_rgba(0,0,0,0.45)]"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center justify-between mb-8 pb-5 border-b border-[#2d271d]">
                <h2 className="text-[12px] font-cinzel text-[#e8dac6] uppercase tracking-[0.22em]">
                  Filters
                </h2>

                <button
                  onClick={() => setFilterOpen(false)}
                  className="text-[#9a8c74] hover:text-[#d8b64a] transition-colors"
                  aria-label="Close filters"
                >
                  <X size={20} />
                </button>
              </div>

              <FilterPanel
                selectedCategory={selectedCategory}
                setSelectedCategory={handleCategoryChange}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                clearFilters={clearFilters}
                onClose={() => setFilterOpen(false)}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
