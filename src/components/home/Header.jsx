import { NavLink } from "react-router-dom";

const Header = () => {
  const navItems = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/brands"}>Brands</NavLink>
      </li>
      <li>
        <NavLink to={"/profile"}>Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className=" py-2">
      <div className="navbar w-11/12 sm:w-10/12 mx-auto">
        {/* Left Part */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Discount PRO</a>
        </div>

        {/* Middle Part */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        {/* Right Part */}
        <div className="navbar-end">
          <NavLink to={"/login"} className="btn">
            Login
          </NavLink>
          <NavLink to={"/register"} className="btn">
            Register
          </NavLink>
          <NavLink to={"/login"} className="btn">
            Logout
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
