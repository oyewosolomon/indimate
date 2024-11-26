// layout.js
import { Italianno, Playfair_Display, Lato} from 'next/font/google';

import "./globals.css";

const italianno = Italianno({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-italianno',
});


const playfair = Playfair_Display({
  subsets: ['latin'], 
  weight: ['400', '700'],
  display: 'swap',
});


const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${italianno.variable} ${playfair.variable} ${lato.variable}`}>
      <body className={playfair.className}>
        {children}
      </body>
    </html>
  );
}