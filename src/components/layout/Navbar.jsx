import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, Search, Heart } from "lucide-react";
import FullLogo from "../brand/FullLogo";
import BrandMark from "../brand/BrandMark";
import { useCart } from "../../context/CartContext";

const navLinks = [
  { href: "/shop", label: "Sacred Shop" },
  { href: "/travel", label: "Experiences" },
  { href: "/about", label: "Our Story" },
  { href: "/heritage", label: "Heritage" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar({ onCartOpen }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#07060a]/95 backdrop-blur-md border-b border-[#1d1a12]"
            : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link to="/" aria-label="Kashi Kavach Divine — Home">
              <span className="hidden md:flex">
                <FullLogo size={50} />
              </span>

              <span className="md:hidden">
                <BrandMark size={40} />
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-8"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `relative text-[13px] font-medium font-sans tracking-[0.16em] uppercase transition-all duration-300 pb-2 ${
                      isActive
                        ? "text-[#d4af37]"
                        : "text-[#c5a028] hover:text-[#e8dac6]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}

                      {/* Active Golden Underline */}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] bg-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.7)] transition-all duration-300 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1.5">

              {/* Search */}
              <button
                className="p-2 text-[#c5a028] hover:text-[#e8dac6] transition-colors duration-300"
                aria-label="Search"
              >
                <Search size={19} strokeWidth={1.8} />
              </button>

              {/* Wishlist */}
              <button
                className="p-2 text-[#c5a028] hover:text-[#e8dac6] transition-colors duration-300"
                aria-label="Wishlist"
              >
                <Heart size={19} strokeWidth={1.8} />
              </button>

              {/* Cart */}
              <button
                onClick={onCartOpen}
                className="relative p-2 text-[#c5a028] hover:text-[#e8dac6] transition-colors duration-300"
                aria-label={`Cart — ${itemCount} item${
                  itemCount !== 1 ? "s" : ""
                }`}
              >
                <ShoppingBag size={19} strokeWidth={1.8} />

                {itemCount > 0 && (
                  <motion.span
                    key={itemCount}
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    className="absolute top-0 right-0 w-4 h-4 bg-[#c5a028] text-[#07060a] text-[9px] font-bold rounded-full flex items-center justify-center font-sans shadow-[0_0_8px_rgba(197,160,40,0.5)]"
                  >
                    {itemCount > 9 ? "9+" : itemCount}
                  </motion.span>
                )}
              </button>

              {/* Mobile Menu */}
              <button
                className="lg:hidden p-2 ml-1 text-[#c5a028] hover:text-[#e8dac6] transition-colors duration-300"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                <Menu size={23} strokeWidth={1.8} />
              </button>

            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-72 max-w-full bg-[#0d0b08] z-50 flex flex-col border-l border-[#1d1a12]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#1d1a12]">
                <FullLogo size={30} />

                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-[#7a6e58] hover:text-[#c5a028] transition-colors"
                  aria-label="Close menu"
                >
                  <X size={23} strokeWidth={1.8} />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav
                className="flex-1 flex flex-col px-6 py-8 gap-6"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    className={({ isActive }) =>
                      `relative w-fit text-[17px] font-cinzel tracking-[0.12em] uppercase transition-all duration-300 pb-2 ${
                        isActive
                          ? "text-[#d4af37]"
                          : "text-[#9a8a70] hover:text-[#e8dac6]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}

                        {/* Mobile Active Underline */}
                        <span
                          className={`absolute left-0 bottom-0 h-[2px] bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-300 ${
                            isActive ? "w-full" : "w-0"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="px-6 py-6 border-t border-[#1d1a12]">
                <Link
                  to="/shop"
                  className="block w-full text-center bg-[#c5a028] text-[#07060a] py-3 px-6 text-[11px] font-semibold tracking-widest uppercase font-sans border border-[#e0bd3f] shadow-[0_0_20px_rgba(197,160,40,0.25)] hover:bg-[#d4b545] hover:shadow-[0_0_30px_rgba(197,160,40,0.45)] transition-all duration-300"
                >
                  Shop Sacred Collection
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}