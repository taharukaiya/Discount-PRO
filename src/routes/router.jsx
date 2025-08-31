import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/home/Home";
import Brands from "../components/brands/Brands";
import BrandDetails from "../components/brands/BrandDetails";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const response = await fetch("/brands.json");
          return response.json();
        },
      },
      {
        path: "brands",
        element: <Brands />,
        loader: async () => {
          const response = await fetch("/brands.json");
          return response.json();
        },
      },
      {
        path: "brands/:brandId",
        element: <BrandDetails />,
        loader: async ({ params }) => {
          const response = await fetch("/brands.json");
          const brands = await response.json();
          return brands.find((brand) => brand._id === params.brandId);
        },
      },
      {
        path: "profile",
        element: <div>Profile</div>,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);

export default router;
