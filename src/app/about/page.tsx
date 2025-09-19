export default function About() {
  return (
    <div className="min-h-screen bg-[#FDF8F2] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-[#4A2C2C] text-4xl font-cooper-bold mb-4">Our Story</h1>
          <p className="text-[#4A2C2C] text-lg">
            From a small kitchen to your local farmers market
          </p>
        </div>

        <div className="space-y-12">
          {/* Our Story Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-[#4A2C2C] text-2xl font-cooper-bold mb-6">How It All Began</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-[#4A2C2C] mb-4">
                The Brookie Bar started as a passion project in our home kitchen. After years of perfecting 
                the ultimate brookie recipe, we decided to share our delicious creations with the community.
              </p>
              <p className="text-[#4A2C2C] mb-4">
                What started as weekend baking experiments quickly became a beloved treat at local farmers 
                markets. Our brookie bars combine the best of both worlds - the fudgy richness of brownies 
                and the chewy satisfaction of cookies.
              </p>
              <p className="text-[#4A2C2C]">
                Every brookie bar is handcrafted with love, using only the finest ingredients and traditional 
                baking techniques. We believe that great food brings people together, and we&apos;re proud to be 
                part of your family&apos;s sweet moments.
              </p>
            </div>
          </div>

          {/* Our Mission Section */}
          <div className="bg-[#F8E8D7] rounded-lg p-8">
            <h2 className="text-[#4A2C2C] text-2xl font-cooper-bold mb-6">Our Mission</h2>
              <p className="text-[#4A2C2C] text-lg">
                To create the most delicious, handcrafted brookie bars that bring joy to every bite. 
                We&apos;re committed to using quality ingredients, supporting local farmers, and creating 
                a community around our shared love of great food.
            </p>
          </div>

          {/* What Makes Us Special Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-[#4A2C2C] text-2xl font-cooper-bold mb-6">What Makes Us Special</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-[#E89292] text-xl font-bold mb-3">Handcrafted Quality</h3>
                <p className="text-[#4A2C2C]">
                  Every brookie bar is made by hand using traditional techniques and the finest ingredients.
                </p>
              </div>
              <div>
                <h3 className="text-[#E89292] text-xl font-bold mb-3">Local & Fresh</h3>
                <p className="text-[#4A2C2C]">
                  We source ingredients from local farmers and suppliers whenever possible.
                </p>
              </div>
              <div>
                <h3 className="text-[#E89292] text-xl font-bold mb-3">Unique Flavors</h3>
                <p className="text-[#4A2C2C]">
                  From classic combinations to creative twists, we&apos;re always experimenting with new flavors.
                </p>
              </div>
              <div>
                <h3 className="text-[#E89292] text-xl font-bold mb-3">Community Focused</h3>
                <p className="text-[#4A2C2C]">
                  We&apos;re proud to be part of the local farmers market community and support local events.
                </p>
              </div>
            </div>
          </div>

          {/* Find Us Section */}
          <div className="bg-[#F8E8D7] rounded-lg p-8 text-center">
            <h2 className="text-[#4A2C2C] text-2xl font-cooper-bold mb-6">Find Us at the Farmers Market</h2>
            <p className="text-[#4A2C2C] text-lg mb-6">
              Every weekend, you can find us at the local farmers market with fresh batches of our 
              delicious brookie bars. Come say hello and try a sample!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-[#4A2C2C] font-bold mb-2">Market Hours</h3>
                <p className="text-[#4A2C2C]">Saturdays: 8:00 AM - 2:00 PM</p>
                <p className="text-[#4A2C2C]">Sundays: 9:00 AM - 3:00 PM</p>
              </div>
              <div>
                <h3 className="text-[#4A2C2C] font-bold mb-2">Location</h3>
                <p className="text-[#4A2C2C]">Downtown Farmers Market</p>
                <p className="text-[#4A2C2C]">Main Street Plaza</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
