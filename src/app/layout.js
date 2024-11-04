import localFont from "next/font/local";
// import { Italianno } from '@/app/fonts/Italianno';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
// const italianno = Italianno({
//   src: "./fonts/Italianno/Italianno.ttf",
//   weight: '100 400 900',
//   subsets: ['latin'],
// });
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
