import React from 'react';
import Link from 'next/link';

// Responsive Footer for E-commerce Landing Page
const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-100 py-8 px-4 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright Section */}
        <div className="text-sm font-merriweather tracking-wide">© {new Date().getFullYear()} FASHION. All rights reserved.</div>
        {/* Footer Links */}
        <div className="flex gap-6 text-sm font-merriweather">
          <Link href="#privacy" className="hover:underline">Privacy Policy</Link>
          <Link href="#terms" className="hover:underline">Terms of Service</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
