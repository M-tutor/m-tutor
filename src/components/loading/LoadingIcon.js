import React from 'react';
import './LoadingIcon.css'; // Import CSS styles

const LoadingIcon = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-icon-wrapper">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingIcon;
