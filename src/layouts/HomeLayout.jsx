import Header from "../components/home/Header";
import Footer from "../components/Footer";
import Slider from "../components/home/Slider";
import TopBrands from "../components/home/TopBrands";
import BrandsOnSale from "../components/home/BrandsOnSale";
import Newsletter from "../components/home/Newsletter";
import HowItWorks from "../components/home/HowItWorks";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Slider />
      <TopBrands />
      <BrandsOnSale />
      <HowItWorks />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomeLayout;
