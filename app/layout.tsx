import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import "./globals.css";
const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactNode;
}



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