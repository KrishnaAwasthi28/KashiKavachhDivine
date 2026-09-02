import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';

const pillars = [
  {
    title: 'Rudraksha',
    desc: 'Our Rudraksha beads are sourced from established suppliers in Nepal and Indonesia with known provenance. Each mala is strung by artisans in Varanasi using traditional techniques.',
    note: 'We make no unverified botanical, medical, or spiritual claims beyond the cultural significance these beads hold in Indian tradition.',
  },
  {
    title: 'Gangajal',
    desc: 'Sourced from designated collection points at the sacred ghats of Varanasi, our Gangajal is collected and sealed with care. The water is handled according to traditional practices.',
    note: 'Gangajal has held deep cultural and spiritual significance in Indian tradition for millennia. We present it as the sacred element it is — without manufactured scientific claims.',
  },
  {
    title: 'Traditional Crafts',
    desc: 'We work with craftspeople from families whose skills have been passed down across generations. Our wooden toys and figurines are handcrafted using traditional techniques and natural materials.',
    note: 'By purchasing traditional crafts, you directly support the livelihoods of these artisan families and help preserve their skills for future generations.',
  },
  {
    title: 'Gemstones',
    desc: 'Our gemstone collection features natural stones sourced responsibly. Each piece is described accurately by stone type, origin where known, and observable characteristics.',
    note: 'We make no astrological prescriptions or guarantees. The significance of gemstones in Indian tradition is cultural and spiritual — we honor that context honestly.',
  },
  {
    title: 'Sacred Kavach',
    desc: 'Our kavach and sacred amulets are crafted by silversmiths in Varanasi using traditional design motifs drawn from Kashi temple architecture and sacred geometry.',
    note: 'These are presented as heritage craft items carrying cultural and traditional significance. We do not claim supernatural or medicinal properties.',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Artisan Relationship',
    desc: 'We identify and build direct relationships with craftspeople and suppliers in and around Varanasi — no opaque supply chains, no unknown origins.',
  },
  {
    num: '02',
    title: 'Careful Selection',
    desc: 'Each product is reviewed for quality, authenticity, and alignment with our sourcing principles before being offered.',
  },
  {
    num: '03',
    title: 'Respectful Packaging',
    desc: 'Products are packaged with care appropriate to their sacred significance — thoughtful presentation, no unnecessary plastic.',
  },
  {
    num: '04',
    title: 'Honest Delivery',
    desc: "We deliver with care and communicate accurately about what you're receiving and its origins. No exaggeration, no mystification.",
  },
];

