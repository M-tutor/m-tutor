import React, { useEffect, useRef, useState } from "react";

import "./navbar.css";
import MoraMathsBlackLogo from "../../assets/MoraMathsBlackLogo.png";
import MTutorLogo from "../../assets/MTutorColorLogo.png";
import profileImg from "../../assets/dp.png";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const menuRef = useRef(null);
  const [menu, setMenu] = useState({
    mainMenuIsOpen: false,
    offCanvasMenuIsOpen: false,
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleMenu("mainMenuIsOpen");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menu.mainMenuIsOpen]);

  const handleMenu = (menuType) => {
    setMenu((prev) => ({
      ...prev,
      [menuType]: !menu[menuType],
    }));
  };

  return (
    <section className="nav-container">
      <section>
        <div className="img-container">
          <div className="img-black-logo">
            <img src={MoraMathsBlackLogo} alt="MoraMathsBlackLogo" />
          </div>
          <div className="img-tutor-logo">
            <img src={MTutorLogo} alt="MTutorLogo" />
          </div>
        </div>
        <div className="search">
          <input
            type="text"
            className="search_input"
            placeholder="Search here..."
          />
        </div>
        <div className="profile" onClick={() => handleMenu("mainMenuIsOpen")}>
          <div className="user-profile">
            <span>John Doe</span>
          </div>
          <img className="profile_img" src={profileImg} alt="Profile" />
          {menu.mainMenuIsOpen && (
            <ul className="main-menu_container" ref={menuRef}>
              <li>
                <a href="/profile">Profile</a>
              </li>
              <li>
                <a href="/logout">Logout</a>
              </li>
            </ul>
          )}
        </div>
        <div className="menu">
          {menu.offCanvasMenuIsOpen ? (
            <HiOutlineX onClick={() => handleMenu("offCanvasMenuIsOpen")} />
          ) : (
            <HiMenuAlt3 onClick={() => handleMenu("offCanvasMenuIsOpen")} />
          )}
        </div>
      </section>
      {menu.offCanvasMenuIsOpen && (
        <div className="menu-container">
          <div className="">
            <input
              type="text"
              style={{ padding: "8px 20px" }}
              className="search_input"
              placeholder="Search here..."
            />
          </div>
          <ul className="offCanvas-menu-item_container">
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <a href="/logout">Logout</a>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;
