import { useLoaderData, NavLink } from "react-router-dom";
import { useState } from "react";

const Brands = () => {
  const brands = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");

  // Handle loading state or missing data
  if (!brands || !Array.isArray(brands)) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="w-11/12 sm:w-10/12 mx-auto">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600">Loading brands...</p>
          </div>
        </div>
      </div>
    );
  }

  // Filter brands based on search term
  const filteredBrands = brands.filter(
    (brand) =>
      brand.brand_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          className="w-4 h-4 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
        >
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
          />
        </svg>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="w-4 h-4 text-gray-300 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="w-11/12 sm:w-10/12 mx-auto">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              All Brands
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-8 px-4">
              Discover amazing deals and coupons from Bangladesh's most trusted
              online retailers and marketplaces. Find your favorite brands and
              start saving today!
            </p>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Search Bar */}
          <div className="mb-12 px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search brands by name, description, or category..."
                  className="w-full bg-white pl-10 pr-4 py-3 md:py-4 text-base md:text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600 text-center">
              {filteredBrands.length} brand
              {filteredBrands.length !== 1 ? "s" : ""} found
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>

          {/* Brands Cards - Single Column Layout */}
          <div className="space-y-6">
            {filteredBrands.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <svg
                    className="w-16 h-16 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No brands found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search terms or browse all brands
                </p>
              </div>
            ) : (
              filteredBrands.map((brand) => (
                <div
                  key={brand._id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
                >
                  {/* Desktop Layout: Horizontal, Mobile Layout: Vertical */}
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Top Section on Mobile: Logo + Brand Info */}
                    <div className="flex flex-col md:flex-row md:items-center gap-6 flex-grow">
                      {/* Brand Logo */}
                      <div className="flex-shrink-0 mx-auto md:mx-0">
                        <div className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center p-2 border">
                          <img
                            src={brand.brand_logo}
                            alt={brand.brand_name}
                            className="max-w-full max-h-full object-contain"
                            onError={(e) => {
                              e.target.src = `https://ui-avatars.com/api/?name=${brand.brand_name}&background=6366f1&color=fff&size=80&font-size=0.4`;
                            }}
                          />
                        </div>
                      </div>

                      {/* Brand Info - Middle Section */}
                      <div className="flex-grow text-center md:text-left">
                        {/* Brand Name and Rating */}
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-3">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                            {brand.brand_name}
                          </h3>
                          <div className="flex items-center justify-center md:justify-start gap-1">
                            {renderStars(brand.rating)}
                            <span className="text-sm text-gray-600 ml-1">
                              ({brand.rating})
                            </span>
                          </div>
                        </div>

                        {/* Category Badge */}
                        <div className="mb-3">
                          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                            {brand.category}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                          {brand.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Section on Mobile, Right Section on Desktop - Button and Sale Badge */}
                    <div className="flex flex-col items-center md:items-end gap-3 md:ml-6">
                      {/* Sale Badge */}
                      {brand.isSaleOn && (
                        <div className="relative">
                          <span className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full animate-bounce shadow-lg">
                            🔥 SALE IS ON!
                          </span>
                        </div>
                      )}

                      {/* View Coupons Button */}
                      <NavLink
                        to={`/brands/${brand._id}`}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg whitespace-nowrap text-center"
                      >
                        View Coupons
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Back to Home Link */}
          <div className="text-center mt-16">
            <NavLink
              to="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
              Back to Home
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
