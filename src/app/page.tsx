'use client'
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import Image from 'next/image';
import { Merriweather, Bebas_Neue } from 'next/font/google';
import { FocusCards } from "../components/ui/focus-cards";

// Instantiate the font for use in this file
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });
const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: ['400'], display: 'swap' });

// Main E-commerce Landing Page
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      {/* Header Section */}
      <Header />
      {/* Full-Page Hero Section with Background Image */}
      <section
        // Set to min-h-screen to ensure the hero section fills the entire viewport height
        className="relative flex items-center justify-center min-h-screen w-full overflow-hidden"
        style={{ backgroundImage: "url('/hero-suited.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 0 z-0" aria-hidden="true" />
        {/* Centered Hero Text Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16 w-full">
          {/* Use font loader className for Merriweather on hero heading */}
          <h1 className={`${merriweather.className} text-5xl md:text-7xl text-white drop-shadow-2xl mb-6 tracking-wider`}>
            Explore our Exclusive Collection
          </h1>
          <p className="text-lg md:text-2xl font-merriweather text-white max-w-2xl drop-shadow-md">
            Upgrade your style game with our 2025 Collection - where every piece promises to elevate your look to new heights
          </p>
        </div>
      </section>

      {/* Footer Section */}
      {/* Hot Picks Section - displays four product cards */}
      <section className="w-full bg-white py-16">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 tracking-widest font-merriweather">Hot Picks</h2>
        {/* Responsive grid for product cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {/* ProductCard component for each item */}
          <ProductCard
            title="Jeans"
            image="/HotPicks/jeans.jpg"
            alt="Wide Leg Jeans"
          />
          <ProductCard
            title="Shirt"
            image="/HotPicks/shirt.jpg"
            alt="Beige Short Sleeve Shirt"
          />
          <ProductCard
            title="Shorts"
            image="/HotPicks/shorts.jpg"
            alt="Olive Green Shorts"
          />
          <ProductCard
            title="T-Shirt"
            image="/HotPicks/tshirt.jpg"
            alt="Grey Authentic T-Shirt"
          />
        </div>
      </section>

      {/* Features/Benefits Section - displays four key features */}
      <section className="w-full bg-white py-10 border-b border-gray-200">
        {/* Features data array */}
        {/**
         * Each feature contains:
         * - iconPath: string (PNG path)
         * - title: string
         * - description: string
         */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 text-center">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {/* Icon using Next.js Image component */}
              <div className="mb-2">
                <Image src={feature.iconPath} alt={feature.alt} width={48} height={48} className="mx-auto w-12 h-12 object-contain" />
              </div>
              {/* Title - Bebas Neue */}
              <h3 className={`${bebasNeue.className} text-2xl md:text-3xl font-bold mb-2 tracking-wide`}>{feature.title}</h3>
              {/* Description - Merriweather */}
              <p className="text-base text-gray-700 font-merriweather max-w-xs mx-auto">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers Section - displays top selling products */}
      <section className="w-full bg-gray-50 py-16">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 tracking-widest font-merriweather">Best Sellers</h2>
        {/* Responsive grid for best seller product cards: 4 columns, 3 rows (12 products) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {bestSellers.map((product, idx) => (
            <MinimalProductCard key={idx} {...product} />
          ))}
        </div>
      </section>

      {/* --- Brand Image Section (between Best Sellers and Carousel) --- */}
      <div className="relative w-full h-64 md:h-320 flex items-center justify-center bg-black">
        {/* Brand image fills width, height is fixed for aspect ratio and responsiveness */}
        <Image
          src="/brand2.jpg"
          alt="Fashion is Confidence - Brand Visual"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>
      {/* --- End Brand Image Section --- */}

      {/* Custom Carousel Section - displays 3 images at a time, looping, with Framer Motion */}
      <section className="w-full bg-white py-16">
        <Carousel />
      </section>

      {/* Focus Section - visually highlights key looks or products */}
      <section className="w-full bg-gray-50 py-16">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 tracking-widest font-merriweather">
          Focus
        </h2>
        {/* FocusCards displays a grid of focus images */}
        <FocusCards
          cards={[
            { title: "Urban Explorer", src: "/focus/focus1.jpg" },
            { title: "Minimalist Chic", src: "/focus/focus2.jpg" },
            { title: "Street Style", src: "/focus/focus3.jpg" },
            { title: "Classic Elegance", src: "/focus/focus4.jpg" },
            { title: "Bold Statements", src: "/focus/focus5.jpg" },
            { title: "Effortless Cool", src: "/focus/focus6.jpg" },
          ]}
        />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

// ProductCard component for Hot Picks section
function ProductCard({ title, image, alt }: { title: string; image: string; alt: string }) {
  return (
    <div className="bg-gray-50 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-4 group">
      {/* Product Image */}
      <div className="w-full h-56 relative mb-4 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      {/* Product Title */}
      <h3 className={`${merriweather.className} text-lg font-semibold text-gray-800 mb-2`}>{title}</h3>
      {/* Placeholder for future price or action button */}
      {/* <button className="mt-auto bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">Shop Now</button> */}
    </div>
  );
}

// Features data array for the benefits section, now using PNG icons from /public/Icons
const features = [
  {
    iconPath: '/Icons/aeroplane.png',
    title: 'Swift as the wind',
    description: 'Parcels delivered promptly via air',
    alt: 'Aeroplane Icon',
  },
  {
    iconPath: '/Icons/delivery.png',
    title: 'Fast Delivery',
    description: 'Shipping parcels to every corner of India',
    alt: 'Delivery Icon',
  },
  {
    iconPath: '/Icons/cash.png',
    title: 'Secure Payment',
    description: 'We accept all payment methods',
    alt: 'Cash Icon',
  },
  {
    iconPath: '/Icons/support.png',
    title: 'Support',
    description: 'Get expert assistance anytime: 10-hour availability for chat, calls, and emails',
    alt: 'Support Icon',
  },
];

// Minimal product card for Best Sellers (no description, clean look)
function MinimalProductCard({ title, image, alt, price, rating, reviews, badge }: {
  title: string;
  image: string;
  alt: string;
  price: string;
  rating: number;
  reviews: number;
  badge?: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-4 group relative">
      {/* Badge (optional) */}
      {badge && (
        <span className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full z-10 tracking-wide">{badge}</span>
      )}
      {/* Product Image */}
      <div className="w-full h-40 relative mb-3 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      {/* Product Title */}
      <h3 className={`${merriweather.className} text-base md:text-lg font-bold text-gray-900 mb-1 text-center`}>{title}</h3>
      {/* Price */}
      <div className="text-lg font-bold text-green-700 mb-1 font-merriweather">{price}</div>
      {/* Rating and reviews */}
      <div className="mb-3 text-sm text-gray-700 font-merriweather">
        {rating}⭐({reviews})
      </div>
      {/* Add to Cart Button */}
      <button className={`mt-auto bg-black text-white px-4 py-1 rounded-lg hover:bg-gray-800 transition ${bebasNeue.className} tracking-wide text-base`}>Add to Cart</button>
    </div>
  );
}

// Best Sellers data array for the Best Sellers section (12 products, minimal info)
const bestSellers = [
  {
    title: 'Classic Denim Jacket',
    image: '/HotPicks/jeans.jpg',
    alt: 'Classic Denim Jacket',
    price: '$59.99',
    rating: 4.8,
    reviews: 1223,
    badge: 'Best Seller',
  },
  {
    title: 'Premium White Shirt',
    image: '/HotPicks/shirt.jpg',
    alt: 'Premium White Shirt',
    price: '$39.99',
    rating: 4.5,
    reviews: 987,
    badge: 'Top Rated',
  },
  {
    title: 'Urban Cargo Shorts',
    image: '/HotPicks/shorts.jpg',
    alt: 'Urban Cargo Shorts',
    price: '$29.99',
    rating: 4.2,
    reviews: 654,
  },
  {
    title: 'Signature Logo Tee',
    image: '/HotPicks/tshirt.jpg',
    alt: 'Signature Logo Tee',
    price: '$24.99',
    rating: 4.7,
    reviews: 1102,
  },
  // 8 more products for 3 rows of 4 columns
  {
    title: 'Slim Fit Chinos',
    image: '/HotPicks/jeans.jpg',
    alt: 'Slim Fit Chinos',
    price: '$34.99',
    rating: 4.3,
    reviews: 432,
  },
  {
    title: 'Linen Summer Shirt',
    image: '/HotPicks/shirt.jpg',
    alt: 'Linen Summer Shirt',
    price: '$44.99',
    rating: 4.6,
    reviews: 789,
    badge: 'New',
  },
  {
    title: 'Cargo Joggers',
    image: '/HotPicks/shorts.jpg',
    alt: 'Cargo Joggers',
    price: '$32.99',
    rating: 4.0,
    reviews: 321,
  },
  {
    title: 'Graphic Print Tee',
    image: '/HotPicks/tshirt.jpg',
    alt: 'Graphic Print Tee',
    price: '$27.99',
    rating: 4.4,
    reviews: 567,
  }
];

// Carousel images and descriptions
const carouselItems = [
  {
    image: '/carousel/carousel1.jpg',
    description: 'Elevate your style with our premium winter collection. Warmth meets elegance in every stitch.'
  },
  {
    image: '/carousel/carousel2.jpg',
    description: 'Discover the comfort of our summer linen shirts. Breathable, stylish, and perfect for any occasion.'
  },
  {
    image: '/carousel/carousel3.jpg',
    description: 'Unleash your bold side with our exclusive streetwear range. Designed for the trendsetters.'
  },
  {
    image: '/carousel/carousel4.jpg',
    description: 'Classic fits, modern vibes. Our denim essentials are a must-have for every wardrobe.'
  },
];

// Custom Carousel component
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Carousel() {
  // Index of the center image
  const [index, setIndex] = useState(0);
  // Direction for animation (1 = right, -1 = left)
  const [direction, setDirection] = useState(0);
  const total = carouselItems.length;

  // Helper to get the correct index with looping
  const getIndex = (i: number) => (i + total) % total;

  // Show 3 images: prev, current, next
  const visible = [getIndex(index - 1), getIndex(index), getIndex(index + 1)];

  // Handle navigation
  const paginate = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => getIndex(prev + dir));
  };

  // Animation variants for sliding (very smooth)
  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 400 : -400, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -400 : 400, opacity: 0 })
  };

  return (
    <div className="w-screen flex flex-col items-center justify-center overflow-x-hidden">
      {/* Carousel Images - edge to edge, tall and immersive */}
      <div className="flex justify-between items-center gap-0 w-full">
        {visible.map((i, idx) => (
          <AnimatePresence key={i} custom={direction} initial={false}>
            <motion.div
              key={i}
              className={`relative h-[80vh] overflow-hidden shadow-lg group flex-1 ${idx === 1 ? 'scale-105 z-10' : 'scale-95 opacity-80'} transition-transform duration-300`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'tween', duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ minWidth: 0 }}
            >
              {/* Image */}
              <Image
                src={carouselItems[i].image}
                alt={`Carousel ${i + 1}`}
                fill
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                sizes="33vw"
                priority={idx === 1}
              />
              {/* Overlay with description and button */}
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-end p-8">
                <p className="text-white text-lg md:text-2xl font-merriweather mb-6 text-center drop-shadow-lg">{carouselItems[i].description}</p>
                <button className={`bg-white text-black ${bebasNeue.className} px-8 py-3 rounded-full text-lg md:text-xl shadow-lg hover:bg-gray-200 transition`}>Explore Collection</button>
              </div>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
      {/* Navigation Buttons below carousel */}
      <div className="flex items-center justify-center gap-8 mt-6">
        <button
          aria-label="Previous"
          className="bg-black/60 hover:bg-black text-white rounded-full w-12 h-12 flex items-center justify-center transition"
          onClick={() => paginate(-1)}
        >
          <span className="text-2xl">&#8592;</span>
        </button>
        <button
          aria-label="Next"
          className="bg-black/60 hover:bg-black text-white rounded-full w-12 h-12 flex items-center justify-center transition"
          onClick={() => paginate(1)}
        >
          <span className="text-2xl">&#8594;</span>
        </button>
      </div>
    </div>
  );
}
