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
    coverImage: '/assets/images/portfolio/africa-floral-arch-couple.jpeg',
    coverAlt: 'Bride and groom holding hands beneath a floral arch, palm trees behind them',
    images: [
      { src: '/assets/images/portfolio/africa-floral-arch-couple.jpeg', alt: 'Bride and groom holding hands beneath a floral arch, palm trees behind them' },
      { src: '/assets/images/portfolio/africa-palm-backdrop-couple.jpeg', alt: 'Couple posing before a green backdrop under palm trees' },
      { src: '/assets/images/portfolio/africa-night-sparklers.jpeg', alt: 'Bride and groom kissing beneath sparklers on a checkered dance floor at night' },
      { src: '/assets/images/portfolio/africa-confetti-skyline.jpeg', alt: 'Newlyweds celebrating under a shower of confetti with the city skyline behind them' },
    ],
  },
  {
    slug: 'europe',
    label: 'Europe',
    description:
      'Vintage interiors, gallery walls and soft candlelight — for couples dreaming of an old-world, storybook romance abroad.',
    coverImage: '/assets/images/stories/vintage-elegance-gallery-wall-bride.JPG',
    coverAlt: 'Bride in profile beneath a gallery wall of framed art',
    images: [
      { src: '/assets/images/stories/vintage-elegance-gallery-wall-bride.JPG', alt: 'Bride in profile beneath a gallery wall of framed art' },
      { src: '/assets/images/stories/vintage-elegance-playful-moment.JPG', alt: 'Bride and groom sharing a playful moment against a wood-panelled wall' },
      { src: '/assets/images/stories/vintage-elegance-bridal-portrait.JPG', alt: 'Bride seated before a classical painting, holding a pastel bouquet' },
    ],
  },
  {
    slug: 'middle-east',
    label: 'Middle East',
    description:
      'Sun-bleached arches, desert light and flowing silhouettes — celebrations designed for dramatic, sculptural landscapes.',
    coverImage: '/assets/images/portfolio/middle-east-desert-arch.jpeg',
    coverAlt: 'Bridesmaids in copper gowns carrying parasols beneath a white draped arch',
    images: [
      { src: '/assets/images/portfolio/middle-east-desert-arch.jpeg', alt: 'Bridesmaids in copper gowns carrying parasols beneath a white draped arch' },
    ],
  },
  {
    slug: 'traditional-weddings',
    label: 'Traditional Weddings',
    description:
      'Aso-oke, coral beads and ancestral colour — we honour heritage with the same care we bring to every white wedding.',
    coverImage: '/assets/images/portfolio/traditional-royal-attire.jpeg',
    coverAlt: 'Couple in traditional Nigerian royal attire surrounded by clay pots',
    images: [
      { src: '/assets/images/portfolio/traditional-royal-attire.jpeg', alt: 'Couple in traditional Nigerian royal attire surrounded by clay pots' },
    ],
  },
];

export const getPortfolioCategory = (slug: string) =>
  portfolioCategories.find((category) => category.slug === slug);
