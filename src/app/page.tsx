import Link from 'next/link';
import Hero from '@/components/Hero';
import Slider from '@/components/Slider';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* This Week's Flavors Section */}
      <Slider title="This Week's Flavors" />

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
                    href="/flavors"
                    className="bg-white text-[#4A2C2C] border-2 border-[#4A2C2C] px-6 py-3 rounded-lg font-cooper-medium hover:bg-[#FDF8F2] transition-colors duration-200 inline-block"
                  >
                    View All Flavors
                  </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}