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
          <motion.div
            className="fixed inset-0 bg-black/60 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#0f0d0a] z-50 flex flex-col border-l border-[#1d1a12]"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#1d1a12]">
              <h2 className="text-[11px] font-cinzel tracking-[0.25em] uppercase text-[#e8dac6]">
                Sacred Cart
              </h2>
              <button
                onClick={onClose}
                className="text-[#4a4030] hover:text-[#c5a028] transition-colors"
                aria-label="Close cart"
              >
                <X size={18} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-5">
                  <div className="w-16 h-16 border border-[#1d1a12] flex items-center justify-center">
                    <ShoppingBag size={24} className="text-[#2a241a]" />
                  </div>
                  <p className="text-[#4a4030] font-sans text-sm">
                    Your sacred collection is empty.
                  </p>
                  <button
                    onClick={onClose}
                    className="text-[#c5a028] text-[11px] font-sans tracking-widest uppercase underline underline-offset-4"
                  >
                    Continue Exploring
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-20 bg-[#1a1710] flex-shrink-0 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-[#e8dac6] font-serif leading-tight mb-1 truncate">
                          {item.name}
                        </p>
                        <p className="text-[10px] text-[#4a4030] uppercase tracking-wider mb-3 font-sans">
                          {item.category}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-[#1d1a12]">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center text-[#6a5e4a] hover:text-[#c5a028] transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={11} />
                            </button>
                            <span className="text-sm text-[#e8dac6] w-7 text-center font-sans">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center text-[#6a5e4a] hover:text-[#c5a028] transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus size={11} />
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <p className="text-sm text-[#c5a028] font-cinzel">
                              {fmt(item.price * item.quantity)}
                            </p>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-[#2a2018] hover:text-red-400 transition-colors"
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

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-[#1d1a12] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-[#4a4030] font-sans uppercase tracking-widest">
                    Subtotal
                  </span>
                  <span className="text-xl text-[#c5a028] font-cinzel">{fmt(total)}</span>
                </div>
                <p className="text-[10px] text-[#3a3028] text-center font-sans">
                  Taxes and shipping calculated at checkout
                </p>
                <button className="w-full bg-[#c5a028] text-[#07060a] py-3.5 text-[11px] font-semibold tracking-widest uppercase hover:bg-[#d4b545] transition-colors font-sans">
                  Proceed to Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-center text-[10px] text-[#3a3028] hover:text-[#6a5e4a] transition-colors font-sans uppercase tracking-widest"
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
