export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FDF8F2] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-[#4A2C2C] text-4xl font-cooper-bold mb-4">Contact Us</h1>
          <p className="text-[#4A2C2C] text-lg">
            Get in touch with us for questions, orders, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-[#4A2C2C] text-2xl font-cooper-bold mb-6">Send us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-[#4A2C2C] font-semibold mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E89292] focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-[#4A2C2C] font-semibold mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E89292] focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
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

              <div>
                <label htmlFor="phone" className="block text-[#4A2C2C] font-semibold mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E89292] focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-[#4A2C2C] font-semibold mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E89292] focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order Inquiry</option>
                  <option value="preorder">Pre-Order Question</option>
                  <option value="flavors">Flavor Information</option>
                  <option value="market">Farmers Market</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-[#4A2C2C] font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E89292] focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#4A2C2C] text-white py-4 rounded-lg font-cooper-medium text-lg hover:bg-[#3A1F1F] transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-[#F8E8D7] rounded-lg p-8">
              <h2 className="text-[#4A2C2C] text-2xl font-cooper-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-[#E89292] text-lg font-bold mb-2">Email</h3>
                  <p className="text-[#4A2C2C]">hello@thebrookiebar.com</p>
                </div>
                
                <div>
                  <h3 className="text-[#E89292] text-lg font-bold mb-2">Phone</h3>
                  <p className="text-[#4A2C2C]">(555) 123-BROOKIE</p>
                </div>
                
                <div>
                  <h3 className="text-[#E89292] text-lg font-bold mb-2">Farmers Market</h3>
                  <p className="text-[#4A2C2C] mb-2">Downtown Farmers Market</p>
                  <p className="text-[#4A2C2C] mb-2">Main Street Plaza</p>
                  <p className="text-[#4A2C2C]">Saturdays: 8:00 AM - 2:00 PM</p>
                  <p className="text-[#4A2C2C]">Sundays: 9:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-[#4A2C2C] text-2xl font-cooper-bold mb-6">Follow Us</h2>
              
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#4A2C2C] text-white p-3 rounded-lg hover:bg-[#3A1F1F] transition-colors duration-200"
                >
                  <span className="sr-only">Instagram</span>
                  📷
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#4A2C2C] text-white p-3 rounded-lg hover:bg-[#3A1F1F] transition-colors duration-200"
                >
                  <span className="sr-only">Facebook</span>
                  📘
                </a>
              </div>
              
              <p className="text-[#4A2C2C] text-sm mt-4">
                Follow us for the latest flavors, market updates, and behind-the-scenes content!
              </p>
            </div>

            <div className="bg-[#F8E8D7] rounded-lg p-8">
              <h2 className="text-[#4A2C2C] text-2xl font-cooper-bold mb-4">Response Time</h2>
              <p className="text-[#4A2C2C]">
                We typically respond to all inquiries within 24 hours. For urgent matters, 
                please call us directly or visit us at the farmers market!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
