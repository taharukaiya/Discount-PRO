import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "./Slider";
import TopBrands from "./TopBrands";
import BrandsOnSale from "./BrandsOnSale";
import Newsletter from "./Newsletter";
import HowItWorks from "./HowItWorks";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation only once
      mirror: false, // No animation when scrolling past element
      offset: 100, // Trigger animation 100px before element comes into view
    });
  }, []);

  return (
    <div>
      <Slider />
      <TopBrands />
      <BrandsOnSale />
      <HowItWorks />
      <Newsletter />
    </div>
  );
};

export default Home;
