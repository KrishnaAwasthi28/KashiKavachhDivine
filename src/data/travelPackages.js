export const travelPackages = [
  {
    id: 'tp1',
    slug: 'kashi-dawn-experience',
    name: 'Kashi at Dawn — Sacred Morning Experience',
    duration: '2 Days / 1 Night',
    category: 'spiritual',
    highlights: [
      'Sunrise boat ride on the sacred Ganga',
      'Ganga Aarti at Dashashwamedh Ghat',
      'Private guided tour of Kashi Vishwanath area',
      'Traditional Kashi breakfast experience',
      'Visit to ancient temples and sacred lanes',
    ],
    price: 8999,
    image:
      'https://images.unsplash.com/photo-1767278614527-8028fb832db1?w=800&h=500&fit=crop&auto=format',
    description:
      'Begin your journey with Kashi as the sun rises over the sacred Ganga. This intimate experience takes you through the heart of ancient Varanasi — the temples, the ghats, and the living spiritual atmosphere of the city.',
    rating: 4.9,
    reviewCount: 67,
    groupSize: '2–8 persons',
    featured: true,
  },
  {
    id: 'tp2',
    slug: 'heritage-walk-hidden-kashi',
    name: 'Heritage Walk — Hidden Kashi',
    duration: '1 Day',
    category: 'heritage',
    highlights: [
      'Ancient ghats walking tour with expert guide',
      'Hidden temples and sacred wells of the old city',
      'Traditional Banarasi textile district',
      'Local culinary experience in Kashi lanes',
      'Classical music performance',
    ],
    price: 3499,
    image:
      'https://images.unsplash.com/photo-1761645749643-1f44c6684558?w=800&h=500&fit=crop&auto=format',
    description:
      'Walk through the labyrinthine lanes of Kashi with an expert heritage guide. Discover temples, stories, and sacred spaces known only to those who know the city intimately.',
    rating: 4.8,
    reviewCount: 134,
    groupSize: '2–12 persons',
    featured: true,
  },
  {
    id: 'tp3',
    slug: 'sacred-kashi-retreat-5-days',
    name: 'Sacred Kashi Retreat — 5 Days',
    duration: '5 Days / 4 Nights',
    category: 'retreat',
    highlights: [
      'Curated heritage accommodation',
      'Daily Ganga sunrise ritual',
      'Traditional Kashi cooking experience',
      'Sacred temple circuit with knowledgeable guide',
      'Private boat at Ganga Aarti ceremony',
      'Artisan workshop visit',
      'Rudraksha selection guidance session',
    ],
    price: 42000,
    image:
      'https://images.unsplash.com/photo-1760762919405-c1dcb33db7a1?w=800&h=500&fit=crop&auto=format',
    description:
      'An immersive five-day journey into the spiritual soul of Kashi. Stay in curated heritage accommodation and experience the city as deeply as any devoted pilgrim ever has.',
    rating: 5.0,
    reviewCount: 23,
    groupSize: '2–4 persons',
    featured: true,
  },
  {
    id: 'tp4',
    slug: 'ganga-aarti-evening-ceremony',
    name: 'Ganga Aarti Evening Ceremony',
    duration: 'Half Day (Evening)',
    category: 'spiritual',
    highlights: [
      'Private boat position for Aarti viewing',
      'Pre-Aarti guided walk of Dashashwamedh Ghat',
      'Traditional prasad experience',
      'Evening return boat ride on the Ganga',
    ],
    price: 1999,
    image:
      'https://images.unsplash.com/photo-1767278608250-e87182850006?w=800&h=500&fit=crop&auto=format',
    description:
      "Witness the magnificent evening Ganga Aarti at Dashashwamedh Ghat from a private boat on the sacred river. One of India's most spectacular and emotionally powerful ceremonies.",
    rating: 4.9,
    reviewCount: 289,
    groupSize: '1–10 persons',
    featured: false,
  },
  {
    id: 'tp5',
    slug: 'banarasi-artisan-workshop-tour',
    name: 'Banarasi Artisan Workshop Tour',
    duration: '1 Day',
    category: 'heritage',
    highlights: [
      'Visit to Banarasi silk weaving workshop',
      'Meet master artisans at work',
      'Traditional wooden toy carving demonstration',
      'Curated heritage market access',
    ],
    price: 2499,
    image:
      'https://images.unsplash.com/photo-1771704344790-40ea89603950?w=800&h=500&fit=crop&auto=format',
    description:
      'Explore the living craft traditions of Varanasi — from the legendary Banarasi silk looms to the workshops of traditional wooden toy makers. A rare window into the artisan heart of Kashi.',
    rating: 4.7,
    reviewCount: 56,
    groupSize: '2–8 persons',
    featured: false,
  },
];

export const getPackageBySlug = (slug) => travelPackages.find((p) => p.slug === slug);
