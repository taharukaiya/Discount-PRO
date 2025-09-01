import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

const ErrorPage = () => {
  useEffect(() => {
    // Set document title for error page
    document.title = "Page Not Found - Discount PRO";

    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div
          className="text-9xl md:text-[12rem] font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text mb-8"
          data-aos="zoom-in"
        >
          404
        </div>

        {/* Error Message */}
        <div className="space-y-6">
          <h1
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Oops! Page Not Found
          </h1>

          <p
            className="text-lg text-gray-600 mb-8 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            The page you're looking for seems to have wandered off. It might
            have been moved, deleted, or perhaps you entered the wrong URL.
          </p>

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link
              to="/"
              className="btn btn-primary btn-lg px-8 text-white hover:scale-105 transition-transform duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Go Home
            </Link>

            <Link
              to="/brands"
              className="btn btn-outline btn-lg px-8 hover:scale-105 transition-transform duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-6m-2-5h2m-2 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 00-2-2h-2a2 2 0 00-2 2v10z"
                />
              </svg>
              Browse Brands
            </Link>
          </div>

          {/* Help Text */}
          <div
            className="mt-12 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Need Help?
            </h3>
            <p className="text-gray-600 mb-4">
              If you believe this is an error, please try these options:
            </p>
            <ul className="text-left text-gray-600 space-y-2 max-w-md mx-auto">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-3 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Check the URL for typos
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-3 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Try refreshing the page
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-3 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Use the navigation menu
              </li>
            </ul>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-pink-200 rounded-full opacity-40 animate-pulse"></div>
      </div>
    </div>
  );
};

export default ErrorPage;
