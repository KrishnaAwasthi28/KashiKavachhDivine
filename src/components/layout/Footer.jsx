import { Link } from 'react-router';
import { Globe, Link as LinkIcon, Music } from 'lucide-react';
import FullLogo from '../brand/FullLogo';

const cols = [
  {
    title: 'Sacred Shop',
    links: [
      { label: 'Rudraksha', to: '/shop?category=rudraksha' },
      { label: 'Gemstones', to: '/shop?category=gemstones' },
      { label: 'Gangajal', to: '/shop?category=gangajal' },
      { label: 'Traditional Crafts', to: '/shop?category=wooden-toys' },
      { label: 'Sacred Kavach', to: '/shop?category=kavach' },
    ],
  },
  {
    title: 'Experiences',
    links: [
      { label: 'Kashi Tour Packages', to: '/travel' },
      { label: 'Heritage Walks', to: '/travel' },
      { label: 'Spiritual Experiences', to: '/travel' },
      { label: 'Ganga Aarti', to: '/travel' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Heritage & Craft', to: '/heritage' },
      { label: 'Contact Us', to: '/contact' },
      { label: 'FAQ', to: '/contact#faq' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#07060a] border-t border-[#1d1a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <FullLogo className="mb-5" />
            <p className="text-xs text-[#c5a028] font-sans leading-relaxed mb-6 max-w-xs">
              A premium sacred heritage brand bringing the authentic traditions and craftsmanship
              of Kashi (Varanasi) to the modern world.
            </p>
            <div className="flex gap-3">
              {[Globe, LinkIcon, Music].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 border border-[#1d1a12] text-[#e8dac6] hover:border-[#c5a028] hover:text-[#c5a028] transition-colors flex items-center justify-center"
                  aria-label="Social link"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[14px] font-cinzel text-[#e8dac6] tracking-[0.22em] uppercase mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-xs text-[#c5a028] hover:text-[#7a6e58] transition-colors font-sans"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter strip */}
        {/* <div className="border-t border-[#1d1a12] pt-8 pb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-[10px] text-[#4a4030] font-cinzel tracking-[0.2em] uppercase mb-1">
              The Kashi Circle
            </p>
            <p className="text-xs text-[#2a2018] font-sans">
              Stories of Kashi, new collections, and curated experiences.
            </p>
          </div>
          <div className="flex w-full sm:w-auto">
            <input
              type="email"
              placeholder="Your email"
              className="bg-[#0f0d0a] border border-[#1d1a12] text-[#e8dac6] placeholder-[#2a2018] px-4 py-2.5 text-xs font-sans focus:outline-none focus:border-[#c5a028] transition-colors w-full sm:w-52"
            />
            <button className="bg-[#c5a028] text-[#07060a] px-5 py-2.5 text-[10px] font-semibold tracking-widest uppercase hover:bg-[#d4b545] transition-colors font-sans whitespace-nowrap">
              Join
            </button>
          </div>
        </div> */}

        {/* Bottom bar */}
        <div className="border-t border-[#1a1710] pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-[#e8dac6] font-sans">
            © 2025 Kashi Kavach Divine. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Shipping Policy'].map((l) => (
              <a key={l} href="#" className="text-[11px] text-[#e8dac6] hover:text-[#3a3028] transition-colors font-sans">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
