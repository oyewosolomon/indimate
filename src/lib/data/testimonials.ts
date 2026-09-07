export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  event: string;
  /** True until the owner replaces this with a real client's words. */
  isPlaceholder: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      "From the very first call, we felt like our wedding was in the safest hands. Every detail, from the flowers to the final send-off, felt exactly like us.",
    author: "Add couple's name",
    event: 'Add wedding details (venue, date)',
    isPlaceholder: true,
  },
  {
    id: 'testimonial-2',
    quote:
      "We didn't lift a finger on our wedding day and still walked into a celebration that felt more magical than we imagined. Truly effortless.",
    author: "Add couple's name",
    event: 'Add wedding details (venue, date)',
    isPlaceholder: true,
  },
  {
    id: 'testimonial-3',
    quote:
      "Planning a destination wedding felt impossible until we found this team. They made every step feel personal, calm, and completely stress-free.",
    author: "Add couple's name",
    event: 'Add wedding details (venue, date)',
    isPlaceholder: true,
  },
];
