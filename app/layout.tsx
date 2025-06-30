import { Inter } from 'next/font/google';
import type { Metadata } from "next";
import { ReactNode } from 'react';
import "./globals.css";
const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactNode;
}
export const metadata: Metadata = {
  title: "Codew | Front-End Development Company | React & Next.js Experts",
  description:
    "Codew is a professional front-end development company offering modern, high-performance websites using React, Next.js, and TailwindCSS. We help businesses grow with clean, fast, and responsive user interfaces.",
  keywords: [
    "Front-End Development Company",
    "React Development Agency",
    "Next.js Experts",
    "Web Development Services",
    "Modern Website Development",
    "TailwindCSS Developers",
    "UI/UX Front-End Services",
    "Responsive Web Design",
    "Codew Company",
    "Professional Web Solutions",
    "Custom Web Interfaces"
  ],
  authors: [{ name: "Saad Anna" }],
  creator: "Codew",
  publisher: "Codew",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://codewv.vercel.app"), // Update if domain changes
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en-US',
      'fr-FR': '/fr-FR',
    },
  },
  openGraph: {
    title: "Codew | Front-End Development Company | React & Next.js Experts",
    description:
      "Discover Codew – a front-end development company focused on building modern, scalable web interfaces using React, Next.js & TailwindCSS. Explore our client projects and web solutions.",
    url: "https://codewv.vercel.app/",
    siteName: "Codew",
    images: [
      {
        url: "/og-image.png", // Update if needed
        width: 1200,
        height: 630,
        alt: "Codew - Front-End Development Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codew | React & Next.js Front-End Development Services",
    description:
      "We create modern, responsive websites for businesses using React, Next.js & TailwindCSS. Visit codewv and grow your digital presence.",
    creator: "@yourtwitterhandle", // Replace with your Twitter handle
    images: ["/twitter-image.png"], // Make sure this exists
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  verification: {
    google: "google-site-verification-code", // Replace when available
  },
  category: "technology",
};




export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="bg-black text-white scroll-smooth">
      <body className={inter.className}>
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}