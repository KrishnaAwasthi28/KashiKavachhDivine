import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'framer-motion';
import { Clock, Users, Star, ArrowLeft, Check, MapPin } from 'lucide-react';
import { getPackageBySlug } from '../data/travelPackages';

const fmt = (price) => `₹${price.toLocaleString('en-IN')}`;

export default function PackageDetail() {
  const { slug } = useParams();
  const pkg = getPackageBySlug(slug);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    persons: '2',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!pkg) {
    return (
      <div className="min-h-screen bg-[#07060a] flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-[#3a3028] font-sans text-sm mb-4">Package not found.</p>
          <Link
            to="/travel"
            className="text-[#c5a028] text-[11px] font-sans underline underline-offset-4"
          >
            Return to Experiences
          </Link>
        </div>
      </div>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#07060a] pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07060a]/30 via-transparent to-[#07060a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07060a]/40 to-transparent" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back */}
        <Link
          to="/travel"
          className="inline-flex items-center gap-2 text-[11px] text-[#3a3028] hover:text-[#c5a028] transition-colors font-sans uppercase tracking-widest mb-8"
        >
          <ArrowLeft size={11} /> All Experiences
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Content */}
          <div className="lg:col-span-2">
            <p className="text-[10px] text-[#c5a028] uppercase tracking-[0.28em] font-sans mb-3 capitalize">
              {pkg.category}
            </p>
            <h1 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl text-[#e8dac6] mb-6 leading-snug">
              {pkg.name}
            </h1>

            {/* Meta */}
            <div className="flex items-center flex-wrap gap-5 mb-8 pb-8 border-b border-[#1d1a12]">
              <div className="flex items-center gap-2 text-sm text-[#4a4030] font-sans">
                <Clock size={13} className="text-[#c5a028]/60" />
                {pkg.duration}
              </div>
              <div className="flex items-center gap-2 text-sm text-[#4a4030] font-sans">
                <Users size={13} className="text-[#c5a028]/60" />
                {pkg.groupSize}
              </div>
              <div className="flex items-center gap-1.5 text-sm text-[#4a4030] font-sans">
                <Star size={13} className="fill-[#c5a028] text-[#c5a028]" />
                {pkg.rating} ({pkg.reviewCount} reviews)
              </div>
              <div className="flex items-center gap-2 text-sm text-[#4a4030] font-sans">
                <MapPin size={13} className="text-[#c5a028]/60" />
                Varanasi, India
              </div>
            </div>

            <p className="text-sm text-[#4a4030] font-sans leading-relaxed mb-10">
              {pkg.description}
            </p>

            {/* Highlights */}
            <h2 className="font-cinzel text-base text-[#c5a028] mb-6 tracking-wide">
              Experience Highlights
            </h2>
            <ul className="space-y-3 mb-12">
              {pkg.highlights.map((h, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm text-[#5a5040] font-sans"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Check size={13} className="text-[#c5a028] mt-0.5 flex-shrink-0" />
                  {h}
                </motion.li>
              ))}
            </ul>

            {/* Note */}
            <div className="bg-[#0f0d0a] border border-[#1d1a12] p-5">
              <p className="text-[11px] text-[#3a3028] font-sans leading-relaxed italic">
                All experiences are designed as guides and may be adjusted based on local
                conditions, timing, and group preferences. We communicate all details before
                confirmation.
              </p>
            </div>
          </div>

          {/* Booking sidebar */}
          <div>
            <div className="bg-[#0f0d0a] border border-[#1d1a12] p-6 sticky top-24">
              <div className="mb-6 pb-6 border-b border-[#1d1a12]">
                <p className="text-[10px] text-[#3a3028] uppercase tracking-wider font-sans mb-1">
                  Starting from
                </p>
                <p className="text-3xl font-cinzel text-[#c5a028]">{fmt(pkg.price)}</p>
                <p className="text-[10px] text-[#2a2018] font-sans mt-1">per person / group</p>
              </div>

              {submitted ? (
                <motion.div
                  className="text-center py-6"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-10 h-10 border border-[#c5a028] flex items-center justify-center mx-auto mb-4">
                    <Check size={16} className="text-[#c5a028]" />
                  </div>
                  <h3 className="font-cinzel text-sm text-[#e8dac6] mb-2">Enquiry Received</h3>
                  <p className="text-xs text-[#3a3028] font-sans leading-relaxed">
                    We will contact you within 24 hours to confirm availability and details.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { name: 'name', label: 'Full Name', type: 'text' },
                    { name: 'email', label: 'Email Address', type: 'email' },
                    { name: 'phone', label: 'Phone Number', type: 'tel' },
                    { name: 'date', label: 'Preferred Date', type: 'date' },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-[9px] text-[#3a3028] uppercase tracking-widest font-sans mb-1.5">
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        value={form[f.name]}
                        onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                        required
                        className="w-full bg-[#07060a] border border-[#1d1a12] text-[#e8dac6] px-3 py-2.5 text-sm font-sans focus:outline-none focus:border-[#c5a028] transition-colors"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-[9px] text-[#3a3028] uppercase tracking-widest font-sans mb-1.5">
                      Number of Persons
                    </label>
                    <select
                      value={form.persons}
                      onChange={(e) => setForm({ ...form, persons: e.target.value })}
                      className="w-full bg-[#07060a] border border-[#1d1a12] text-[#e8dac6] px-3 py-2.5 text-sm font-sans focus:outline-none focus:border-[#c5a028] transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                        <option key={n} value={n}>
                          {n} person{n !== 1 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[9px] text-[#3a3028] uppercase tracking-widest font-sans mb-1.5">
                      Additional Notes (optional)
                    </label>
                    <textarea
                      rows={3}
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      className="w-full bg-[#07060a] border border-[#1d1a12] text-[#e8dac6] px-3 py-2.5 text-sm font-sans focus:outline-none focus:border-[#c5a028] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#c5a028] text-[#07060a] py-3 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#d4b545] transition-colors font-sans"
                  >
                    Send Booking Enquiry
                  </button>
                  <p className="text-[9px] text-[#1e1c14] font-sans text-center">
                    No payment required. We will confirm availability first.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
