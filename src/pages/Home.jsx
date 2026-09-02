import { useRef, useState } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Award, Truck, Leaf, ArrowRight, Star } from "lucide-react";
import SectionHeader from "../components/common/SectionHeader";
import CategoryCard from "../components/product/CategoryCard";
import ProductCard from "../components/product/ProductCard";
import PackageCard from "../components/travel/PackageCard";
import { categories } from "../data/categories";
import { getFeaturedProducts } from "../data/products";
import { travelPackages } from "../data/travelPackages";
import { testimonials } from "../data/testimonials";

const trust = [
  {
    icon: Shield,
    label: "Authentic Sourcing",
    desc: "Directly from Kashi artisans",
  },
  {
    icon: Award,
    label: "Heritage Craftsmanship",
    desc: "Centuries of living tradition",
  },
  { icon: Truck, label: "Careful Delivery", desc: "Packaged with reverence" },
  {
    icon: Leaf,
    label: "Responsible Practice",
    desc: "Ethical and transparent",
  },
];

function GoldDivider() {
  return (
    <div className="flex items-center gap-3 my-2">
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#c5a028]/40" />
      <div className="w-1 h-1 bg-[#c5a028] rotate-45" />
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#c5a028]/40" />
    </div>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const featuredProducts = getFeaturedProducts().slice(0, 4);
  const featuredPackages = travelPackages.filter((p) => p.featured);

  function handleSubscribe(e) {
    e.preventDefault();
    if (email) setSubscribed(true);
  }

  return (
    <div className="bg-[#07060a]">
      {/* ═══════════════ HERO ═══════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Parallax background */}
        <motion.div className="absolute inset-0" style={{ y: heroImgY }}>
          <img
            src="/kashi-kavach-hero-image.png"
            alt="Sacred Kashi illuminated at night"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07060a]/55 via-[#07060a]/32 to-[#07060a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07060a]/62 via-[#07060a]/15 to-transparent" />
        </motion.div>

        {/* Decorative vertical gold line */}
        <div className="absolute left-8 lg:left-16 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#c5a028]/20 to-transparent hidden lg:block" />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-2xl">
            {/* Announcement */}
            <motion.div
              className="inline-flex items-center gap-2.5 border border-[#c5a028]/40 bg-[#c5a028]/8 px-4 py-2 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              <span className="w-1.5 h-1.5 bg-[#c5a028] rounded-full" />
              <span className="text-[13px] text-[#c5a028] uppercase tracking-[0.28em] font-sans">
                Sacred Collection 2026 — Now Available
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="font-cinzel text-4xl sm:text-5xl lg:text-6xl xl:text-[70px] text-[#e8dac6] leading-[1.08] mb-6"
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Ancient Kashi, <br className="hidden sm:block" />
              <span className="text-[#c5a028]">Brought</span> to Your World
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="font-serif italic text-xl text-[#b8a890] mb-10 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
            >
              Sacred heritage, authentic craftsmanship, and the living spirit of
              Varanasi — curated for the modern seeker.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Link
                to="/shop"
                className="group inline-flex items-center justify-center gap-2 bg-[#c5a028] text-[#07060a] px-8 py-4 text-[11px] font-semibold tracking-[0.2em] uppercase font-sans border border-[#e0bd3f] shadow-[0_0_20px_rgba(197,160,40,0.3)] hover:bg-[#d4b545] hover:shadow-[0_0_35px_rgba(197,160,40,0.55)] hover:-translate-y-[1px] transition-all duration-300"
              >
                <span className="group-hover:tracking-[0.23em] transition-all duration-300">
                  Explore Sacred Collection
                </span>

                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/travel"
                className="inline-flex items-center justify-center gap-2 border border-[#c5a028]/50 text-[#c5a028] px-8 py-4 text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-[#c5a028]/10 transition-all duration-200 font-sans"
              >
                Discover Experiences
              </Link>
            </motion.div>

            {/* Social proof */}
            {/* <motion.div
              className="flex items-center gap-5 mt-14"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <div className="flex -space-x-1.5">
                {['R', 'A', 'P', 'V'].map((l, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-[#1a1710] border-2 border-[#07060a] flex items-center justify-center"
                  >
                    <span className="text-[10px] text-[#c5a028] font-cinzel">{l}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={11} className="fill-[#c5a028] text-[#c5a028]" />
                  ))}
                </div>
                <p className="text-[11px] text-[#3a3028] font-sans">
                  Trusted by thousands of seekers across India
                </p>
              </div>
            </motion.div> */}
          </div>
        </motion.div>

        {/* Scroll pulse */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="text-[9px] text-[#3a3028] uppercase tracking-[0.3em] font-sans">
            Scroll
          </span>
          <motion.div
            className="w-[1px] h-8 bg-gradient-to-b from-[#c5a028] to-transparent"
            animate={{ scaleY: [0, 1, 0], y: [0, 6, 14] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ═══════════════ TRUST STRIP ════════════════ */}
      <section className="relative overflow-hidden border-y border-[#3a3020] bg-[#0e0d09]">
        {/* Subtle warm background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#c5a028]/[0.05] via-transparent to-[#c5a028]/[0.05]" />

        {/* Soft top glow */}
        <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-[#c5a028]/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-11">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {trust.map((item, i) => (
              <motion.div
                key={item.label}
                className="group flex items-center gap-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {/* Icon */}
                <div className="w-12 h-12 border border-[#c5a028]/50 bg-[#c5a028]/[0.06] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-[#d4af37] group-hover:bg-[#c5a028]/[0.12] group-hover:shadow-[0_0_18px_rgba(197,160,40,0.12)]">
                  <item.icon
                    size={22}
                    className="text-[#d4af37] transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_6px_rgba(212,175,55,0.25)]"
                  />
                </div>

                {/* Text */}
                <div>
                  <p className="text-[14px] font-cinzel text-[#dccfb8] tracking-wide mb-1 uppercase">
                    {item.label}
                  </p>

                  <p className="text-[12px] text-[#897c68] font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ COLLECTIONS ════════════════ */}
      <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle warm ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#c5a028]/[0.015] via-transparent to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14 lg:mb-16">
            <p className="text-[12px] sm:text-[15px] text-[#c5a028] tracking-[0.32em] uppercase font-sans font-medium mb-7">
              Sacred Collections
            </p>

            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl xl:text-5xl text-[#e8dac6] leading-tight">
              The Offerings of Kashi
            </h2>

            <p className="mt-6 text-base sm:text-lg lg:text-x text-[#a99a84] font-sans tracking-wide max-w-3xl mx-auto leading-relaxed">
              Five distinct traditions of sacred heritage, each carrying
              centuries of meaning.
            </p>

            {/* Gold ornamental divider */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#c5a028]/60" />

              <div className="w-2 h-2 bg-[#c5a028] rotate-45" />

              <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#c5a028]/60" />
            </div>
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.id} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FEATURED PRODUCTS ══════════ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0906]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <SectionHeader
              eyebrow="Curated Selection"
              title="Sacred Products"
              align="left"
            />
            <Link
              to="/shop"
              className="hidden md:flex items-center gap-2 text-[11px] text-[#c5a028] uppercase tracking-widest font-sans hover:gap-3 transition-all duration-200"
            >
              View All <ArrowRight size={11} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-[11px] text-[#c5a028] uppercase tracking-widest font-sans border border-[#c5a028]/40 px-6 py-3 hover:bg-[#c5a028]/10 transition-colors"
            >
              View All Products <ArrowRight size={11} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ KASHI STORY ════════════════ */}
      <section className="relative py-24 lg:py-36 overflow-hidden bg-[#07060a]">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/our-story.png"
            alt="The sacred Ganga at sunset in Varanasi"
            className="
        w-full h-full
        object-cover
        scale-[0.96]
        brightness-110
        transition-transform duration-700
      "
          />

          {/* Left side remains dark for text readability, right side is brighter */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07060a]/95 via-[#07060a]/68 to-[#07060a]/12" />

          {/* Softer vertical overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07060a]/20 via-transparent to-[#07060a]/35" />
        </div>

        {/* Ornamental vertical rule */}
        <div className="absolute top-0 bottom-0 left-8 lg:left-[calc(50%-360px)] w-[1px] bg-gradient-to-b from-transparent via-[#c5a028]/25 to-transparent hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg">
            <motion.p
              className="text-[10px] text-[#d4af37] tracking-[0.3em] uppercase font-sans mb-5"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              The Essence of Kashi
            </motion.p>

            <GoldDivider />

            <motion.h2
              className="font-cinzel text-3xl lg:text-5xl text-[#f0e5d2] leading-tight my-6"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              One of Earth's Oldest Living Cities
            </motion.h2>

            <motion.p
              className="font-serif italic text-[#d0c1aa] text-lg leading-relaxed mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Kashi has been a center of learning, spiritual seeking, and sacred
              craftsmanship for over three thousand years. Every stone, every
              ghat, every artisan workshop carries the memory of an unbroken
              tradition.
            </motion.p>

            <motion.p
              className="font-sans text-[#a89b88] text-sm leading-relaxed mb-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              We exist to honor that heritage — not as a relic, but as a living
              tradition that can nourish modern lives with authenticity and
              depth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/about"
                className="
                    group inline-flex items-center justify-center gap-4
                    min-w-[175px]
                    px-8 py-4
                    bg-[#d4a72c]
                    text-[#17120a]
                    border border-[#f0c95a]
                    text-[11px]
                    font-sans font-semibold
                    uppercase tracking-[0.2em]
                    shadow-[0_0_22px_rgba(212,167,44,0.42)]
                    hover:bg-[#e5b93f]
                    hover:border-[#ffe08a]
                    hover:shadow-[0_0_38px_rgba(212,167,44,0.65)]
                    hover:-translate-y-0.5
                    transition-all duration-300
                  "
              >
                <span>Our Story</span>

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TRAVEL ════════════════════ */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0906]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <SectionHeader
              eyebrow="Sacred Experiences"
              title="Journey to Kashi"
              align="left"
            />
            <Link
              to="/travel"
              className="hidden md:flex items-center gap-2 text-[11px] text-[#c5a028] uppercase tracking-widest font-sans hover:gap-3 transition-all duration-200"
            >
              All Packages <ArrowRight size={11} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY KKD ═══════════════════ */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-y border-[#2a241a] bg-[#09080d]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Why Kashi Kavach Divine"
            title="Heritage You Can Trust"
            subtitle="We exist at the intersection of authentic tradition and modern integrity."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Directly From Kashi",
                desc: "Every product is sourced from craftspeople and sources in and around Varanasi — no opaque supply chains, no unknown origins.",
              },
              {
                num: "02",
                title: "Respect for Tradition",
                desc: "We work with artisan families whose craft has been passed down for generations. Their livelihood is part of our mission.",
              },
              {
                num: "03",
                title: "Honest Representation",
                desc: "We describe our products accurately — no unverified claims, no invented certifications. Sacred objects deserve truthful presentation.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                className="
            group
            relative
            overflow-hidden
            border border-[#3a3020]
            bg-[#0d0c0a]
            p-8
            transition-all
            duration-500
            hover:border-[#c5a028]/70
            hover:bg-[#110f0a]
            hover:shadow-[0_0_35px_rgba(197,160,40,0.12)]
          "
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.14, duration: 0.6 }}
              >
                {/* Subtle warm glow */}
                <div
                  className="
              absolute
              -bottom-12
              left-1/2
              -translate-x-1/2
              w-2/3
              h-16
              bg-[#c5a028]/10
              blur-3xl
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-500
              pointer-events-none
            "
                />

                {/* Number */}
                <span
                  className="
              text-5xl
              lg:text-6xl
              font-cinzel
              text-[#c5a028]/55
              absolute
              top-5
              right-6
              select-none
              transition-all
              duration-500
              group-hover:text-[#e5b93f]
              group-hover:drop-shadow-[0_0_14px_rgba(229,185,63,0.7)]
              group-hover:scale-105
            "
                >
                  {item.num}
                </span>

                {/* Content */}
                <div className="relative z-10 pr-12">
                  {/* Title */}
                  <h3
                    className="
                font-cinzel
                text-md
                lg:text-xl
                text-[#e0bd4f]
                mb-4
                tracking-wide
                transition-colors
                duration-300
                group-hover:text-[#f0cf62]
              "
                  >
                    {item.title}
                  </h3>

                  {/* Gold divider */}
                  <div
                    className="
                w-12
                h-px
                bg-[#c5a028]/50
                mb-5
                transition-all
                duration-500
                group-hover:w-20
                group-hover:bg-[#e5b93f]
                group-hover:shadow-[0_0_10px_rgba(229,185,63,0.6)]
              "
                  />

                  {/* Description */}
                  <p
                    className="
                text-[15px]
                lg:text-base
                text-[#b8a890]
                font-sans
                leading-relaxed
                transition-colors
                duration-300
                group-hover:text-[#d5c7b1]
              "
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      {/* <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0906]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Our Community"
            title="Voices from Our Seekers"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                className="bg-[#0f0d0a] border border-[#1d1a12] p-6"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
              >
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={11}
                      className="fill-[#c5a028] text-[#c5a028]"
                    />
                  ))}
                </div>
                <p className="text-sm text-[#6a5e4a] font-serif italic leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <div className="border-t border-[#1d1a12] pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#b8a890] font-cinzel">
                      {t.name}
                    </p>
                    <p className="text-[10px] text-[#2a2018] font-sans">
                      {t.location}
                    </p>
                  </div>
                  <p className="text-[10px] text-[#2a2018] font-sans text-right max-w-[120px]">
                    {t.product}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ═══════════════ NEWSLETTER ══════════════════ */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#3a3020] overflow-hidden">
        {/* Subtle golden ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[500px] h-[300px] -translate-x-1/2 -translate-y-1/2 bg-[#c5a028]/5 blur-[120px] rounded-full" />
        </div>

        <div className="relative max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[14px] text-[#d4b545] tracking-[0.32em] uppercase font-sans mb-4 font-medium">
              The Kashi Circle
            </p>

            <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-4xl text-[#f0e5d5] mb-4">
              Enter the World of Kashi
            </h2>

            <GoldDivider />

            <p className="text-[#a99b87] font-sans text-sm sm:text-base mt-5 mb-10 max-w-md mx-auto leading-relaxed">
              Stories of sacred heritage, new collections, and curated
              experiences — for those who seek authentic connection.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 border border-[#c5a028]/60 bg-[#c5a028]/15 shadow-[0_0_30px_rgba(197,160,40,0.15)] px-8 py-4 text-sm text-[#e5c75a] font-sans"
              >
                Welcome to the Kashi Circle.
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 sm:gap-0 max-w-lg mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 bg-[#15120d] border border-[#c5a028]/40 text-[#f0e5d5] placeholder-[#8b7b60] px-5 py-4 text-sm font-sans shadow-[0_0_20px_rgba(197,160,40,0.06)] focus:outline-none focus:border-[#d4b545] focus:bg-[#19150e] focus:shadow-[0_0_25px_rgba(197,160,40,0.15)] transition-all duration-300"
                />

                <button
                  type="submit"
                  className="group bg-[#c5a028] text-[#090705] px-7 py-4 text-[11px] font-bold tracking-widest uppercase font-sans whitespace-nowrap border border-[#e0bd3f] shadow-[0_0_20px_rgba(197,160,40,0.3)] hover:bg-[#d4b545] hover:shadow-[0_0_35px_rgba(197,160,40,0.55)] hover:-translate-y-[1px] transition-all duration-300"
                >
                  <span className="group-hover:tracking-[0.14em] transition-all duration-300">
                    Join the Circle
                  </span>
                </button>
              </form>
            )}

            <p className="text-[10px] text-[#6f6250] font-sans mt-5">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
