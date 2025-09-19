'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  title: string;
  sku: string;
  price: string;
  image: string;
  diagram: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
}

interface SliderProps {
  title: string;
}

export default function Slider({ title }: SliderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  useEffect(() => {
    // Load products from JSON file
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error loading products:', error));
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  if (products.length === 0) {
    return (
      <section className="py-16" style={{ backgroundColor: '#fef2e3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-[#4A2C2C] text-3xl font-cooper-bold mb-12">
              {title}
            </h2>
            <p className="text-[#4A2C2C] text-lg">Loading products...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 relative overflow-hidden" style={{ backgroundColor: '#fef2e3' }}>
      {/* Sprinkle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-4 w-2 h-2 bg-pink-400 rounded-full"></div>
        <div className="absolute top-8 left-12 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
        <div className="absolute top-12 left-8 w-2.5 h-2.5 bg-green-400 rounded-full"></div>
        <div className="absolute top-6 left-20 w-1 h-1 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-16 left-6 w-2 h-2 bg-orange-400 rounded-full"></div>
        <div className="absolute top-20 left-16 w-1.5 h-1.5 bg-pink-300 rounded-full"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1022px] mx-auto">
          <h2 className="text-[#4A2C2C] text-3xl font-cooper-bold text-center mb-12">
            {title}
          </h2>
          
          <div className="flex items-center justify-center">
            <button 
              onClick={prevSlide}
              disabled={isTransitioning}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <div 
              ref={sliderRef}
              className="flex space-x-6 mx-4 overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex space-x-6 transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (192 + 24)}px)`, // 192px width + 24px gap
                }}
              >
                {products.map((product, index) => (
                  <div 
                    key={product.sku} 
                    className="bg-white rounded-lg shadow-md p-4 w-48 text-center flex-shrink-0"
                  >
                    <div className="w-32 h-32 bg-[#8B4513] rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-4xl">🍪</span>
                    </div>
                    <h3 className="text-[#4A2C2C] font-bold text-lg mb-2">{product.title}</h3>
                    <p className="text-[#4A2C2C] text-sm mb-2">{product.description1}</p>
                    <button className="bg-white text-[#4A2C2C] border-2 border-[#4A2C2C] px-4 py-2 rounded-lg font-cooper-medium hover:bg-[#FDF8F2] transition-colors duration-200">
                      See Flavor
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={nextSlide}
              disabled={isTransitioning}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
