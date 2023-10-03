import React from "react";
import logo1 from "../../assets/dashboardAssets/logo1.png";
import logo2 from "../../assets/dashboardAssets/logo2.png";
import dp from "../../assets/dashboardAssets/dp.png";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="navbar-logo-container">
        <img src={logo1} alt="First Brand Name" className="navbar-logo" />
        <img src={logo2} alt="Second Brand Name" className="navbar-logo" />
      </div>
      <div className="search">
        <input
          type="search"
          className="search-bar"
          placeholder="Search"
          aria-label="Search through site content" /* Accessibility attribute */
        />
      </div>
      <div class="outer">
        <div className="box">
          <span className="box-text">John</span>
          <img src={dp} alt="Description of Image" className="round-picture" />
        </div>
      </div>
    </div>
  );
}
