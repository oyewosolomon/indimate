export interface ServiceContentItem {
  type: 'p' | 'strong';
  text: string;
}

export interface Service {
  title: string;
  backgroundImage: string;
  featureImage: string;
  content: ServiceContentItem[];
}

export const serviceData: Service[] = [
  {
    title: "Full Planning",
    backgroundImage: "/assets/images/services/full-planning.jpg",
    featureImage: "/assets/images/services/full-planning.jpg",
    content: [
      { type: "p", text: "We are excited to help you plan a wedding that beautifully combines the magic of a fairytale with the excitement of an unconventional celebration." },
      { type: "p", text: `To start, we'll craft a mood board tailored to suit your personal style, imagine pastel colours, bold accents, twinkling lights, and quirky elements that capture your vision. For the venue, we can explore enchanting options like botanical gardens, art galleries, or eclectic spaces that can be transformed into a whimsical setting.` },
      { type: "p", text: "We'll carefully select vendors who align with your style and fit into the function of the day." },
      { type: "p", text: "Your wedding should feel like one read from a classic storybook." }
    ]
  },
  {
    title: "Full Decoration Service",
    backgroundImage: "/assets/images/services/full-decoration.jpg",
    featureImage: "/assets/images/services/full-decoration.jpg",
    content: [
      { type: "p", text: "We specialize in creating wedding environments that are calm, ethereal, and uniquely tailored to reflect each couple's vision." },
      { type: "p", text: "Our approach combines delicate aesthetics with a personalized touch, ensuring that every detail aligns seamlessly with your mood board. We believe that your wedding should evoke a sense of serenity and magic, transforming your chosen venue into a captivating space that resonates with your style and emotions." },
    ]
  },
  {
    title: "Full Coordinating Services",
    backgroundImage: "/assets/images/services/full-coordination.jpg",
    featureImage: "/assets/images/services/full-coordination.jpg",
    content: [
      { type: "p", text: "We bring your wedding vision to life with our expert coordinating services. From personalized planning to day-of coordination, we handle every detail to ensure a seamless celebration." },
    ]
  }
];

export const processData: Service[] = [
  {
    title: "Vision Development",
    backgroundImage: "/assets/images/services/vision-development.jpg",
    featureImage: "/assets/images/services/vision-development.jpg",
    content: [
      { type: "p", text: "Our process begins with a personalized consultation, where we take the time to understand your personalities, preferences, and aspirations." },
      { type: "p", text: "Based on your input, we will explore various themes and concepts, suggesting venue options and decor styles that align with your vision." }
    ]
  },
  {
    title: "Vendor Selection/ Coordination",
    backgroundImage: "/assets/images/services/vendor-selection.jpg",
    featureImage: "/assets/images/services/vendor-selection.jpg",
    content: [
      { type: "p", text: "Once potential vendors are identified, we initiate contact to discuss packages, pricing, and availability. Request detailed proposals that outline services, ensuring transparency in costs." },
      { type: "p", text: "Next, we create a timeline for vendor communication and decision-making, setting clear deadlines for contracts and deposits. Regular check-ins can keep everyone aligned and address any concerns promptly." }
    ]
  },
  {
    title: "Timeline/Event management",
    backgroundImage: "/assets/images/services/event-management.jpg",
    featureImage: "/assets/images/services/event-management.jpg",
    content: [
      { type: "p", text: "Our wedding event management skills are centered on meticulous planning and attention to detail, ensuring every aspect of the event is flawlessly executed." },
      { type: "p", text: "From the initial consultation to the final farewell, we prioritize understanding the couple's vision, preferences, and unique story. This allows us to curate personalized elements that reflect their individuality." }
    ]
  }
];
