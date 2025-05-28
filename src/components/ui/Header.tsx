"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Responsive, fixed, and glass-effect Header for E-commerce Landing Page
const Header: React.FC = () => {
  // State for mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);
  // State for which dropdown is open
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // State to track if the page is scrolled from the top
  const [isScrolled, setIsScrolled] = useState(false);

  // Data structure for left nav dropdowns
  const leftNavDropdowns = [
    {
      label: 'Top Wear',
      key: 'topwear',
      items: [
        {
          title: 'Shirt',
          sub: ['All Shirts', 'Satin Shirt', 'Checks Shirt', 'RFD Shirt'],
        },
        {
          title: 'T-Shirts',
          sub: ['All T-Shirts', 'Sleeveless T-Shirt', 'Full Hand T-Shirt'],
        },
        {
          title: 'Hoodies',
          sub: ['All Hoodies'],
        },
        {
          title: 'Jackets',
          sub: ['All Jackets'],
        },
      ],
    },
    {
      label: 'Bottom Wear',
      key: 'bottomwear',
      items: [
        {
          title: 'Pants',
          sub: ['All Pants', 'Jeans', 'Lycra Pants', 'Trousers', 'Shorts', 'Tracks'],
        },
      ],
    },
    {
      label: 'Traditional',
      key: 'traditional',
      items: [
        {
          title: 'Traditional',
          sub: ['All Traditional', 'Kurtas', 'Jodhpuri'],
        },
      ],
    },
    {
      label: 'Combo',
      key: 'combo',
      items: [
        {
          title: 'Combos',
          sub: ['All Combos', 'Satin & Pant', 'Tuxedo', 'Track Suits', 'Shorts'],
        },
      ],
    },
    {
      label: 'Footwear',
      key: 'footwear',
      items: [
        {
          title: 'Footwear',
          sub: ['All Footwear', 'Sneakers', 'Loafers', 'Casual', 'Formal'],
        },
      ],
    },
  ];

  // Handler for mouse enter/leave (header-wide)
  const handleDropdown = (key: string | null) => setOpenDropdown(key);

  // Effect to listen for scroll and update isScrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    // Clean up event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Conditional classes for glass effect and expanded state
  const headerClass = `fixed top-0 left-0 w-full px-4 flex flex-col z-50 transition-all duration-300
    ${isScrolled ? 'bg-white/50 backdrop-blur-sm shadow-xl' : 'bg-white/50 backdrop-blur-sm shadow-md'}
    ${openDropdown ? 'min-h-[320px]' : 'min-h-[64px]'}
  `;

  return (
    // Header with glass effect and expandable content
    <header
      className={headerClass}
      onMouseLeave={() => handleDropdown(null)}
      style={{ willChange: 'min-height, background' }}
    >
      {/* Top row: navs and logo */}
      <div className="flex items-center justify-between w-full min-h-[64px] py-4 relative">
        {/* Left-side Navigation (Desktop only) */}
        <nav className="hidden md:flex gap-8 text-xl font-bebas tracking-widest mr-auto ">
          {leftNavDropdowns.map((cat) => (
            <div
              key={cat.key}
              onMouseEnter={() => handleDropdown(cat.key)}
              className="relative"
            >
              <Link
                href={`#${cat.key}`}
                className={`hover:text-primary transition-colors px-2 py-1 rounded ${openDropdown === cat.key ? 'text-primary' : ''}`}
              >
                {cat.label}
              </Link>
            </div>
          ))}
        </nav>
        {/* Absolutely centered logo using Bebas Neue font, always at top center */}
        <Link
          href="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bebas tracking-widest text-gray-900 z-10 pointer-events-auto tracking-widest font-bold"
          style={{ minWidth: '160px' }}
        >
          FASHION
        </Link>
        {/* Desktop Navigation (remains on the right) */}
        <nav className="hidden md:flex gap-8 text-xl font-bebas ml-auto tracking-widest">
          <Link href="#products" className="hover:text-primary font-bebas transition-colors">Products</Link>
          <Link href="#Login" className="hover:text-primary font-bebas transition-colors">Login</Link>
          <Link href="#cart" className="hover:text-primary font-bebas transition-colors">Cart</Link>
        </nav>
        {/* Hamburger for Mobile (remains on the right) */}
        <button
          className="md:hidden flex flex-col gap-1.5 group ml-auto"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-7 h-0.5 bg-gray-900 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-0.5 bg-gray-900 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-0.5 bg-gray-900 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      {/* Expanded content row: sub-items, only visible when a category is hovered, with buttery smooth animation */}
      <AnimatePresence initial={false}>
        {openDropdown && (
          <motion.div
            key={openDropdown}
            initial={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
            animate={{ height: 270, opacity: 1, paddingTop: 8, paddingBottom: 50 }}
            exit={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            className="w-full flex flex-row gap-12 px-8 overflow-hidden"
          >
            {/* Animate sub-items content with fade/slide effect when switching categories */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={openDropdown + '-content'}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="flex flex-row gap-12 w-full"
              >
                {leftNavDropdowns
                  .find((cat) => cat.key === openDropdown)?.items.map((item, idx) => (
                    <div key={item.title + idx} className="min-w-[180px]">
                      <div className="font-bold text-gray-800 text-lg mb-5 uppercase tracking-widest font-bebas">{item.title}</div>
                      <ul className="flex flex-col gap-1">
                        {item.sub.map((sub, subIdx) => (
                          sub === 'All Shirts' ? (
                            <li key={sub + subIdx} className="text-gray-600 hover:text-primary text-lg cursor-pointer transition-colors font-bebas tracking-widest">
                              <Link href="/shirts">{sub}</Link>
                            </li>
                          ) : (
                            <li key={sub + subIdx} className="text-gray-600 hover:text-primary text-lg cursor-pointer transition-colors font-bebas tracking-widest">
                              {sub}
                            </li>
                          )
                        ))}
                      </ul>
                    </div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden animate-fade-in">
          <Link href="#products" className="font-merriweather text-lg" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link href="#Login" className="font-merriweather text-lg" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link href="#cart" className="font-merriweather text-lg" onClick={() => setMenuOpen(false)}>Cart</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
