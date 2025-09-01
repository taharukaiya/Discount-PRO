import { useEffect } from "react";
import { useLocation, useLoaderData } from "react-router-dom";

const useDocumentTitle = () => {
  const location = useLocation();
  let loaderData = null;

  // Safely get loader data
  try {
    loaderData = useLoaderData();
  } catch (error) {
    // No loader data available for this route
    loaderData = null;
  }

  useEffect(() => {
    const getPageTitle = (pathname, data) => {
      // Remove leading slash and split by slash
      const pathSegments = pathname.split("/").filter(Boolean);

      // Define title mappings
      const titleMap = {
        "": "Home - Discount PRO",
        brands: "All Brands - Discount PRO",
        profile: "My Profile - Discount PRO",
        "auth/login": "Login - Discount PRO",
        "auth/register": "Register - Discount PRO",
        "auth/forgot-password": "Forgot Password - Discount PRO",
      };

      // Handle brand details pages
      if (pathSegments[0] === "brands" && pathSegments[1]) {
        if (data && data.brand_name) {
          return `${data.brand_name} - Discount PRO`;
        }
        return "Brand Details - Discount PRO";
      }

      // Get title from map or default
      const pathKey = pathSegments.join("/");
      return titleMap[pathKey] || "Discount PRO";
    };

    const title = getPageTitle(location.pathname, loaderData);
    document.title = title;
  }, [location.pathname, loaderData]);
};

export default useDocumentTitle;
