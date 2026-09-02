import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';

const values = [
  {
    title: 'Authentic Connection',
    desc: 'We maintain direct relationships with artisans and sources in Varanasi. Nothing is intermediated beyond necessity.',
  },
  {
    title: 'Honest Representation',
    desc: 'We describe what we know and acknowledge what we do not. Sacred objects deserve truthful presentation.',
  },
  {
    title: 'Living Heritage',
    desc: 'We view tradition as something alive — to be honored, supported, and made accessible, not commercialized or diluted.',
  },
  {
    title: 'Modern Accessibility',
    desc: 'Ancient heritage should not require pilgrimage alone. We bring it to you without diminishing its depth.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#07060a]">

      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden pt-16 lg:pt-20">
        <div className="absolute inset-0">
          <img
            src="/our-story.png"
            alt="Kashi from the Ganga"
            className="w-full h-full object-cover scale-105"
          />

          {/* Brighter cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07060a]/95 via-[#07060a]/72 to-[#07060a]/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07060a]/15 via-transparent to-[#07060a]/65" />

          {/* Warm golden ambience */}
          <div className="absolute inset-0 bg-[#c5a028]/5 mix-blend-overlay" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
          >
            <p className="text-[11px] text-[#d4af37] tracking-[0.3em] uppercase font-sans mb-4 drop-shadow-[0_0_10px_rgba(212,175,55,0.45)]">
              Our Story
            </p>

            <h1 className="font-cinzel text-4xl lg:text-6xl text-[#f1e7d8] leading-tight mb-6 drop-shadow-[0_3px_18px_rgba(0,0,0,0.45)]">
              Born from the Banks of the Ganga
            </h1>

            <p className="font-serif italic text-[#d5c5ad] text-lg leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
              Kashi Kavach Divine was born from a simple conviction: the sacred
              heritage of Kashi belongs to the world — not only to those who can
              make the journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="group relative aspect-[4/5] bg-[#0f0d0a] overflow-hidden border border-[#3a3020] shadow-[0_0_20px_rgba(197,160,40,0.08)]">

                <img
                  src="https://images.unsplash.com/photo-1761645749643-1f44c6684558?w=800&h=1000&fit=crop&auto=format"
                  alt="The ancient ghats of Kashi"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07060a]/35 via-transparent to-[#c5a028]/5" />

                {/* Glow on hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-[#c5a028]/50 transition-colors duration-500 pointer-events-none" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[11px] text-[#d4af37] tracking-[0.28em] uppercase font-sans mb-6 drop-shadow-[0_0_8px_rgba(212,175,55,0.35)]">
                The Inspiration
              </p>

              <h2 className="font-cinzel text-3xl lg:text-4xl text-[#f0e6d8] mb-6 leading-tight">
                Three Thousand Years of Living Tradition
              </h2>

              <div className="space-y-5 text-sm text-[#a99b85] font-sans leading-relaxed">
                <p>
                  Kashi — known today as Varanasi — is one of the world's oldest
                  continuously inhabited cities. For millennia, it has been a
                  center of learning, pilgrimage, and extraordinary craftsmanship.
                </p>

                <p>
                  The artisans of Varanasi have for generations created objects
                  of remarkable quality — Rudraksha malas, sacred protective
                  amulets, traditional wooden toys, and woven silks whose
                  technique has been refined across centuries.
                </p>

                <p>
                  Yet much of this heritage remains invisible to those outside
                  the city's ancient lanes. Kashi Kavach Divine exists to change
                  that — to create a genuine, respectful bridge between the
                  living traditions of Kashi and the people around the world who
                  seek them.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0906] border-y border-[#2a2418]">
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            eyebrow="Our Principles"
            title="What We Stand For"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="group relative border border-[#2a2418] bg-[#0d0b08] p-7 overflow-hidden transition-all duration-500 hover:border-[#c5a028]/60 hover:shadow-[0_0_20px_rgba(197,160,40,0.12)]"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                {/* Golden glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(197,160,40,0.10),transparent_55%)]" />

                <div className="relative">
                  <div className="w-10 h-[2px] bg-[#c5a028] mb-5 shadow-[0_0_8px_rgba(197,160,40,0.5)]" />

                  <h3 className="font-cinzel text-base lg:text-lg text-[#e2bd45] mb-3 drop-shadow-[0_0_8px_rgba(197,160,40,0.2)]">
                    {v.title}
                  </h3>

                  <p className="text-sm text-[#a99b85] font-sans leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[11px] text-[#d4af37] tracking-[0.28em] uppercase font-sans mb-4 drop-shadow-[0_0_8px_rgba(212,175,55,0.35)]">
            Discover Kashi
          </p>

          <h2 className="font-cinzel text-3xl lg:text-4xl text-[#f0e6d8] mb-5">
            Experience Kashi
          </h2>

          <p className="text-sm text-[#a99b85] font-sans leading-relaxed mb-9">
            Whether through a sacred product, a curated experience, or a journey
            to the city itself — Kashi awaits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            {/* Primary glowing button */}
            <Link
              to="/shop"
              className="group inline-flex items-center justify-center gap-3 bg-[#d4af37] text-[#07060a] px-8 py-4 text-[11px] font-semibold tracking-[0.2em] uppercase font-sans border border-[#f0d56b] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.5),0_0_35px_rgba(197,160,40,0.22)] hover:bg-[#e6c64c] hover:shadow-[0_0_22px_rgba(230,198,76,0.75),0_0_45px_rgba(197,160,40,0.4)] hover:-translate-y-[2px]"
            >
              Shop Sacred Collection
            </Link>

            {/* Secondary glowing button */}
            <Link
              to="/travel"
              className="group inline-flex items-center justify-center gap-3 bg-[#c5a028]/10 border border-[#c5a028]/70 text-[#e2bd45] px-8 py-4 text-[11px] font-medium tracking-[0.2em] uppercase font-sans transition-all duration-300 shadow-[0_0_10px_rgba(197,160,40,0.12)] hover:bg-[#c5a028]/20 hover:border-[#d4af37] hover:shadow-[0_0_18px_rgba(197,160,40,0.3)] hover:-translate-y-[2px]"
            >
              Explore Experiences
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>
        </motion.div>
      </section>
    </div>
  );
}