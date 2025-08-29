import { useLoaderData, NavLink } from "react-router-dom";
import { useState } from "react";

const BrandDetails = () => {
  const brand = useLoaderData();
  const [copiedCoupon, setCopiedCoupon] = useState(null);

  // Handle loading state or missing data
  if (!brand) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="w-11/12 sm:w-10/12 mx-auto">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600">Brand not found...</p>
            <NavLink
              to="/brands"
              className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold"
            >
              ← Back to All Brands
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  // Function to render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400 fill-current"
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
          className="w-5 h-5 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
        >
          <defs>
            <linearGradient id="half-detail">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half-detail)"
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
          className="w-5 h-5 text-gray-300 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      );
    }

    return stars;
  };

  // Function to copy coupon code
  const copyCouponCode = (couponCode) => {
    navigator.clipboard.writeText(couponCode);
    setCopiedCoupon(couponCode);
    setTimeout(() => setCopiedCoupon(null), 2000);
  };

  // Function to get coupon validity status
  const getCouponStatus = (validUntil) => {
    const today = new Date();
    const validDate = new Date(validUntil);
    const diffTime = validDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return {
        status: "expired",
        text: "Expired",
        class: "bg-red-100 text-red-800",
      };
    } else if (diffDays <= 7) {
      return {
        status: "expiring",
        text: `${diffDays} days left`,
        class: "bg-orange-100 text-orange-800",
      };
    } else {
      return {
        status: "valid",
        text: `${diffDays} days left`,
        class: "bg-green-100 text-green-800",
      };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="w-11/12 sm:w-10/12 mx-auto">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <NavLink
              to="/brands"
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
              Back to All Brands
            </NavLink>
          </div>

          {/* Brand Header */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {/* Brand Logo */}
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-24 h-24 bg-gray-50 rounded-xl flex items-center justify-center p-3 border shadow-sm">
                  <img
                    src={brand.brand_logo}
                    alt={brand.brand_name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${brand.brand_name}&background=6366f1&color=fff&size=96&font-size=0.4`;
                    }}
                  />
                </div>
              </div>

              {/* Brand Info */}
              <div className="flex-grow text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                    {brand.brand_name}
                  </h1>
                  {brand.isSaleOn && (
                    <span className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full animate-pulse shadow-lg">
                      🔥 SALE IS ON!
                    </span>
                  )}
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  {/* Rating */}
                  <div className="flex items-center justify-center md:justify-start gap-1">
                    {renderStars(brand.rating)}
                    <span className="text-lg text-gray-600 ml-2 font-semibold">
                      {brand.rating}/5
                    </span>
                  </div>

                  {/* Category */}
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full">
                    {brand.category}
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  {brand.description}
                </p>

                {/* Visit Store Button */}
                <a
                  href={brand.shop_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                  Visit Store
                </a>
              </div>
            </div>
          </div>

          {/* Coupons Section */}
          <div className="mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Available Coupons
              </h2>
              <p className="text-gray-600">
                {brand.coupons.length} coupon
                {brand.coupons.length !== 1 ? "s" : ""} available for{" "}
                {brand.brand_name}
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Coupons Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {brand.coupons.map((coupon) => {
                const couponStatus = getCouponStatus(coupon.expiry_date);
                return (
                  <div
                    key={coupon.coupon_code}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
                  >
                    {/* Coupon Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {coupon.description}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {coupon.condition}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${couponStatus.class}`}
                      >
                        {couponStatus.text}
                      </span>
                    </div>

                    {/* Coupon Code */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-4 border-2 border-dashed border-gray-300">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                            Coupon Code
                          </p>
                          <p className="text-xl font-bold text-gray-800 font-mono">
                            {coupon.coupon_code}
                          </p>
                        </div>
                        <button
                          onClick={() => copyCouponCode(coupon.coupon_code)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-semibold"
                        >
                          {copiedCoupon === coupon.coupon_code
                            ? "Copied!"
                            : "Copy"}
                        </button>
                      </div>
                    </div>

                    {/* Coupon Details */}
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Discount:</span>
                        <span className="font-semibold text-green-600">
                          {coupon.description.match(/\d+%/)
                            ? coupon.description.match(/\d+%/)[0]
                            : "Special Offer"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Valid Until:</span>
                        <span className="font-semibold">
                          {new Date(coupon.expiry_date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Type:</span>
                        <span className="font-semibold capitalize">
                          {coupon.coupon_type}
                        </span>
                      </div>
                    </div>

                    {/* Use Coupon Button */}
                    <div className="mt-6">
                      <a
                        href={brand.shop_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-center block"
                      >
                        Use Coupon
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Related Brands Section */}
          <div className="text-center">
            <NavLink
              to="/brands"
              className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Explore More Brands
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;
