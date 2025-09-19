export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: '#fff1e1' }}>
      <div className="max-w-[1022px] mx-auto">
            {/* Background Image */}
            <div 
              className="relative h-96 xl:h-[481px] w-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/hp-hero-image.png)'
              }}
            >
          {/* Content */}
          <div className="absolute inset-0 flex items-end justify-center pb-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-cooper-bold mb-2" style={{ color: '#2c0900' }}>
                Welcome to
              </h1>
              <h2 className="text-3xl md:text-6xl font-cooper-bold">
                <span style={{ color: '#e798a5' }}>THE</span> <span style={{ color: '#2c0900' }}>BROOKIE BAR</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
