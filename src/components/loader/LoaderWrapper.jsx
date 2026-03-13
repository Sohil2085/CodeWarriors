// src/components/LoaderWrapper.jsx
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import useLoaderStore from "../../stores/useLoaderStore";

const LoaderWrapper = ({ children }) => {
  const location = useLocation();
  const [isPageLoading, setIsPageLoading] = useState(false);
  const { isLoading: isDataLoading } = useLoaderStore();

  useEffect(() => {
    setIsPageLoading(true);

    const handleLoad = () => setIsPageLoading(false);

    if (document.readyState === "complete") {
      // Just a small 300ms transition for route changes to allow new components to mount
      // and trigger their own data fetching (e.g., using startLoading())
      const timeout = setTimeout(() => {
        setIsPageLoading(false);
      }, 300);
      return () => clearTimeout(timeout);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [location.pathname]);

  const showLoader = isPageLoading || isDataLoading;

  return (
    <>
      {showLoader && <Loader />}
      <div style={{ display: showLoader ? 'none' : 'block' }}>
        {children}
      </div>
    </>
  );
};

export default LoaderWrapper;
