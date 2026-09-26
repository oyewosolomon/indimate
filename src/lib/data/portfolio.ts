export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface PortfolioCategory {
  slug: string;
  label: string;
  description: string;
  coverImage: string;
  coverAlt: string;
  images: PortfolioImage[];
}

export const portfolioCategories: PortfolioCategory[] = [
  {
    slug: 'africa',
    label: 'Africa',
    description:
      "From Lagos gardens strung with white blooms to palm-lined receptions under the stars, our home turf brings warmth, colour and rhythm to every celebration.",
    coverImage: '/assets/images/portfolio/africa/palm-backdrop-couple.webp',
    coverAlt: 'Couple posing before a green backdrop under palm trees',
    images: [
      { src: '/assets/images/portfolio/africa/confetti-celebration.webp', alt: 'Bride and groom laughing under a shower of confetti beneath a chandelier' },
      { src: '/assets/images/portfolio/africa/white-arch-portrait.webp', alt: 'Bride and groom posing before a white arched backdrop with white blossoms' },
      { src: '/assets/images/portfolio/africa/garden-aisle-walk.webp', alt: 'Bride and groom walking arm in arm past a floral arch reading "Vivian & Timeyin"' },
      { src: '/assets/images/portfolio/africa/floral-arch-couple.webp', alt: 'Bride and groom holding hands beneath a floral arch, palm trees behind them' },
      { src: '/assets/images/portfolio/africa/palm-backdrop-couple.webp', alt: 'Couple posing before a green backdrop under palm trees' },
      { src: '/assets/images/portfolio/africa/night-sparklers.webp', alt: 'Bride and groom kissing beneath sparklers on a checkered dance floor at night' },
      { src: '/assets/images/portfolio/africa/confetti-skyline.webp', alt: 'Newlyweds celebrating under a shower of confetti with the city skyline behind them' },
    ],
  },
  {
    slug: 'europe',
    label: 'Europe',
    description:
      'Chateaux, gilded manors and cobblestone streets — for couples dreaming of an old-world, storybook romance abroad.',
    coverImage: '/assets/images/portfolio/europe/modern-staircase-embrace.webp',
    coverAlt: 'Bride and groom embracing on a spiral staircase beneath a skylight',
    images: [
      { src: '/assets/images/portfolio/europe/chateau-grounds.webp', alt: 'Couple walking hand in hand across the lawn of a grand French chateau' },
      { src: '/assets/images/portfolio/europe/manor-hallway-moment.webp', alt: 'Groom adjusting his bride’s veil in a gilded manor hallway as a pianist plays' },
      { src: '/assets/images/portfolio/europe/palace-dining-room.webp', alt: 'Opulent dining room set for the reception with gold chairs and crystal glassware' },
      { src: '/assets/images/portfolio/europe/grand-room-portrait.webp', alt: 'Bride in a sculptural corset gown standing behind her groom in a gilded armchair' },
      { src: '/assets/images/portfolio/europe/four-poster-bed-portrait.webp', alt: 'Bride and groom beside a four-poster bed in a room with floral wallpaper and blue tile' },
      { src: '/assets/images/portfolio/europe/manor-portrait-seated.webp', alt: 'Couple seated in an ornate wood-panelled room lined with gilt-framed paintings' },
      { src: '/assets/images/portfolio/europe/modern-staircase-embrace.webp', alt: 'Bride and groom embracing on a spiral staircase beneath a skylight' },
      { src: '/assets/images/portfolio/europe/staircase-embrace-blur.webp', alt: 'Bride in motion on a white architectural staircase, veil trailing behind her' },
      { src: '/assets/images/portfolio/europe/balcony-portrait.webp', alt: 'Couple on a wrought-iron balcony overlooking a pink European building facade' },
      { src: '/assets/images/portfolio/europe/berlin-street-portrait.webp', alt: 'Bride and groom holding hands on a city street lined with ornate apartment buildings' },
      { src: '/assets/images/portfolio/europe/traditional-attire-portrait.webp', alt: 'Couple in blue traditional attire posing against a tie-dye backdrop' },
      { src: '/assets/images/portfolio/europe/bridal-shoes-detail.webp', alt: 'Bridal shoes and a polka-dot bow resting on a windowsill overlooking manicured topiary' },
      { src: '/assets/images/portfolio/europe/paris-menu-flatlay.webp', alt: 'A "Love Affair in Paris" menu card beside fresh baguettes tied with lace ribbon' },
    ],
  },
  {
    slug: 'middle-east',
    label: 'Middle East',
    description:
      'Sun-bleached dunes, desert light and flowing silhouettes — celebrations designed for dramatic, sculptural landscapes.',
    coverImage: '/assets/images/portfolio/middle-east/arch-kiss-dunes.webp',
    coverAlt: 'Bride and groom kissing beneath a geometric arch surrounded by red florals',
    images: [
      { src: '/assets/images/portfolio/middle-east/desert-veil-portrait.webp', alt: 'Bride’s cathedral veil billowing in the desert wind beside her groom' },
      { src: '/assets/images/portfolio/middle-east/dune-lagoon-landscape.webp', alt: 'Couple standing atop sand dunes overlooking a desert lagoon' },
      { src: '/assets/images/portfolio/middle-east/wedding-party-dunes.webp', alt: 'Full bridal party posed on a white platform amid the desert dunes' },
      { src: '/assets/images/portfolio/middle-east/arch-kiss-dunes.webp', alt: 'Bride and groom kissing beneath a geometric arch surrounded by red florals' },
      { src: '/assets/images/portfolio/middle-east/parasol-desert-arch.webp', alt: 'Bridesmaids in copper gowns carrying parasols beneath a white draped arch' },
      { src: '/assets/images/portfolio/middle-east/sunset-violinists.jpeg', alt: 'Groom walking past violinists in red gowns on the sand at sunset' },
      { src: '/assets/images/portfolio/middle-east/desert-trio-musicians.webp', alt: 'Trio of musicians playing violin and harp on the sand at dusk' },
      { src: '/assets/images/portfolio/middle-east/boardwalk-bridal-entrance.webp', alt: 'Bride walking a lantern-lined boardwalk toward the reception pavilion' },
      { src: '/assets/images/portfolio/middle-east/groom-boardwalk-entrance.webp', alt: 'Groom in a tuxedo walking a candlelit boardwalk toward the venue' },
      { src: '/assets/images/portfolio/middle-east/venue-exterior.webp', alt: 'Tented desert pavilion venue framed by palm trees at golden hour' },
      { src: '/assets/images/portfolio/middle-east/reception-first-dance.webp', alt: 'Bride and groom dancing together at their reception in the evening' },
      { src: '/assets/images/portfolio/middle-east/fire-performer-night.webp', alt: 'Fire performer entertaining guests under string lights at night' },
      { src: '/assets/images/portfolio/middle-east/berry-cake-detail.webp', alt: 'Mille-crepe wedding cake topped with fresh berries, ready to be cut' },
      { src: '/assets/images/portfolio/middle-east/cake-sugar-dusting.webp', alt: 'Bride and groom dusting powdered sugar over their berry wedding cake' },
      { src: '/assets/images/portfolio/middle-east/reception-photo-montage.webp', alt: 'Guests toasting the couple as their photo is projected on screen behind them' },
    ],
  },
  {
    slug: 'traditional-weddings',
    label: 'Traditional Weddings',
    description:
      'Aso-oke, coral beads and ancestral colour — we honour heritage with the same care we bring to every white wedding.',
    coverImage: '/assets/images/portfolio/traditional-weddings/royal-attire-portrait.webp',
    coverAlt: 'Couple in traditional Nigerian royal attire surrounded by clay pots',
    images: [
      { src: '/assets/images/portfolio/traditional-weddings/royal-attire-portrait.webp', alt: 'Couple in traditional Nigerian royal attire surrounded by clay pots' },
    ],
  },
];

export const getPortfolioCategory = (slug: string) =>
  portfolioCategories.find((category) => category.slug === slug);
