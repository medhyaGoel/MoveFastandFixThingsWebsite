import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import { Playfair_Display } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
// High-contrast serif for NYT-style title and any `font-serif` text
const nytSerif = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Move Fast & Fix Things: Innovating for Effective Government",
  description: "POLISCI 33SI - A deep dive into the past, present, and future of civic technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nytSerif.variable} antialiased`}>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

