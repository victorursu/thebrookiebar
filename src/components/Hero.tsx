export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: '#fff1e1' }}>
      <div className="max-w-[1022px] mx-auto">
        {/* Background Image */}
        <div 
          className="relative h-96 w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hp-hero-image.png)'
          }}
        >
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-cooper-bold mb-4">
                Welcome to
              </h1>
              <h2 className="text-5xl md:text-8xl font-cooper-bold">
                THE BROOKIE BAR
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
