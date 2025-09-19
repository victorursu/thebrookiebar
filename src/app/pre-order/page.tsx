export default function PreOrder() {
  return (
    <div className="min-h-screen bg-[#FDF8F2] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-[#4A2C2C] text-4xl font-cooper-bold mb-4">Pre-Order</h1>
            <p className="text-[#4A2C2C] text-lg">
              Place your bulk order and we&apos;ll have it ready for pickup at the farmers market!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-[#4A2C2C] text-2xl font-cooper-bold mb-6">Order Form</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-[#4A2C2C] font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E89292] focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[#4A2C2C] font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E89292] focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-[#4A2C2C] font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E89292] focus:border-transparent"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label className="block text-[#4A2C2C] font-semibold mb-4">Select Flavors</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Classic', 'Kinder Bueno', 'Funfetti', 'Oreo', 'Chocolate Chip', 'Peanut Butter'].map((flavor) => (
                  <div key={flavor} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id={flavor}
                      className="w-4 h-4 text-[#E89292] border-gray-300 rounded focus:ring-[#E89292]"
                    />
                    <label htmlFor={flavor} className="text-[#4A2C2C]">
                      {flavor}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="quantity" className="block text-[#4A2C2C] font-semibold mb-2">
                Total Quantity
              </label>
              <select
                id="quantity"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E89292] focus:border-transparent"
              >
                <option value="">Select quantity</option>
                <option value="12">12 pieces</option>
                <option value="24">24 pieces</option>
                <option value="36">36 pieces</option>
                <option value="48">48 pieces</option>
                <option value="custom">Custom amount</option>
              </select>
            </div>

            <div>
              <label htmlFor="pickup-date" className="block text-[#4A2C2C] font-semibold mb-2">
                Preferred Pickup Date
              </label>
              <input
                type="date"
                id="pickup-date"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E89292] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="notes" className="block text-[#4A2C2C] font-semibold mb-2">
                Special Instructions
              </label>
              <textarea
                id="notes"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E89292] focus:border-transparent"
                placeholder="Any special requests or dietary restrictions..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#4A2C2C] text-white py-4 rounded-lg font-cooper-medium text-lg hover:bg-[#3A1F1F] transition-colors duration-200"
            >
              Submit Pre-Order
            </button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#4A2C2C] text-lg">
            Questions about pre-orders? <a href="/contact" className="text-[#E89292] hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </div>
  );
}
