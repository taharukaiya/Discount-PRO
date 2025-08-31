import Marquee from "react-fast-marquee";
import { useLoaderData, NavLink } from "react-router-dom";

const TopBrands = () => {
  const brands = useLoaderData();

  // Handle loading state or missing data
  if (!brands || !Array.isArray(brands)) {
    return (
      <section className="bg-gradient-to-r from-blue-100 to-purple-100">
        <div className="py-12 w-11/12 sm:w-10/12 mx-auto">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600">Loading brands...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="py-12 w-11/12 sm:w-10/12 mx-auto">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Top Brands
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover amazing deals from Bangladesh's most trusted online
              retailers and marketplaces
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Brands Marquee */}
          <div className="relative overflow-hidden">
            <Marquee
              speed={50}
              pauseOnHover={true}
              className="py-2"
              gradient={true}
              gradientColor={[248, 250, 252]}
              gradientWidth={100}
            >
              {brands.map((brand) => (
                <NavLink
                  key={brand._id}
                  to={`/brands/${brand._id}`}
                  className="mx-6 group transition-all duration-300 hover:scale-110 block"
                >
                  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 w-32 h-20 flex items-center justify-center group-hover:bg-gray-50">
                    <img
                      src={brand.brand_logo}
                      alt={brand.brand_name}
                      className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:brightness-110"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${brand.brand_name}&background=6366f1&color=fff&size=128&font-size=0.4`;
                      }}
                    />
                  </div>
                </NavLink>
              ))}
            </Marquee>
          </div>

          {/* View All Brands Button */}
          <div className="text-center mt-10">
            <NavLink
              to="/brands"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
            >
              View All Brands
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBrands;
