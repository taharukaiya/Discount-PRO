import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/home/Home";
import Brands from "../components/brands/Brands";
import BrandDetails from "../components/brands/BrandDetails";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import ForgotPassword from "../components/auth/ForgotPassword";
import AuthLayout from "../layouts/AuthLayout";
import Profile from "../components/profile/Profile";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage";

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
        element: (
          <PrivateRoute>
            <BrandDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const response = await fetch("/brands.json");
          const brands = await response.json();
          return brands.find((brand) => brand._id === params.brandId);
        },
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
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
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
