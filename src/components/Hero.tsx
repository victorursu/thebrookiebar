import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hp-hero-image.png"
          alt="The Brookie Bar Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-cooper-bold mb-4">
            Welcome to
          </h1>
          <h2 className="text-5xl md:text-8xl font-cooper-bold">
            THE BROOKIE BAR
          </h2>
        </div>
      </div>
    </section>
  );
}
