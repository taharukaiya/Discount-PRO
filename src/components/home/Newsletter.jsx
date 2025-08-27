import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setEmail("");

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Subscribe to Newsletter
            </h2>
            <p className="text-lg text-gray-600">
              Get the latest deals and exclusive discounts delivered to your
              inbox.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
          </div>

          {!isSuccess ? (
            <>
              {/* Email Form */}
              <form onSubmit={handleSubmit} className="mb-8">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 whitespace-nowrap"
                  >
                    {isLoading ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>
              </form>

              {/* Benefits */}
              <div className="text-center">
                <p className="text-gray-500 text-sm">
                  ✨ Exclusive deals • 🔒 No spam • 📧 Unsubscribe anytime
                </p>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="text-center bg-white rounded-xl p-8 border border-gray-200">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Successfully Subscribed!
              </h3>
              <p className="text-gray-600">
                Check your email for exclusive deals and discounts.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
