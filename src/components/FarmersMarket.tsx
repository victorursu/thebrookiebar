import Link from 'next/link';

export default function FarmersMarket() {
  return (
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
        <div className="max-w-[1022px] mx-auto">
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
  );
}
