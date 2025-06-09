// src/components/Loader.jsx
import './LoaderWrapper.css'
const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100 bg-dark"
      style={{ zIndex: 9999 }}
    >
    <div class="container">
    <div class="loadingspinner">
    <div id="square1"></div>
    <div id="square2"></div>
    <div id="square3"></div>
    <div id="square4"></div>
    <div id="square5"></div>
    </div>
    </div>
    </div>
  );
};

export default Loader;
