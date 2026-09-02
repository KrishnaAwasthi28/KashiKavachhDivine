import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Clock, Users, ArrowRight, Star } from 'lucide-react';

const fmt = (price) => `₹${price.toLocaleString('en-IN')}`;

export default function PackageCard({ pkg, index = 0 }) {
  return (
    <motion.div
      className="group relative overflow-hidden bg-[#0f0d0a] border border-[#2a241a]"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
    >
      {/* Image */}
      <div className="relative aspect-[16/8.5] overflow-hidden bg-[#1a1710]">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07060a]/85 via-[#07060a]/20 to-transparent" />

        {/* Package Category */}
        <div
          className="
            absolute top-3 left-3
            bg-[#c5a028]/95
            border border-[#f0cf62]
            text-[#17120a]
            text-[9px]
            font-semibold
            px-3 py-1.5
            uppercase
            tracking-[0.16em]
            font-sans
            shadow-[0_0_18px_rgba(197,160,40,0.28)]
          "
        >
          {pkg.category}
        </div>

        {/* Rating */}
        <div
          className="
            absolute top-3 right-3
            flex items-center gap-1
            bg-[#07060a]/85
            backdrop-blur-sm
            border border-[#c5a028]/25
            px-2.5 py-1.5
            shadow-lg
          "
        >
          <Star size={10} className="fill-[#d4a72c] text-[#d4a72c]" />

          <span className="text-[10px] text-[#e0c36b] font-medium font-sans">
            {pkg.rating}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="font-serif text-md text-[#f0e5d5] mb-3 leading-snug">
          {pkg.name}
        </h3>

        {/* Duration and Group */}
        <div className="flex items-center gap-5 mb-4">
          <div className="flex items-center gap-2 text-[12px] text-[#a99b82] font-sans">
            <Clock size={13} className="text-[#d4a72c]" />
            {pkg.duration}
          </div>

          <div className="flex items-center gap-2 text-[12px] text-[#a99b82] font-sans">
            <Users size={13} className="text-[#d4a72c]" />
            {pkg.groupSize}
          </div>
        </div>

        {/* Highlights */}
        <ul className="space-y-2 mb-5">
          {pkg.highlights.slice(0, 3).map((h, i) => (
            <li
              key={i}
              className="text-[12px] text-[#938773] font-sans flex items-start gap-2.5 leading-relaxed"
            >
              <span className="w-1.5 h-1.5 bg-[#d4a72c] rounded-full mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(212,167,44,0.7)]" />
              {h}
            </li>
          ))}
        </ul>

        {/* Bottom Section */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#2a241a]">
          {/* Price */}
          <div
            className="
              px-4 py-2
              bg-[#c5a028]/12
              border border-[#c5a028]/30
              shadow-[0_0_18px_rgba(197,160,40,0.12)]
            "
          >
            <p className="text-[9px] text-[#b8a890] uppercase tracking-[0.14em] font-sans mb-1">
              Starting from
            </p>

            <p className="text-lg text-[#e0bd4f] font-cinzel leading-none">
              {fmt(pkg.price)}
            </p>
          </div>

          {/* Details Button */}
          <Link
            to={`/travel/${pkg.slug}`}
            className="
              group/btn
              inline-flex items-center justify-center gap-2.5
              px-5 py-3
              bg-[#d4a72c]
              border border-[#f0cf62]
              text-[#17120a]
              text-[10px]
              font-semibold
              font-sans
              uppercase
              tracking-[0.16em]
              shadow-[0_0_20px_rgba(212,167,44,0.38)]
              hover:bg-[#e5b93f]
              hover:border-[#ffe08a]
              hover:shadow-[0_0_32px_rgba(212,167,44,0.62)]
              hover:-translate-y-0.5
              transition-all duration-300
            "
          >
            Details

            <ArrowRight
              size={13}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}