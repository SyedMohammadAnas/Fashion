// Import necessary modules and components
import React from 'react';
// Import the shared Header and Footer components
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
// Import Tailwind for styling
// Import fonts in _app or _document for global use (assumed already done)

// Sidebar Filter UI (no logic, just UI)
const FilterSidebar = () => (
  <aside className="w-72 min-w-[260px] bg-white border-r border-gray-100 p-6 flex flex-col gap-4">
    {/* Refine By */}
    <h2 className="font-bebas text-xl mb-2">Refine By</h2>
    {/* Gender */}
    <div>
      <button className="font-merriweather font-bold flex items-center mb-2">- Gender</button>
      <div className="ml-4 flex flex-col gap-1">
        <label className="flex items-center gap-2"><input type="checkbox" /> Men (113,560)</label>
        <label className="flex items-center gap-2"><input type="checkbox" /> Women (2)</label>
      </div>
    </div>
    {/* Category */}
    <div>
      <button className="font-merriweather font-bold flex items-center mb-2">- Category</button>
      <div className="ml-4 flex flex-col gap-1">
        <label className="flex items-center gap-2"><input type="checkbox" /> Shirts (113,562)</label>
      </div>
    </div>
    {/* Collapsible Filters */}
    {['Price', 'Brands', 'Occasion', 'Discount', 'Colors', 'Size & Fit', 'Tags', 'Rating'].map((filter) => (
      <div key={filter}>
        <button className="font-merriweather font-bold flex items-center mb-2">+ {filter}</button>
      </div>
    ))}
    {/* More Filters */}
    <button className="font-merriweather font-bold flex items-center mt-4">More Filters <span className="ml-2">&#8964;</span></button>
  </aside>
);

// Mock product data
const products = [
  {
    id: 1,
    brand: 'Mameru',
    name: 'Men Classic Regular Fit Shirt',
    image: '/carousel/shirt1.jpg',
    rating: 2.6,
    reviews: 70,
    price: 465,
    original: 1499,
    discount: '69% off',
    ratingColor: 'bg-red-600',
  },
  {
    id: 2,
    brand: 'Ketch',
    name: 'Men Printed Slim Fit Shirt',
    image: '/carousel/shirt2.jpg',
    rating: 3.5,
    reviews: 618,
    price: 390,
    original: 1949,
    discount: '80% off',
    ratingColor: 'bg-green-600',
  },
  {
    id: 3,
    brand: 'VORTEX',
    name: 'Men Regular Fit Shirt with Curved Hem',
    image: '/carousel/shirt3.jpg',
    rating: 3.1,
    reviews: 167,
    price: 328,
    original: 698,
    discount: '53% off',
    ratingColor: 'bg-green-600',
  },
  {
    id: 4,
    brand: 'VORTEX',
    name: 'Men Regular Fit Shirt with Curved Hem',
    image: '/carousel/shirt3.jpg',
    rating: 3.1,
    reviews: 167,
    price: 328,
    original: 698,
    discount: '53% off',
    ratingColor: 'bg-green-600',
  },
  {
    id: 5,
    brand: 'VORTEX',
    name: 'Men Regular Fit Shirt with Curved Hem',
    image: '/carousel/shirt3.jpg',
    rating: 3.1,
    reviews: 167,
    price: 328,
    original: 698,
    discount: '53% off',
    ratingColor: 'bg-green-600',
  },
  {
    id: 6,
    brand: 'HEH',
    name: 'Men Regular Fit Shirt with Curved Hem',
    image: '/carousel/shirt3.jpg',
    rating: 3.1,
    reviews: 167,
    price: 328,
    original: 698,
    discount: '53% off',
    ratingColor: 'bg-green-600',
  },
];

// Product Grid
const ProductGrid = () => (
  <section className="flex-1 p-8">
    {/* Top bar: Items found, sort by */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
      <span className="font-merriweather font-bold text-base">113,560 Items Found</span>
      <div className="flex items-center gap-4">
        {/* Removed grid toggle for simplicity */}
        <span className="font-merriweather text-sm ml-4">SORT BY</span>
        <select className="border border-gray-300 rounded px-2 py-1 font-merriweather text-sm">
          <option>Relevance</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest First</option>
        </select>
      </div>
    </div>
    {/* Product Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col items-center bg-white rounded shadow-sm p-4">
          {/* Product Image */}
          <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded mb-4" />
          {/* Brand */}
          <span className="font-bebas text-lg text-gray-700">{product.brand}</span>
          {/* Name */}
          <span className="font-merriweather text-base text-center mb-2">{product.name}</span>
          {/* Rating */}
          <span className={`text-white px-2 py-1 rounded text-xs font-bold ${product.ratingColor} mb-1`}>
            {product.rating}★ | {product.reviews}
          </span>
          {/* Price and Discount */}
          <div className="flex items-center gap-2">
            <span className="font-merriweather font-bold text-lg">₹{product.price}</span>
            <span className="line-through text-gray-400 text-sm">₹{product.original}</span>
            <span className="text-yellow-600 text-xs">({product.discount})</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Main Shirts Page
const ShirtsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header (imported) */}
      <Header />
      {/* Main Content */}
      <main className="flex flex-1 w-full max-w-7xl mx-auto mt-24">
        {/* Sidebar Filter */}
        <FilterSidebar />
        {/* Product Grid */}
        <ProductGrid />
      </main>
      {/* Footer (imported) */}
      <Footer />
    </div>
  );
};

export default ShirtsPage;
