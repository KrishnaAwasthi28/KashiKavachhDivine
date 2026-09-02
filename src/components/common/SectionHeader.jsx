import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center', className = '' }) {
  return (
    <motion.div
      className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && (
        <p className="text-[11px] font-sans text-[#c5a028] tracking-[0.3em] uppercase mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl text-[#e8dac6] leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-sans text-[#6a5e4a] text-sm leading-relaxed ${
            align === 'center' ? 'max-w-xl mx-auto' : 'max-w-xl'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
