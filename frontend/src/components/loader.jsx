import React from "react";
import "../css/loader.css"; // Import the CSS for loader
import logo from "/assets/logo_load.png"; // Import your PNG logo

const Loader = () => {
  return (
    <div className="loader">
      <div className="image-wrapper">
        {/* Replace SVG with your PNG logo */}
        <img src={logo} alt="Loading..." className="logo-image" />
        {/* <div className="loading-text">Loading...</div> */}
      </div>
    </div>
  );
};

export default Loader;
