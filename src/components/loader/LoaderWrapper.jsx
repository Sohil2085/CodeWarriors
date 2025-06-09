// src/components/LoaderWrapper.jsx
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const LoaderWrapper = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1800); 

    return () => clearTimeout(timeout);
  }, [location]);

  if (isLoading) {
    return <Loader />;
  }

  return children;
};

export default LoaderWrapper;
