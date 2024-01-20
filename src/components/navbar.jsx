import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
    scrollToSection = (ref) => {
        if (ref.current) {
          ref.current.scrollIntoView({
            behavior: "smooth",
          });
        }
      };
  render() {
    return (
      <section className="top-nav">
        <span className="logosection ">
          <a href="/">
            <img
              src={require("../assets/Images/Copy of Mora Maths- Color logo - White text.png")}
              alt="Mora-maths logo"
              className="logo"
            />
          </a>
          <a href="/">
            <img
              src={require("../assets/Images/M-tutor - White logo.png")}
              alt="Mora-maths logo"
              className="logo-m"
            />
          </a>
        </span>

        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li>
            {/* <NavLink
              to="#home"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              HOME
            </NavLink> */}
            <a className={({ isActive }) => (isActive ? "active" : "link")} href="#home">
            HOME
            </a>
          </li>
          <li>
            <NavLink
              to="/contactpage"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            {/* <NavLink
              to="#about"
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              ABOUT
            </NavLink> */}
            <a
              className={({ isActive }) => (isActive ? "active" : "link")}
              href="about"
              
            >
              ABOUT
            </a>
          </li>
          <li>
            <div className="search-section">
              <button className="search-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                </svg>
              </button>
              <input
                type="search"
                className="search"
                placeholder="Search here..."
              />
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default Navbar;
