const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Browse Brands",
      description:
        "Explore hundreds of trusted brands and discover exclusive deals tailored just for you.",
      icon: "🔍",
    },
    {
      id: 2,
      title: "Find Your Deal",
      description:
        "Search for specific products or browse categories to find the perfect discount for your needs.",
      icon: "🎯",
    },
    {
      id: 3,
      title: "Copy Coupon",
      description:
        "Click to instantly copy verified coupon codes with one simple click - no registration required.",
      icon: "📋",
    },
    {
      id: 4,
      title: "Save Money",
      description:
        "Apply your coupon at checkout and enjoy incredible savings on your favorite products.",
      icon: "💰",
    },
  ];

  return (
    <div className="py-16 bg-gray-50 w-11/12 sm:w-10/12 mx-auto">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting amazing discounts has never been easier. Follow these simple
            steps to start saving money today.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                {/* Icon */}
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  <span className="text-gray-600">{step.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg">
            Start Saving Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
