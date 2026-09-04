export interface WeddingStory {
  id: string;
  title: string;
  story: string;
  /** True until the owner replaces this with the couple's real name and story. */
  isPlaceholder: boolean;
  /** Gallery shown in the story modal — first image is the primary one. */
  images: string[];
}

export const weddingStories: WeddingStory[] = [
  {
    id: 'beachside-union',
    title: 'A Beachside Union',
    story:
      "Waves at their backs and a floral arch overhead, this couple said 'I do' right at the water's edge as the tide rolled in behind them.",
    isPlaceholder: true,
    images: ['/assets/images/image_3.png', '/assets/images/image_2.jpg'],
  },
  {
    id: 'vintage-elegance',
    title: 'Vintage Elegance',
    story:
      "From candlelit gallery walls to a warm, wood-panelled reception, this celebration paired old-world romance with playful, unforgettable moments.",
    isPlaceholder: true,
    images: [
      '/assets/images/g-5-min.JPG',
      '/assets/images/g-4-min.JPG',
      '/assets/images/IMG_2262.JPG',
    ],
  },
  {
    id: 'rooftop-skyline',
    title: 'Rooftop Skyline Wedding',
    story:
      "City lights, blush-and-berry blooms, and confetti in the air — this rooftop celebration carried romance from golden hour vows to a starlit first kiss.",
    isPlaceholder: true,
    images: [
      '/assets/images/g-6-min.JPG',
      '/assets/images/g-7-min.JPG',
      '/assets/images/g-2-min.JPG',
      '/assets/images/g-8-min.JPG',
    ],
  },
  {
    id: 'garden-portrait',
    title: 'An Ethereal Garden Portrait',
    story:
      "Palms swaying overhead and a veil catching the breeze — a quietly stunning moment beneath the trees, just before the ceremony began.",
    isPlaceholder: true,
    images: ['/assets/images/image_1.png'],
  },
  {
    id: 'garden-vow',
    title: 'A Garden Vow Exchange',
    story:
      "Soft drapery, warm blooms, and a canopy of green — an intimate ceremony wrapped in golden afternoon light.",
    isPlaceholder: true,
    images: ['/assets/images/image_4.png'],
  },
];

export interface GalleryTile {
  src: string;
  alt: string;
  storyId: string;
}

/** Ordered tiles for the gallery grid. Several tiles can point at the same
 * story when they're photos from the same wedding (see weddingStories). */
export const galleryTiles: GalleryTile[] = [
  { src: '/assets/images/image_3.png', alt: 'Groom beneath a beachside floral arch', storyId: 'beachside-union' },
  { src: '/assets/images/g-5-min.JPG', alt: 'Bride and groom sharing a playful moment', storyId: 'vintage-elegance' },
  { src: '/assets/images/g-6-min.JPG', alt: 'Bride and groom kissing under city lights', storyId: 'rooftop-skyline' },
  { src: '/assets/images/g-7-min.JPG', alt: 'Newlyweds walking through confetti', storyId: 'rooftop-skyline' },
  { src: '/assets/images/image_1.png', alt: 'Bride among palms and white panels', storyId: 'garden-portrait' },
  { src: '/assets/images/image_4.png', alt: 'Couple exchanging vows beneath a floral canopy', storyId: 'garden-vow' },
  { src: '/assets/images/g-1-min.JPG', alt: 'Rooftop ceremony aisle overlooking the skyline', storyId: 'rooftop-skyline' },
  { src: '/assets/images/g-2-min.JPG', alt: 'Flower girl walking down the rooftop aisle', storyId: 'rooftop-skyline' },
  { src: '/assets/images/g-3-min.JPG', alt: 'Bride and groom embracing at night', storyId: 'rooftop-skyline' },
  { src: '/assets/images/g-4-min.JPG', alt: 'Bride in profile beneath a gallery wall', storyId: 'vintage-elegance' },
  { src: '/assets/images/g-8-min.JPG', alt: 'Bride veiled among colourful blooms', storyId: 'rooftop-skyline' },
];
