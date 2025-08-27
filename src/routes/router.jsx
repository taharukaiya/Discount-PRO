import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    loader: () => fetch("/brands.json"),
  },
  {
    path: "/brands",
    element: <div>Brands</div>,
  },
  {
    path: "/brands/:brandId",
    element: <div>Brand Details</div>,
    loader: async ({ params }) => {
      const response = await fetch("/brands.json");
      const brands = await response.json();
      return brands.find((brand) => brand._id === params.brandId);
    },
  },
  {
    path: "/profile",
    element: <div>Profile</div>,
  },
  {
    path: "/login",
    element: <div>Login</div>,
  },
  {
    path: "/register",
    element: <div>Register</div>,
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);

export default router;
