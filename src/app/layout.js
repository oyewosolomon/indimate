// layout.js
import { Italianno } from 'next/font/google';
import { Inter } from 'next/font/google';
import "./globals.css";

const italianno = Italianno({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-italianno',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${italianno.variable} ${inter.variable}`}>
      <body className={italianno.className}>
        {children}
      </body>
    </html>
  );
}