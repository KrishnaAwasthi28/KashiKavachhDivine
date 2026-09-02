import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp,
  Check,
} from 'lucide-react';

const faqs = [
  {
    q: 'Are your Rudraksha beads authentic?',
    a: 'Yes. Our Rudraksha beads are sourced from established suppliers in Nepal and Indonesia. We work with suppliers who have direct access to bead-producing trees and can provide origin documentation.',
  },
  {
    q: 'Where is the Gangajal collected from?',
    a: 'Our Gangajal is collected from designated points at the sacred ghats of Varanasi (Kashi). It is handled and packaged with care appropriate to its sacred significance.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Standard delivery within India takes 5–8 business days. We package everything with the care these sacred items deserve.',
  },
  {
    q: 'Can I visit artisans in Kashi?',
    a: 'Absolutely — this is precisely what our Travel Experiences offer. Contact us and we can arrange a visit to artisan workshops as part of a curated Kashi experience.',
  },
  {
    q: 'Do you offer international shipping?',
    a: 'We are working on international shipping options. Please contact us directly for enquiries about shipping outside India.',
  },
  {
    q: 'What is your return policy?',
    a: 'We accept returns within 14 days if items are in original condition and packaging. Sacred items once used are not eligible for return. Please contact us for any concerns.',
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [openFaq, setOpenFaq] = useState(null);

  function validate() {
    const e = {};

    if (!form.name.trim()) {
      e.name = 'Name is required';
    }

    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      e.email = 'Valid email required';
    }

    if (!form.message.trim()) {
      e.message = 'Message is required';
    }

    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const errs = validate();

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#07060a] pt-16 lg:pt-20">

      {/* ═══════════════ HEADER ═══════════════ */}
      <div className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0906] border-b border-[#c5a028]/15 text-center">

        <motion.p
          className="text-[11px] text-[#d4af37] tracking-[0.3em] uppercase font-sans mb-4 drop-shadow-[0_0_8px_rgba(212,175,55,0.35)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.p>

        <motion.h1
          className="font-cinzel text-3xl lg:text-5xl text-[#f0e5d2] drop-shadow-[0_0_16px_rgba(232,218,198,0.08)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Contact & Support
        </motion.h1>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

          {/* ═══════════════ CONTACT FORM ═══════════════ */}
          <div>

            <h2 className="font-cinzel text-xl text-[#f0e5d2] mb-8 tracking-wide">
              Send a Message
            </h2>

            {submitted ? (
              <motion.div
                className="
                  bg-[#0f0d0a]
                  border border-[#d4af37]/50
                  p-10
                  text-center
                  shadow-[0_0_30px_rgba(197,160,40,0.08)]
                "
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
              >

                <div className="
                  w-14
                  h-14
                  border
                  border-[#d4af37]/70
                  bg-[#c5a028]/10
                  flex
                  items-center
                  justify-center
                  mx-auto
                  mb-5
                  shadow-[0_0_20px_rgba(212,175,55,0.15)]
                ">
                  <Check
                    size={23}
                    className="text-[#f0cf5a] drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]"
                  />
                </div>

                <h3 className="font-cinzel text-lg text-[#f0e5d2] mb-3">
                  Message Received
                </h3>

                <p className="text-sm text-[#9a8d78] font-sans">
                  We will respond to your enquiry within 24–48 hours.
                </p>

              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
              >

                {[
                  {
                    name: 'name',
                    label: 'Full Name',
                    type: 'text',
                  },
                  {
                    name: 'email',
                    label: 'Email Address',
                    type: 'email',
                  },
                  {
                    name: 'subject',
                    label: 'Subject',
                    type: 'text',
                  },
                ].map((field) => (

                  <div key={field.name}>

                    <label className="block text-[10px] text-[#b8a890] uppercase tracking-[0.22em] font-sans mb-2">
                      {field.label}
                    </label>

                    <input
                      type={field.type}
                      value={form[field.name]}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          [field.name]: e.target.value,
                        })
                      }
                      className={`w-full
                        bg-[#0f0d0a]
                        border
                        text-[#f0e5d2]
                        placeholder-[#6a5e4a]
                        px-4
                        py-3.5
                        text-sm
                        font-sans
                        transition-all
                        duration-300
                        focus:outline-none
                        focus:border-[#d4af37]
                        focus:bg-[#120f09]
                        focus:shadow-[0_0_18px_rgba(212,175,55,0.08)]
                        ${
                          errors[field.name]
                            ? 'border-red-700'
                            : 'border-[#c5a028]/20'
                        }`}
                    />

                    {errors[field.name] && (
                      <p className="text-[10px] text-red-500 font-sans mt-1.5">
                        {errors[field.name]}
                      </p>
                    )}

                  </div>

                ))}

                {/* Message */}
                <div>

                  <label className="block text-[10px] text-[#b8a890] uppercase tracking-[0.22em] font-sans mb-2">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                    }
                    className={`w-full
                      bg-[#0f0d0a]
                      border
                      text-[#f0e5d2]
                      placeholder-[#6a5e4a]
                      px-4
                      py-3.5
                      text-sm
                      font-sans
                      transition-all
                      duration-300
                      focus:outline-none
                      focus:border-[#d4af37]
                      focus:bg-[#120f09]
                      focus:shadow-[0_0_18px_rgba(212,175,55,0.08)]
                      resize-none
                      ${
                        errors.message
                          ? 'border-red-700'
                          : 'border-[#c5a028]/20'
                      }`}
                  />

                  {errors.message && (
                    <p className="text-[10px] text-red-500 font-sans mt-1.5">
                      {errors.message}
                    </p>
                  )}

                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="
                    group
                    relative
                    w-full
                    overflow-hidden
                    bg-[#d4af37]
                    text-[#07060a]
                    py-4
                    text-[11px]
                    font-semibold
                    tracking-[0.2em]
                    uppercase
                    font-sans
                    transition-all
                    duration-300
                    shadow-[0_0_18px_rgba(212,175,55,0.22)]
                    hover:bg-[#f0cf5a]
                    hover:shadow-[0_0_28px_rgba(212,175,55,0.5)]
                    hover:-translate-y-[1px]
                  "
                >
                  <span className="relative z-10">
                    Send Message
                  </span>

                  <span className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    -translate-x-full
                    group-hover:translate-x-full
                    transition-transform
                    duration-700
                  " />

                </button>

              </form>
            )}

            {/* ═══════════════ CONTACT INFO ═══════════════ */}
            <div className="mt-10 space-y-5 border-t border-[#c5a028]/15 pt-8">

              {[
                {
                  icon: Mail,
                  text: 'hello@kashikavachdivine.com (placeholder)',
                },
                {
                  icon: Phone,
                  text: '+91 00000 00000 (placeholder)',
                },
                {
                  icon: MapPin,
                  text: 'Varanasi, Uttar Pradesh, India',
                },
              ].map(({ icon: Icon, text }) => (

                <div
                  key={text}
                  className="
                    flex
                    items-center
                    gap-3
                    text-sm
                    text-[#9a8d78]
                    font-sans
                    transition-colors
                    duration-300
                    hover:text-[#e8dac6]
                  "
                >

                  <div className="
                    w-9
                    h-9
                    flex
                    items-center
                    justify-center
                    border
                    border-[#c5a028]/25
                    bg-[#c5a028]/5
                    transition-all
                    duration-300
                    hover:border-[#d4af37]/60
                    hover:shadow-[0_0_12px_rgba(212,175,55,0.15)]
                  ">
                    <Icon
                      size={15}
                      className="text-[#d4af37]"
                    />
                  </div>

                  {text}

                </div>

              ))}

            </div>

          </div>

          {/* ═══════════════ FAQ ═══════════════ */}
          <div id="faq">

            <h2 className="font-cinzel text-xl text-[#f0e5d2] mb-8 tracking-wide">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">

              {faqs.map((faq, i) => (

                <motion.div
                  key={i}
                  className={`
                    group
                    border
                    overflow-hidden
                    transition-all
                    duration-300
                    ${
                      openFaq === i
                        ? 'border-[#d4af37]/50 bg-[#0f0d0a] shadow-[0_0_20px_rgba(197,160,40,0.06)]'
                        : 'border-[#c5a028]/15 hover:border-[#c5a028]/40'
                    }
                  `}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >

                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === i ? null : i)
                    }
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      p-5
                      text-left
                      transition-all
                      duration-300
                      hover:bg-[#120f09]
                    "
                    aria-expanded={openFaq === i}
                  >

                    <span className={`
                      text-[14px]
                      font-sans
                      pr-4
                      transition-colors
                      duration-300
                      ${
                        openFaq === i
                          ? 'text-[#f0cf5a]'
                          : 'text-[#c9bda8] group-hover:text-[#e8dac6]'
                      }
                    `}>
                      {faq.q}
                    </span>

                    {openFaq === i ? (
                      <ChevronUp
                        size={17}
                        className="
                          text-[#f0cf5a]
                          flex-shrink-0
                          drop-shadow-[0_0_7px_rgba(212,175,55,0.45)]
                        "
                      />
                    ) : (
                      <ChevronDown
                        size={17}
                        className="
                          text-[#9a8d78]
                          flex-shrink-0
                          group-hover:text-[#d4af37]
                          transition-colors
                        "
                      />
                    )}

                  </button>

                  <AnimatePresence initial={false}>

                    {openFaq === i && (

                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: 'auto',
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.28,
                        }}
                        className="overflow-hidden"
                      >

                        <div className="px-5 pb-5 border-t border-[#c5a028]/15">

                          <p className="text-sm text-[#9a8d78] font-sans leading-relaxed pt-4">
                            {faq.a}
                          </p>

                        </div>

                      </motion.div>

                    )}

                  </AnimatePresence>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}