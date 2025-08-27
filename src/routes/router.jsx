import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/brands",
    element: <div>Brands</div>,
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
