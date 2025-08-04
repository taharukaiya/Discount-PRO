import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/about",
    element: <div>About us</div>,
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);

export default router;
