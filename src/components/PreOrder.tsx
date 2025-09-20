import Link from 'next/link';
import Image from 'next/image';

export default function PreOrder() {
  return (
    <section className="bg-[#F8E8D7] py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-[1022px] mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[#4A2C2C] text-3xl font-cooper-bold mb-4">Pre-Order</h2>
          <p className="text-[#4A2C2C] text-lg mb-6 max-w-2xl">
            Interested in placing a bulk order? We&apos;ve got you covered!
          </p>
          <Link
            href="/pre-order"
            className="bg-[#E89292] text-white px-8 py-3 rounded-lg font-cooper-medium hover:bg-[#D4A76A] transition-colors duration-200"
          >
            Place Your Order
          </Link>
        </div>
      </div>
      
      {/* Floating transparent image */}
      <div className="absolute -bottom-20 right-4 sm:right-8 lg:right-16 z-20">
        <Image
          src="/brookiebar_transparent.png"
          alt="Brookie Bar"
          width={250}
          height={250}
          className="opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </section>
  );
}
