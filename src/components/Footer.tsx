'use client';

import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FDF8F2] relative overflow-hidden">
      {/* Sprinkle background pattern */}
      <div className="absolute inset-0 opacity-20">
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
      </div>

      <div className="relative z-10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end">
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#4A2C2C] hover:text-[#E89292] transition-colors duration-200"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#4A2C2C] hover:text-[#E89292] transition-colors duration-200"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
