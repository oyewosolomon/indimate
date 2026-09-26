export interface StoryImage {
  src: string;
  alt: string;
}

export interface CoupleStory {
  id: string;
  names: string;
  quote: string[];
  images: StoryImage[];
}

const folder = (name: string, files: string[]): StoryImage[] =>
  files.map((file) => ({
    src: `/assets/images/stories/${encodeURIComponent(name)}/${encodeURIComponent(file)}`,
    alt: `${name} wedding photo`,
  }));

export const coupleStories: CoupleStory[] = [
  {
    id: 'chioma-jesam',
    names: 'Chioma & Jesam',
    quote: [
      "Hi everyone, we can't stop thanking you for helping to turn our ridiculous idea and plan into something people actually liked and loved.",
      "It wasn't straightforward so it definitely wouldn't have been easy, but y'all just kept at it and we really appreciate it.",
      "From Favour to Kena, the stylists, vendors and down to Sammie (I fear I've fallen in love with him) y'all really went above and beyond.",
      "My initial sentiment was that after it all ends I'll keep things private and under wraps, but you have been so amazing that we (especially I) fully approve/endorse using our story/event/case in your portfolio and works online and offline.",
      "We will sign any waivers or agreements you want and give you full rights to use anything any part of everything for whatever use case you want or deem fit.",
      "If you ever want and/or need anything from us at anytime and anywhere, please please let us know.",
      "Thank you so much and have a good one, we appreciate you. Huzzah! 🍻",
    ],
    images: folder('CHIOMA & JESAM', [
      '3E7A4636-Edit.jpg.webp',
      '3E7A4892.jpg.webp',
      '3E7A5204.jpg.webp',
      '3E7A5225-Edit.jpg.webp',
      '3E7A5503.jpg.webp',
      '8E1A9038.jpg.webp',
    ]),
  },
  {
    id: 'kofo-bimbo',
    names: 'Kofo & Bimbo',
    quote: [
      "This is long overdue, but now that wedding fever has passed and my brain cells have returned, I have just come to say a massive thank you to you and your entire team. When I say you killed it, you absolutely smashed it and knocked it out of the park. You guys gave me my dream wedding and I think the joy on my face the whole day is a testament to that. The wedding was everything I imagined it to be and more. Favour and Lucia, you guys were a dream to work with, thank you for your patience, understanding and for putting up with me and Bimbo's shenanigans. Like I honestly can't imagine a better day. Honestly if I can convince Bimbo to do it all again, we'll be back again sometime in the future for vow renewal 😂😂😂 nahhhh weddings by maison fave or nothing for real.",
    ],
    images: folder('KOFO & BIMBO', [
      'IMG_0355.JPG.webp',
      'IMG_0375.JPG.webp',
      'IMG_0377.JPG.webp',
      'IMG_7352.JPG.webp',
      'IMG_7353.JPG.webp',
      'IMG_7355.JPG.webp',
      'IMG_7358.JPG.webp',
      'IMG_7359.JPG.webp',
      'IMG_7363.JPG.webp',
    ]),
  },
  {
    id: 'fisayo-johnson',
    names: 'Fisayo & Johnson',
    quote: [
      'Favour, Kena and the entire IntimateWeddingsbyFave Team! 🥹❤️',
      "We just wanted to say a VERY big thank you to you guys! You truly planned and executed the white wedding of our dreams and we honestly could not have asked for a more beautiful day. Everything was so dreamy, romantic and intentional. ✨ Every day since the wedding, we find ourselves going back through the pictures and videos, trying to relive the memories from that day over and over again. And honestly… SERIOUS TAKE ME BACK!! 😩😂 We had SO much fun! And it makes us even happier knowing that our families and friends had such an amazing time too. Everything was just so thoughtfully put together. The decor? Stunning. The lighting? Perfect. The cocktail hour? 10/10. The games? Loved it! The food?! THE FOOD!!! 😭 And please, let's talk about the small chops and cocktails because OMG!!! I LOVED them. Everything was soooo good. 😂❤️",
      "What stood out to us the most was how intentional everything felt. Even the little details that we probably didn't notice in the moment came together so beautifully. You guys really thought through the entire experience, and it showed. And the organization?! Flawless. We genuinely didn't have to worry about anything. We were able to just be present, enjoy ourselves, celebrate with our families and friends, dance, laugh and soak in the day because you guys had everything handled. That is such a gift on a wedding day, and we are so grateful.",
      `Favour, a special thank you to you especially! All those "Can we get on a quick call to discuss the decor details?" moments definitely paid off! 😂 Thank you for being so patient with us, for listening to our ideas, working with us and bringing everything together so beautifully. It turned out even better than we could have imagined, and we are genuinely so happy and SO proud of our wedding day. 🥹❤️`,
      "I'm always so quick to whip out my phone and show people pictures and videos from the wedding because I'm just that obsessed with how everything turned out. 😂 You guys gave us a day that we will look back on for years and years with nothing but the biggest smiles.",
      'Thank you, thank you, THANK YOU to the entire IntimateWeddingsbyFave Team! We genuinely appreciate all the hard work, care, creativity and intentionality that went into making our day so special.',
      'We had the BEST time, our families and friends had the BEST time, and we have memories that we will cherish forever. 🥹❤️',
      'We love you guys and are so grateful we chose you to bring our white wedding to life. You absolutely smashed it!!! 👏🏾✨',
    ],
    images: folder('FISAYO & JOHNSON', [
      'IMG_03288.webp',
      'IMG_0329.JPG.webp',
      'IMG_0330.JPG.webp',
      'IMG_0334.JPG.webp',
      'IMG_8362.JPG.webp',
      'IMG_8614.JPG.webp',
      'IMG_8618.JPG.webp',
      'IMG_8619.JPG.webp',
    ]),
  },
];
