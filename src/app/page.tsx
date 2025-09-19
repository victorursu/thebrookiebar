import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#FDF8F2] relative overflow-hidden">
        {/* Sprinkle background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-4 left-4 w-2 h-2 bg-pink-400 rounded-full"></div>
          <div className="absolute top-8 left-12 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
          <div className="absolute top-12 left-8 w-2.5 h-2.5 bg-green-400 rounded-full"></div>
          <div className="absolute top-6 left-20 w-1 h-1 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-16 left-6 w-2 h-2 bg-orange-400 rounded-full"></div>
          <div className="absolute top-20 left-16 w-1.5 h-1.5 bg-pink-300 rounded-full"></div>
          <div className="absolute top-24 left-10 w-2 h-2 bg-blue-300 rounded-full"></div>
          <div className="absolute top-28 left-14 w-1 h-1 bg-green-300 rounded-full"></div>
          <div className="absolute top-32 left-18 w-2.5 h-2.5 bg-yellow-300 rounded-full"></div>
          <div className="absolute top-36 left-8 w-1.5 h-1.5 bg-orange-300 rounded-full"></div>
          <div className="absolute top-40 left-12 w-2 h-2 bg-pink-400 rounded-full"></div>
          <div className="absolute top-44 left-16 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
          <div className="absolute top-48 left-20 w-2.5 h-2.5 bg-green-400 rounded-full"></div>
        </div>

        <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-[#4A2C2C] text-lg mb-4">Welcome to</h1>
              <div className="mb-6 flex justify-center">
                <Image
                  src="/logo.png"
                  alt="The Brookie Bar Logo"
                  width={300}
                  height={150}
                  className="h-24 md:h-32 w-auto"
                  priority
                />
              </div>
              <p className="text-[#4A2C2C] text-lg mb-8 max-w-2xl mx-auto">
                Treat yourself to our delicious, handcrafted brookie bars!
              </p>
              
              {/* Brookie Images */}
              <div className="flex justify-center items-center space-x-4 mb-8">
                <div className="w-24 h-24 bg-[#8B4513] rounded-lg shadow-lg"></div>
                <div className="w-24 h-24 bg-[#8B4513] rounded-lg shadow-lg"></div>
                <div className="w-24 h-24 bg-[#8B4513] rounded-lg shadow-lg"></div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/flavours"
                  className="bg-[#4A2C2C] text-white px-8 py-3 rounded-lg font-cooper-medium hover:bg-[#3A1F1F] transition-colors duration-200"
                >
                  Shop Flavors
                </Link>
                <Link 
                  href="/contact"
                  className="bg-white text-[#4A2C2C] border-2 border-[#4A2C2C] px-8 py-3 rounded-lg font-cooper-medium hover:bg-[#FDF8F2] transition-colors duration-200"
                >
                  Find Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* This Week's Flavors Section */}
      <section className="bg-[#FDF8F2] relative overflow-hidden py-16">
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
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[#4A2C2C] text-3xl font-cooper-bold text-center mb-12">
              This Week&apos;s Flavors
            </h2>
            
            <div className="flex items-center justify-center">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              
              <div className="flex space-x-6 mx-4">
                {['Classic', 'Kinder Bueno', 'Funfetti', 'Oreo'].map((flavor) => (
                  <div key={flavor} className="bg-white rounded-lg shadow-md p-4 w-48 text-center">
                    <div className="w-32 h-32 bg-[#8B4513] rounded-lg mx-auto mb-4"></div>
                    <h3 className="text-[#4A2C2C] font-bold text-lg mb-4">{flavor}</h3>
                    <button className="bg-white text-[#4A2C2C] border-2 border-[#4A2C2C] px-4 py-2 rounded-lg font-cooper-medium hover:bg-[#FDF8F2] transition-colors duration-200">
                      See Flavor
                    </button>
                  </div>
                ))}
              </div>
              
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Order Section */}
      <section className="bg-[#F8E8D7] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-[#4A2C2C] text-3xl font-cooper-bold mb-4">Pre-Order</h2>
              <p className="text-[#4A2C2C] text-lg">
                Interested in placing a bulk order? We&apos;ve got you covered!
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-32 h-32 bg-[#8B4513] rounded-full flex items-center justify-center">
                <span className="text-white text-4xl">🍪</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Farmers Market Section */}
      <section className="bg-[#FDF8F2] relative overflow-hidden py-16">
        {/* Sprinkle background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4 w-2 h-2 bg-pink-400 rounded-full"></div>
          <div className="absolute top-8 left-12 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
          <div className="absolute top-12 left-8 w-2.5 h-2.5 bg-green-400 rounded-full"></div>
          <div className="absolute top-6 left-20 w-1 h-1 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-16 left-6 w-2 h-2 bg-orange-400 rounded-full"></div>
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <h2 className="text-[#4A2C2C] text-3xl font-cooper-bold mb-4">Farmers Market</h2>
              <p className="text-[#4A2C2C] text-lg mb-6">
                Come find us every weekend at the local farmers market!
              </p>
              <Link 
                href="/about"
                className="bg-white text-[#4A2C2C] border-2 border-[#4A2C2C] px-6 py-3 rounded-lg font-cooper-medium hover:bg-[#FDF8F2] transition-colors duration-200 inline-block"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}