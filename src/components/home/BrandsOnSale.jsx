import { useLoaderData, NavLink } from "react-router-dom";

const BrandsOnSale = () => {
  const brands = useLoaderData();

  // Filter brands where isSaleOn is true
  const brandsOnSale = brands.filter((brand) => brand.isSaleOn);

  return (
    <section className="py-16 bg-gray-50 ">
      <div className="w-11/12 sm:w-10/12 mx-auto">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Brands on Sale
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't miss out on these amazing deals! Limited time offers from
              your favorite brands
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {brandsOnSale.map((brand) => (
              <NavLink
                key={brand._id}
                to={`/brands/${brand._id}`}
                className="group block"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 border border-gray-200 overflow-hidden relative">
                  {/* Sale Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                      🔥 SALE
                    </span>
                  </div>

                  {/* Brand Logo */}
                  <div className="p-6 flex justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100 h-32">
                    <img
                      src={brand.brand_logo}
                      alt={brand.brand_name}
                      className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${brand.brand_name}&background=ef4444&color=fff&size=100&font-size=0.4`;
                      }}
                    />
                  </div>

                  {/* Brand Information */}
                  <div className="p-6">
                    {/* Brand Name */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {brand.brand_name}
                    </h3>

                    {/* Category */}
                    <div className="flex items-center mb-3">
                      <svg
                        className="w-4 h-4 text-gray-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                        {brand.category}
                      </span>
                    </div>

                    {/* Total Coupons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-lg font-semibold text-gray-700">
                          {brand.coupons.length} Coupons
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-400 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-600">
                          {brand.rating}
                        </span>
                      </div>
                    </div>

                    {/* View Deals Button */}
                    <div className="mt-4">
                      <div className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 px-4 rounded-lg font-medium group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300">
                        View Deals →
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>

          {/* No Sales Message */}
          {brandsOnSale.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">😔</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">
                No Sales Available
              </h3>
              <p className="text-gray-500">
                Check back later for amazing deals!
              </p>
            </div>
          )}

          {/* View All Brands Link */}
          {brandsOnSale.length > 0 && (
            <div className="text-center mt-12">
              <NavLink
                to="/brands"
                className="inline-flex items-center bg-white text-gray-700 font-semibold py-3 px-6 rounded-full border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>View All Brands</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrandsOnSale;
