import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Responsive, sticky, and glass-effect Header for E-commerce Landing Page
const Header: React.FC = () => {
  // State for mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);
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

  // State for which dropdown is open
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // Handler for mouse enter/leave (header-wide)
  const handleDropdown = (key: string | null) => setOpenDropdown(key);

  // Find the currently open dropdown data
  const currentDropdown = leftNavDropdowns.find((cat) => cat.key === openDropdown);

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
  const headerClass = `w-full px-4 flex flex-col sticky top-0 z-50 relative transition-all duration-300
    ${isScrolled ? 'bg-white/60 backdrop-blur-sm border-b border-gray-200 shadow-xl' : 'bg-white shadow-md'}
    ${openDropdown ? 'max-h-[420px] min-h-[220px]' : 'min-h-[64px]'}
  `;

  return (
    // Header with conditional glass effect and expandable content
    <header
      className={headerClass}
      onMouseLeave={() => handleDropdown(null)}
    >
      {/* Top row: navs and logo */}
      <div className="flex items-center justify-between w-full min-h-[64px] py-4 relative">
        {/* Left-side Navigation (Desktop only) */}
        <nav className="hidden md:flex gap-8 text-base font-bebas mr-auto">
          {leftNavDropdowns.map((cat) => (
            <div
              key={cat.key}
              onMouseEnter={() => handleDropdown(cat.key)}
              className="relative"
            >
              <Link
                href={`#${cat.key}`}
                className={`hover:text-primary transition-colors px-2 py-1 rounded ${openDropdown === cat.key ? 'text-primary font-bold' : ''}`}
              >
                {cat.label}
              </Link>
            </div>
          ))}
        </nav>
        {/* Absolutely centered logo using Bebas Neue font, always at top center */}
        <Link
          href="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bebas tracking-widest text-gray-900 z-10 pointer-events-auto"
          style={{ minWidth: '160px' }}
        >
          FASHION
        </Link>
        {/* Desktop Navigation (remains on the right) */}
        <nav className="hidden md:flex gap-8 text-base font-merriweather ml-auto">
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
      {/* Expanded content row: sub-items, only visible when a category is hovered */}
      {openDropdown && (
        <div className="w-full flex flex-row gap-12 px-8 pt-2 pb-8 animate-fade-in">
          {/* Render the sub-items for the open category */}
          {leftNavDropdowns
            .find((cat) => cat.key === openDropdown)?.items.map((item, idx) => (
              <div key={item.title + idx} className="min-w-[180px]">
                <div className="font-bold text-gray-800 text-lg mb-2 uppercase">{item.title}</div>
                <ul className="flex flex-col gap-1">
                  {item.sub.map((sub, subIdx) => (
                    <li key={sub + subIdx} className="text-gray-600 hover:text-primary cursor-pointer transition-colors text-base">
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      )}
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
