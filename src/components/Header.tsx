'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-[#4A2C2C] w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation - Pre Order */}
          <nav className="hidden md:flex">
            <Link 
              href="/pre-order" 
              className={`text-white hover:text-[#D4A76A] transition-colors duration-200 font-cooper-medium text-lg ${
                pathname === '/pre-order' ? 'text-[#D4A76A]' : ''
              }`}
            >
              Pre Order
            </Link>
          </nav>

          {/* Center Logo */}
          <Link href="/" className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/logo.png"
              alt="The Brookie Bar Logo"
              width={540}
              height={270}
              className="h-48 w-auto hidden md:block mt-5"
              priority
            />
            <Image
              src="/logo.png"
              alt="The Brookie Bar Logo"
              width={180}
              height={90}
              className="h-16 w-auto md:hidden"
              priority
            />
          </Link>

          {/* Right Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/flavours" 
              className={`text-white hover:text-[#D4A76A] transition-colors duration-200 font-cooper-medium ${
                pathname === '/flavours' ? 'text-[#D4A76A]' : ''
              }`}
            >
              Flavors
            </Link>
            <Link 
              href="/about" 
              className={`text-white hover:text-[#D4A76A] transition-colors duration-200 font-cooper-medium ${
                pathname === '/about' ? 'text-[#D4A76A]' : ''
              }`}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`text-white hover:text-[#D4A76A] transition-colors duration-200 font-cooper-medium ${
                pathname === '/contact' ? 'text-[#D4A76A]' : ''
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#D4A76A] transition-colors duration-200 p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div ref={mobileMenuRef} className="md:hidden absolute top-20 left-0 right-0 z-50 bg-[#4A2C2C] border-t border-[#3A1F1F] shadow-lg">
            <div className="px-4 py-4 space-y-2">
              <Link 
                href="/pre-order" 
                className={`block px-3 py-3 text-white hover:text-[#D4A76A] transition-colors duration-200 font-cooper-medium rounded-lg hover:bg-[#3A1F1F] text-lg ${
                  pathname === '/pre-order' ? 'text-[#D4A76A] bg-[#3A1F1F]' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pre Order
              </Link>
              <Link 
                href="/flavours" 
                className={`block px-3 py-3 text-white hover:text-[#D4A76A] transition-colors duration-200 font-cooper-medium rounded-lg hover:bg-[#3A1F1F] ${
                  pathname === '/flavours' ? 'text-[#D4A76A] bg-[#3A1F1F]' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Flavors
              </Link>
              <Link 
                href="/about" 
                className={`block px-3 py-3 text-white hover:text-[#D4A76A] transition-colors duration-200 font-cooper-medium rounded-lg hover:bg-[#3A1F1F] ${
                  pathname === '/about' ? 'text-[#D4A76A] bg-[#3A1F1F]' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={`block px-3 py-3 text-white hover:text-[#D4A76A] transition-colors duration-200 font-cooper-medium rounded-lg hover:bg-[#3A1F1F] ${
                  pathname === '/contact' ? 'text-[#D4A76A] bg-[#3A1F1F]' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
