import React, { useState } from "react";
import "./quizsubject.css";

const HorizontalTabWithDropdown = ({
  tabIndex,
  tabTitle,
  dropdownItems,
  handleTopic,
}) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const tabHeaderClassName = isDropdownVisible
    ? "tab-header tab-header-open"
    : "tab-header";

  return (
    <div className="horizontal-tab">
      <div className={tabHeaderClassName}>
        <div className="tab-title">{`${tabIndex + 1}.  ${tabTitle}`}</div>
        <div className="toggle-icon" onClick={toggleDropdown}>
          {isDropdownVisible ? "▲" : "▼"}
        </div>
      </div>
      {isDropdownVisible && (
        <div className="dropdown-content">
          <ul>
            {dropdownItems.map((item, index) => (
              <li
                className="list-item"
                key={index}
                onClick={() => handleTopic(item, tabTitle)}
              >
                <div className="list-text">{item}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HorizontalTabWithDropdown;