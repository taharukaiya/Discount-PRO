import Header from "../components/home/Header";
import Footer from "../components/Footer";
import Slider from "../components/home/Slider";
import TopBrands from "../components/home/TopBrands";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Slider />
      <TopBrands />
      <Footer />
    </div>
  );
};

export default HomeLayout;
