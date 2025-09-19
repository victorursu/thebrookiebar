export default function Flavours() {
  const flavors = [
    {
      name: 'Classic',
      description: 'Our signature brookie bar with rich chocolate and chewy cookie layers',
      image: '/api/placeholder/300/300',
      price: '$4.50'
    },
    {
      name: 'Kinder Bueno',
      description: 'Creamy hazelnut filling with chocolate chunks and cookie base',
      image: '/api/placeholder/300/300',
      price: '$5.00'
    },
    {
      name: 'Funfetti',
      description: 'Colorful sprinkles throughout with vanilla and chocolate layers',
      image: '/api/placeholder/300/300',
      price: '$4.75'
    },
    {
      name: 'Oreo',
      description: 'Crushed Oreo cookies mixed into our classic brookie recipe',
      image: '/api/placeholder/300/300',
      price: '$5.25'
    },
    {
      name: 'Chocolate Chip',
      description: 'Extra chocolate chips in both the brownie and cookie layers',
      image: '/api/placeholder/300/300',
      price: '$4.50'
    },
    {
      name: 'Peanut Butter',
      description: 'Smooth peanut butter swirls throughout the brookie bar',
      image: '/api/placeholder/300/300',
      price: '$5.00'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDF8F2] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-[#4A2C2C] text-4xl font-cooper-bold mb-4">Our Flavors</h1>
          <p className="text-[#4A2C2C] text-lg max-w-2xl mx-auto">
            Discover our delicious selection of handcrafted brookie bars, each made with love and the finest ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flavors.map((flavor) => (
            <div key={flavor.name} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-[#8B4513] flex items-center justify-center">
                <span className="text-white text-6xl">🍪</span>
              </div>
              <div className="p-6">
                <h3 className="text-[#4A2C2C] text-2xl font-bold mb-2">{flavor.name}</h3>
                <p className="text-[#4A2C2C] text-sm mb-4">{flavor.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#E89292] text-xl font-bold">{flavor.price}</span>
                  <button className="bg-[#4A2C2C] text-white px-4 py-2 rounded-lg font-cooper-medium hover:bg-[#3A1F1F] transition-colors duration-200">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#F8E8D7] rounded-lg p-8">
            <h2 className="text-[#4A2C2C] text-2xl font-cooper-bold mb-4">Can&apos;t Decide?</h2>
            <p className="text-[#4A2C2C] text-lg mb-6">
              Try our variety pack with one of each flavor, or create your own custom mix!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#4A2C2C] text-white px-8 py-3 rounded-lg font-cooper-medium hover:bg-[#3A1F1F] transition-colors duration-200">
                Variety Pack - $25
              </button>
              <button className="bg-white text-[#4A2C2C] border-2 border-[#4A2C2C] px-8 py-3 rounded-lg font-cooper-medium hover:bg-[#FDF8F2] transition-colors duration-200">
                Custom Mix
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#4A2C2C] text-lg">
            Available at our farmers market booth every weekend, or <a href="/pre-order" className="text-[#E89292] hover:underline">pre-order</a> for pickup!
          </p>
        </div>
      </div>
    </div>
  );
}
