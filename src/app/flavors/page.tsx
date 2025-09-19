'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

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

export default function Flavors() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load products from JSON file
    fetch('/products.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FDF8F2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-[#4A2C2C] text-4xl font-cooper-bold mb-8">Our Flavors</h1>
            <p className="text-[#4A2C2C] text-lg">Loading our delicious brookie bars...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDF8F2] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-[#4A2C2C] text-4xl font-cooper-bold mb-4">Our Flavors</h1>
          <p className="text-[#4A2C2C] text-lg max-w-2xl mx-auto">
            Discover our handcrafted brookie bar collection, each one made with love and premium ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.sku} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Product Image */}
              <div className="relative h-64 bg-[#8B4513] flex items-center justify-center">
                <span className="text-white text-6xl">🍪</span>
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-[#4A2C2C] font-cooper-bold text-xl">{product.title}</h3>
                  <span className="text-[#4A2C2C] font-bold text-2xl">{product.price}</span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <p className="text-[#4A2C2C] text-sm">{product.description1}</p>
                  <p className="text-[#4A2C2C] text-sm">{product.description2}</p>
                  <p className="text-[#4A2C2C] text-sm">{product.description3}</p>
                  <p className="text-[#4A2C2C] text-sm">{product.description4}</p>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-[#E89292] text-white px-4 py-2 rounded-lg font-cooper-medium hover:bg-[#D4A76A] transition-colors duration-200">
                    Add to Cart
                  </button>
                  <button className="bg-white text-[#4A2C2C] border-2 border-[#4A2C2C] px-4 py-2 rounded-lg font-cooper-medium hover:bg-[#FDF8F2] transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-[#4A2C2C] text-3xl font-cooper-bold mb-4">Ready to Order?</h2>
          <p className="text-[#4A2C2C] text-lg mb-6">
            Pre-order your favorite flavors or find us at local farmers markets!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#E89292] text-white px-8 py-3 rounded-lg font-cooper-medium hover:bg-[#D4A76A] transition-colors duration-200">
              Pre-Order Now
            </button>
            <button className="bg-white text-[#4A2C2C] border-2 border-[#4A2C2C] px-8 py-3 rounded-lg font-cooper-medium hover:bg-[#FDF8F2] transition-colors duration-200">
              Find Us at Markets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
