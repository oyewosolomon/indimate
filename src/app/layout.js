import localFont from "next/font/local";
import { Inter } from 'next/font/google';
import { Italianno } from 'next/font/google';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Optional: for using custom properties
});

const italianno = Italianno({
  subsets: ['latin'],
  variable: '--font-italianno',
  weight: "400",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Dreamy, Ethereal, Curated for the Unconventional Couple",
  description: "We are so happy to have you here, and you've come to the right place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${italianno.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
