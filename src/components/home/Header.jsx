import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Handle logout with confirmation and success message
  const handleLogout = async () => {
    setShowLogoutModal(true);
  };

  // Confirm logout
  const confirmLogout = async () => {
    setShowLogoutModal(false);
    try {
      await logout();
      toast.success("Successfully logged out! See you again soon!", {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to logout. Please try again.", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  // Cancel logout
  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `font-medium transition-all duration-300 hover:text-blue-600 relative ${
              isActive ? "text-blue-600" : "text-gray-700"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/brands"}
          className={({ isActive }) =>
            `font-medium transition-all duration-300 hover:text-blue-600 relative ${
              isActive ? "text-blue-600" : "text-gray-700"
            }`
          }
        >
          Brands
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            `font-medium transition-all duration-300 hover:text-blue-600 relative ${
              isActive ? "text-blue-600" : "text-gray-700"
            }`
          }
        >
          Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="navbar w-11/12 sm:w-10/12 mx-auto py-3">
        {/* Left Part - Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden hover:bg-blue-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow-xl border border-gray-100"
            >
              {navItems}
            </ul>
          </div>
          <NavLink
            to="/"
            className="btn btn-ghost text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            <span className="flex items-center space-x-2">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Discount PRO</span>
            </span>
          </NavLink>
        </div>

        {/* Middle Part - Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6">{navItems}</ul>
        </div>

        {/* Right Part - Auth Buttons */}
        <div className="navbar-end space-x-3">
          {user ? (
            // Show user info and logout button when logged in
            <div className="flex items-center space-x-3">
              {user.photoURL && (
                <div className="avatar">
                  <div className="w-8 h-8 rounded-full">
                    <img src={user.photoURL} alt="User Avatar" />
                  </div>
                </div>
              )}
              <span className="text-gray-700 font-medium hidden sm:block">
                {user.displayName || user.email}
              </span>
              <button
                onClick={handleLogout}
                className="btn btn-outline btn-error hover:bg-red-600 hover:border-red-600 transition-all duration-300 font-medium"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout
              </button>
            </div>
          ) : (
            // Show login and register buttons when not logged in
            <>
              <Link
                to={"/auth/login"}
                className="btn btn-outline btn-primary hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 font-medium"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                Login
              </Link>
              <Link
                to={"/auth/register"}
                className="btn btn-primary bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-none transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Toast Container for notifications */}
      <ToastContainer />

      {/* Modern Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-[#ffffff6b] flex items-center justify-center p-4 z-[9999] backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
            {/* Modal Header */}
            <div className="p-6 text-center border-b border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Confirm Logout
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Are you sure you want to logout? You will need to sign in again
                to access your account and continue saving with exclusive deals.
              </p>
            </div>

            {/* Modal Actions */}
            <div className="p-6 flex gap-4">
              <button
                onClick={cancelLogout}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
