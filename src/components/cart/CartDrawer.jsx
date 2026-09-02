import { AnimatePresence, motion } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const fmt = (price) => `₹${price.toLocaleString('en-IN')}`;

export default function CartDrawer({ isOpen, onClose }) {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/75 backdrop-blur-[2px] z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="
              fixed top-0 right-0 bottom-0
              w-full max-w-md
              bg-[#0b0907]
              z-50
              flex flex-col
              border-l border-[#c5a028]/30
              shadow-[-10px_0_50px_rgba(197,160,40,0.08)]
            "
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              type: 'tween',
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* ═══════════════ HEADER ═══════════════ */}
            <div
              className="
                flex items-center justify-between
                px-6 py-5
                border-b border-[#c5a028]/20
                bg-[#0d0a06]
              "
            >
              <h2
                className="
                  text-[11px]
                  font-cinzel
                  tracking-[0.28em]
                  uppercase
                  text-[#f0e5d2]
                  drop-shadow-[0_0_8px_rgba(232,218,198,0.12)]
                "
              >
                Sacred Cart
              </h2>

              <button
                onClick={onClose}
                className="
                  text-[#8d806a]
                  hover:text-[#f0cf5a]
                  transition-all duration-300
                  hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]
                "
                aria-label="Close cart"
              >
                <X size={19} />
              </button>
            </div>

            {/* ═══════════════ ITEMS ═══════════════ */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-5">
                  <div
                    className="
                      w-16 h-16
                      border border-[#c5a028]/30
                      bg-[#120f09]
                      flex items-center justify-center
                      shadow-[0_0_20px_rgba(197,160,40,0.08)]
                    "
                  >
                    <ShoppingBag
                      size={24}
                      className="text-[#c5a028] drop-shadow-[0_0_8px_rgba(197,160,40,0.5)]"
                    />
                  </div>

                  <p className="text-[#b8a890] font-sans text-sm">
                    Your sacred collection is empty.
                  </p>

                  <button
                    onClick={onClose}
                    className="
                      text-[#e5c65c]
                      text-[11px]
                      font-sans
                      tracking-widest
                      uppercase
                      underline underline-offset-4
                      hover:text-[#f0cf5a]
                      transition-colors
                    "
                  >
                    Continue Exploring
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="
                        flex gap-4
                        pb-6
                        border-b border-[#c5a028]/10
                      "
                    >
                      {/* Product Image */}
                      <div
                        className="
                          w-20 h-20
                          bg-[#151109]
                          flex-shrink-0
                          overflow-hidden
                          border border-[#c5a028]/15
                        "
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Name */}
                        <p
                          className="
                            text-sm
                            text-[#f0e5d2]
                            font-serif
                            leading-tight
                            mb-1
                            truncate
                          "
                        >
                          {item.name}
                        </p>

                        {/* Category */}
                        <p
                          className="
                            text-[10px]
                            text-[#c5a028]
                            uppercase
                            tracking-[0.14em]
                            mb-3
                            font-sans
                          "
                        >
                          {item.category}
                        </p>

                        <div className="flex items-center justify-between gap-3">
                          {/* Quantity */}
                          <div
                            className="
                              flex items-center
                              border border-[#c5a028]/20
                              bg-[#0d0b08]
                            "
                          >
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.quantity - 1
                                )
                              }
                              className="
                                w-7 h-7
                                flex items-center justify-center
                                text-[#9a8d78]
                                hover:text-[#f0cf5a]
                                hover:bg-[#c5a028]/10
                                transition-all duration-200
                              "
                              aria-label="Decrease quantity"
                            >
                              <Minus size={11} />
                            </button>

                            <span className="text-sm text-[#f0e5d2] w-7 text-center font-sans">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.quantity + 1
                                )
                              }
                              className="
                                w-7 h-7
                                flex items-center justify-center
                                text-[#9a8d78]
                                hover:text-[#f0cf5a]
                                hover:bg-[#c5a028]/10
                                transition-all duration-200
                              "
                              aria-label="Increase quantity"
                            >
                              <Plus size={11} />
                            </button>
                          </div>

                          <div className="flex items-center gap-3">
                            {/* ═══════ GLOWING PRODUCT PRICE ═══════ */}
                            <div
                              className="
                                relative
                                px-3 py-1.5
                                bg-gradient-to-r
                                from-[#6f4d0a]/70
                                via-[#c5a028]/25
                                to-[#6f4d0a]/70
                                border border-[#d4af37]/40
                                shadow-[0_0_14px_rgba(212,175,55,0.18)]
                              "
                            >
                              <span
                                className="
                                  text-sm
                                  text-[#f0cf5a]
                                  font-cinzel
                                  whitespace-nowrap
                                  drop-shadow-[0_0_7px_rgba(212,175,55,0.65)]
                                "
                              >
                                {fmt(item.price * item.quantity)}
                              </span>
                            </div>

                            {/* Delete */}
                            <button
                              onClick={() => removeItem(item.id)}
                              className="
                                text-[#756957]
                                hover:text-red-400
                                transition-colors
                              "
                              aria-label="Remove item"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ═══════════════ FOOTER ═══════════════ */}
            {items.length > 0 && (
              <div
                className="
                  px-6 py-6
                  border-t border-[#c5a028]/20
                  bg-[#0d0a06]
                  space-y-5
                "
              >
                {/* Subtotal */}
                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-[11px]
                      text-[#a89a84]
                      font-sans
                      uppercase
                      tracking-[0.18em]
                    "
                  >
                    Subtotal
                  </span>

                  {/* ═══════ GLOWING SUBTOTAL PRICE ═══════ */}
                  <div
                    className="
                      relative
                      px-4 py-2
                      bg-gradient-to-r
                      from-[#6f4d0a]/80
                      via-[#c5a028]/30
                      to-[#6f4d0a]/80
                      border border-[#d4af37]/40
                      shadow-[0_0_20px_rgba(212,175,55,0.22)]
                    "
                  >
                    <span
                      className="
                        text-xl
                        text-[#f0cf5a]
                        font-cinzel
                        drop-shadow-[0_0_9px_rgba(212,175,55,0.7)]
                      "
                    >
                      {fmt(total)}
                    </span>
                  </div>
                </div>

                <p
                  className="
                    text-[10px]
                    text-[#8d806a]
                    text-center
                    font-sans
                  "
                >
                  Taxes and shipping calculated at checkout
                </p>

                {/* Checkout */}
                <button
                  className="
                    w-full
                    py-3.5
                    text-[11px]
                    font-semibold
                    tracking-[0.2em]
                    uppercase
                    font-sans
                    text-[#090704]

                    bg-gradient-to-r
                    from-[#b98f16]
                    via-[#e2bb3f]
                    to-[#b98f16]

                    border border-[#f0cf5a]/70

                    shadow-
                    [0_0_20px_rgba(212,175,55,0.35),
                    0_0_45px_rgba(197,160,40,0.12)]

                    hover:from-[#cda126]
                    hover:via-[#f0cf5a]
                    hover:to-[#cda126]

                    hover:shadow-
                    [0_0_25px_rgba(212,175,55,0.55),
                    0_0_60px_rgba(197,160,40,0.2)]

                    transition-all duration-300
                  "
                >
                  Proceed to Checkout
                </button>

                {/* Clear Cart */}
                <button
                  onClick={clearCart}
                  className="
                    w-full
                    text-center
                    text-[10px]
                    text-[#756957]
                    hover:text-[#c5a028]
                    transition-colors
                    font-sans
                    uppercase
                    tracking-[0.16em]
                  "
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}