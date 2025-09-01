import Header from "../components/home/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      {/* Global Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default HomeLayout;
