import React from 'react';
import Link from 'next/link';
// Import Lucide social icons
import { Instagram, Facebook, Youtube, Pin } from 'lucide-react';

// Footer component for E-commerce Landing Page
const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-100 pt-16 pb-4 px-4 mt-16 font-merriweather tracking-widest">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-8 border-b border-gray-700 tracking-widest">
        {/* About/Brand Section */}
        <div>
          <h2 className="text-lg md:text-5xl font-bebas tracking-wider mb-4 tracking-widest">Step In, Change Your Style</h2>
          <p className="text-xl leading-relaxed text-gray-300">
            Connecting the world through quality. Trusted by Google, embraced on Instagram. <span className="font-bold">Join us on a journey of innovation and satisfaction.</span>
          </p>
        </div>
        {/* Information/Links Section */}
        <div>
          <h2 className="text-lg md:text-2xl font-bebas tracking-wider mb-4 tracking-widest">INFORMATION</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="#contact" className="hover:underline tracking-widest">Contact Us</Link></li>
            <li><Link href="#privacy" className="hover:underline tracking-widest">Privacy Policy</Link></li>
            <li><Link href="#refund" className="hover:underline tracking-widest">Refund Policy</Link></li>
            <li><Link href="#shipping" className="hover:underline tracking-widest">Shipping Policy</Link></li>
            <li><Link href="#terms" className="hover:underline tracking-widest">Terms of Service</Link></li>
            <li><Link href="#faq" className="hover:underline tracking-widest">FAQ</Link></li>
            <li><Link href="#about" className="hover:underline tracking-widest">About us</Link></li>
          </ul>
        </div>
        {/* Contact Section */}
        <div>
          <h2 className="text-lg md:text-2xl font-bebas tracking-wider mb-4 tracking-widest">Contact</h2>
          <div className="text-sm text-gray-300 space-y-2">
            <div>
              <span className="font-bold text-lg tracking-widest">Location :</span> Shop No : 04, Indira Market, Narayan Bhavan Station Road, Bhayandar West, Thane, Maharashtra, 401101
            </div>
            <div>
              <span className="font-bold text-lg tracking-widest">Timing :</span><br />
              Mon-Sun: 12:00 pm - 8:00 pm
            </div>
            <div>
              <span className="font-bold text-lg tracking-widest">Customer Care:</span><br />
              Phone No: +91-9372446209
            </div>
            <div>
              <span className="font-bold text-lg tracking-widest">Email :</span> <a href="mailto:care@reloadcasuals.in" className="hover:underline">care@reloadcasuals.in</a>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar: Social Icons & Copyright */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-6 pb-2">
        {/* Social Icons */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          {/* Instagram */}
          <a href="#" aria-label="Instagram" className="hover:text-pink-400"><Instagram size={20} /></a>
          {/* Facebook */}
          <a href="#" aria-label="Facebook" className="hover:text-blue-400"><Facebook size={20} /></a>
          {/* YouTube */}
          <a href="#" aria-label="YouTube" className="hover:text-red-500"><Youtube size={20} /></a>
          {/* Pinterest (using Pin icon) */}
          <a href="#" aria-label="Pinterest" className="hover:text-pink-600"><Pin size={20} /></a>
        </div>
        {/* Copyright */}
        <div className="text-xs text-white font-bebas tracking-widest text-center">
          © 2025, Reload Casual - All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
