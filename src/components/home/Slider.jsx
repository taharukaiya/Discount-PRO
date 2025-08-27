import { useState, useEffect } from "react";
import couponBanner1 from "../../assets/Images/SliderImages/couponBanner-1.jpg";
import couponBanner2 from "../../assets/Images/SliderImages/couponBanner-2.jpg";
import couponBanner3 from "../../assets/Images/SliderImages/couponBanner-3.jpg";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: couponBanner1,
      title: "Amazing Discounts Await",
      subtitle: "Save up to 70% on your favorite brands",
    },
    {
      id: 2,
      image: couponBanner2,
      title: "Exclusive Coupon Deals",
      subtitle: "Get the best offers from top retailers",
    },
    {
      id: 3,
      image: couponBanner3,
      title: "Shop Smart, Save More",
      subtitle: "Discover incredible savings every day",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden shadow-lg">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="w-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#00000084] backdrop-blur-sm bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl opacity-90">
                  {slide.subtitle}
                </p>
                <button className="mt-6 bg-primary hover:bg-primary-focus text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
                  Get Your Coupon Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 shadow-lg z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 shadow-lg z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
              currentSlide === index
                ? "bg-white border-white scale-110 shadow-lg"
                : "bg-transparent border-white border-opacity-60 hover:border-opacity-100 hover:scale-105"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
