import Link from 'next/link';
import Hero from '@/components/Hero';
import Slider from '@/components/Slider';
import PreOrder from '@/components/PreOrder';
import FarmersMarket from '@/components/FarmersMarket';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* This Week's Flavors Section */}
      <Slider title="This Week's Flavors" />

      {/* Pre-Order Section */}
      <PreOrder />

      {/* Farmers Market Section */}
      <FarmersMarket />
    </div>
  );
}