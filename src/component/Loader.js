import React from "react";
import "./loader.css";

function Loader() {
  return (
    <div className="cartoon-loader-container">
      <div className="cartoon-glasses">
        <div className="left-cartoon-lens"></div>
        <div className="cartoon-bridge"></div>
        <div className="right-cartoon-lens"></div>
      </div>
      <div className="loader-text">Loading Spectacles...</div>
    </div>
  );
}

export default Loader;
