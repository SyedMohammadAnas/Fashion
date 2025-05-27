'use client'
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import Image from 'next/image';

// Main E-commerce Landing Page
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header Section */}
      <Header />
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-16 md:py-24 max-w-6xl mx-auto w-full">
        {/* Hero Text */}
        <div className="flex-1 flex flex-col gap-6 items-start">
          <h1 className="text-5xl md:text-6xl font-bebas text-gray-900 leading-tight tracking-wider">
            Discover Your Style
          </h1>
          <p className="text-lg md:text-xl font-merriweather text-gray-700 max-w-lg">
            Shop the latest trends in fashion. Curated collections, premium quality, and exclusive offers just for you.
          </p>
          <a href="#products" className="mt-4 px-8 py-3 bg-gray-900 text-white rounded-full font-merriweather text-base shadow-lg hover:bg-gray-700 transition-colors">
            Shop Now
          </a>
        </div>
        {/* Hero Image */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/hero-fashion.jpg"
            alt="Fashion Hero"
            width={420}
            height={420}
            className="rounded-xl shadow-xl object-cover w-full max-w-xs md:max-w-md"
            priority
          />
        </div>
      </section>
      {/* Product Preview Grid */}
      <section id="products" className="max-w-6xl mx-auto w-full px-4 py-12">
        <h2 className="text-3xl font-bebas text-gray-900 mb-8 tracking-wider">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Example Product Card */}
          {[1,2,3].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center p-6 hover:shadow-xl transition-shadow">
              <Image
                src={`/product${i}.jpg`}
                alt={`Product ${i}`}
                width={220}
                height={220}
                className="rounded-md object-cover mb-4"
              />
              <h3 className="font-bebas text-xl text-gray-900 mb-2">Product Name {i}</h3>
              <p className="font-merriweather text-gray-700 mb-4 text-center">Short product description goes here for item {i}.</p>
              <span className="font-merriweather text-lg font-bold text-gray-900 mb-2">$49.99</span>
              <button className="mt-auto px-6 py-2 bg-gray-900 text-white rounded-full font-merriweather hover:bg-gray-700 transition-colors">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
      {/* Footer Section */}
      <Footer />
    </div>
  );
}
