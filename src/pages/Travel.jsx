import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PackageCard from '../components/travel/PackageCard';
import { travelPackages } from '../data/travelPackages';

const categoryLabels = {
  All: 'All Experiences',
  spiritual: 'Spiritual',
  heritage: 'Heritage',
  retreat: 'Retreats',
};

export default function Travel() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All'
      ? travelPackages
      : travelPackages.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-[#07060a]">
      {/* Hero */}
      <section className="relative h-[62vh] min-h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/sacred-experience.jpg"
            alt="Sacred Kashi at night — boats on the Ganga"
            className="w-full h-full object-cover"
          />

          {/* Slightly brighter cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07060a]/20 via-[#07060a]/35 to-[#07060a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07060a]/55 via-[#07060a]/20 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
          <motion.p
            className="text-[11px] text-[#d4af37] tracking-[0.3em] uppercase font-sans mb-3 drop-shadow-[0_0_8px_rgba(212,175,55,0.35)]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Sacred Experiences
          </motion.p>

          <motion.h1
            className="font-cinzel text-4xl lg:text-6xl text-[#f0e6d8] mb-4 drop-shadow-[0_3px_20px_rgba(0,0,0,0.4)]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Journey to Kashi
          </motion.h1>

          <motion.p
            className="font-serif italic text-[#d0c0aa] text-lg max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Curated experiences for the sincere seeker — from a single morning
            by the Ganga to an immersive retreat in the heart of ancient Kashi.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        {/* Category tabs */}
        <motion.div
          className="flex items-center gap-2.5 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`relative px-6 py-3 text-[11px] font-medium font-sans uppercase tracking-[0.18em] transition-all duration-300 border ${
                active === key
                  ? `
                    bg-[#d4af37]
                    text-[#07060a]
                    border-[#e8c95a]
                    shadow-[0_0_14px_rgba(212,175,55,0.5),0_0_30px_rgba(197,160,40,0.22)]
                  `
                  : `
                    bg-[#0d0b08]
                    border-[#3a3020]
                    text-[#a89b84]
                    shadow-[0_0_8px_rgba(197,160,40,0.05)]
                    hover:text-[#e8dac6]
                    hover:border-[#c5a028]
                    hover:bg-[#15120c]
                    hover:shadow-[0_0_12px_rgba(197,160,40,0.22)]
                  `
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Package grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16 lg:mb-20">
          {filtered.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>

        {/* Custom experience CTA */}
        <motion.div
          className="relative overflow-hidden border border-[#3a3020] bg-[#0d0b08] p-8 lg:p-10 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Subtle golden glow */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(197,160,40,0.08),transparent_65%)]" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <p className="text-[10px] text-[#d4af37] uppercase tracking-[0.28em] font-sans mb-3 drop-shadow-[0_0_8px_rgba(212,175,55,0.25)]">
                Custom Experiences
              </p>

              <h2 className="font-cinzel text-2xl lg:text-3xl text-[#f0e6d8] mb-3">
                Design Your Own Kashi Journey
              </h2>

              <p className="text-sm text-[#a89b84] font-sans leading-relaxed">
                Looking for something specific? We can create a tailored
                experience that meets your intent, timeline, and interests.
                Reach out and we will craft your perfect Kashi journey.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-[#d4af37] text-[#07060a] px-7 lg:px-8 py-4 text-[11px] font-semibold tracking-[0.16em] uppercase font-sans border border-[#f0d56b] transition-all duration-300 whitespace-nowrap shadow-[0_0_15px_rgba(212,175,55,0.55),0_0_35px_rgba(197,160,40,0.25)] hover:bg-[#e6c64c] hover:shadow-[0_0_20px_rgba(230,198,76,0.75),0_0_45px_rgba(197,160,40,0.4)] hover:-translate-y-[1px]"
            >
              Enquire About a Custom Experience
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}