export default function Heritage() {
  return (
    <div className="min-h-screen bg-[#07060a]">

      {/* ═══════════════ HERO HEADER ═══════════════ */}
      <section className="relative min-h-[62vh] lg:min-h-[68vh] flex items-center overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="heritage.png"
            alt="Sacred heritage and ancient traditions of Kashi"
            className="
              w-full
              h-full
              object-cover
              object-center
              scale-100
              brightness-110
            "
          />

          {/* Left side dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07060a]/90 via-[#07060a]/65 to-[#07060a]/20" />

          {/* Vertical depth overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07060a]/25 via-transparent to-[#07060a]/85" />

          {/* Subtle golden atmospheric glow */}
          <div className="absolute inset-0 bg-[#c5a028]/[0.03]" />
        </div>

        {/* Decorative Golden Glow */}
        <div
          className="
            absolute
            left-0
            top-1/2
            -translate-y-1/2
            w-[45%]
            h-[60%]
            bg-[#c5a028]/[0.04]
            blur-[120px]
            pointer-events-none
          "
        />

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-32 pb-20 w-full">

          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <motion.p
              className="
                text-[11px]
                text-[#d4af37]
                tracking-[0.32em]
                uppercase
                font-sans
                mb-5
                drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]
              "
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Heritage
            </motion.p>

            <motion.h1
              className="
                font-cinzel
                text-4xl
                sm:text-5xl
                lg:text-6xl
                text-[#f3e8d6]
                mb-7
                leading-tight
                drop-shadow-[0_0_22px_rgba(232,218,198,0.12)]
              "
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Authenticity, Craft
              <br className="hidden sm:block" /> & Transparency
            </motion.h1>

            <motion.p
              className="
                font-sans
                text-[#c0b29d]
                text-sm
                sm:text-base
                leading-relaxed
                max-w-xl
                drop-shadow-[0_0_12px_rgba(0,0,0,0.5)]
              "
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Sacred objects deserve honest representation. Here is our approach
              to sourcing, craftsmanship, and transparency across each product
              category.
            </motion.p>

          </motion.div>
        </div>

        {/* Bottom fade into page */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#07060a] to-transparent pointer-events-none" />

      </section>

      {/* ═══════════════ CATEGORY PILLARS ═══════════════ */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                className="
                  group
                  bg-[#0f0d0a]
                  border border-[#c5a028]/20
                  p-8
                  transition-all duration-500
                  hover:border-[#d4af37]/60
                  hover:bg-[#120f09]
                  hover:-translate-y-1
                  hover:shadow-[0_0_28px_rgba(197,160,40,0.08)]
                "
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
              >
                <h3
                  className="
                    font-cinzel
                    text-lg
                    text-[#d4af37]
                    mb-4
                    tracking-wide
                    transition-all duration-300
                    group-hover:text-[#f0cf5a]
                    group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]
                  "
                >
                  {p.title}
                </h3>

                <p className="text-sm text-[#9a8d78] font-sans leading-relaxed mb-5">
                  {p.desc}
                </p>

                <div className="border-t border-[#c5a028]/15 pt-4">
                  <p className="text-[12px] text-[#756957] font-sans leading-relaxed italic group-hover:text-[#a89a84] transition-colors duration-300">
                    {p.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════ PROCESS ═══════════════ */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0906] border-y border-[#c5a028]/15">
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            eyebrow="Our Process"
            title="From Kashi to You"
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                className="
                  group
                  relative
                  border border-[#c5a028]/20
                  border-t-2 border-t-[#c5a028]/50
                  bg-[#0f0d0a]/40
                  p-6
                  transition-all duration-500
                  hover:border-[#d4af37]/55
                  hover:border-t-[#d4af37]
                  hover:-translate-y-1
                  hover:shadow-[0_0_25px_rgba(197,160,40,0.08)]
                "
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <span
                  className="
                    text-4xl
                    font-cinzel
                    text-[#c5a028]/70
                    mb-5
                    block
                    transition-all duration-300
                    group-hover:text-[#e5c65c]
                    group-hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.45)]
                  "
                >
                  {step.num}
                </span>

                <h3
                  className="
                    font-cinzel
                    text-base
                    text-[#e8dac6]
                    mb-3
                    transition-colors
                    duration-300
                    group-hover:text-[#f0cf5a]
                  "
                >
                  {step.title}
                </h3>

                <p className="text-[13px] text-[#887c69] font-sans leading-relaxed group-hover:text-[#a89a84] transition-colors duration-300">
                  {step.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ═══════════════ CLOSING STATEMENT ═══════════════ */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-xl mx-auto">

          <blockquote
            className="
              font-serif
              italic
              text-[#c5b7a0]
              text-lg
              leading-relaxed
              border-l-2
              border-[#d4af37]/70
              pl-6
              text-left
              drop-shadow-[0_0_10px_rgba(197,160,40,0.06)]
            "
          >
            "We believe the most respectful way to present sacred heritage is honestly —
            describing what we know, acknowledging what we do not, and letting the depth
            of tradition speak for itself."
          </blockquote>

          <p className="text-[11px] text-[#d4af37] font-sans mt-5 tracking-[0.12em] drop-shadow-[0_0_7px_rgba(212,175,55,0.35)]">
            — Kashi Kavach Divine
          </p>

        </div>
      </section>

    </div>
  );
}