import { Outlet } from "react-router-dom";
import Header from "../components/home/Header";
import useDocumentTitle from "../hooks/useDocumentTitle";

const AuthLayout = () => {
  useDocumentTitle();

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
