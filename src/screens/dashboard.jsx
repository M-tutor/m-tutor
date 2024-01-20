// Dashboard.js
import React from "react";
// import Navbar from "../components/navbar/navbar";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="Dashboard">
      {/* <Navbar /> */}
      <div className="volunteer">
        <div className="volunteer-image"></div>
        <div className="volunteer-details">
          <h2>Volunteer Details</h2>
          {/* Add your volunteer details here */}
        </div>
      </div>

      <div className="options">
        
        <div className="option">
          <div className="option-image">
          <h3 className="title">Quizzes</h3>
          </div>
          
        </div>
        <div className="option">
          <div className="option-image">
          <h3 className="title">Tutorials</h3>
          </div>
          
        </div>
        <div className="option">
          <div className="option-image">
          <h3 className="title">Progress</h3>
          </div>
          
        </div>
        <div className="option">
          <div className="option-image">
          <h3 className="title">Profile</h3>
          </div>
          
        </div>
      </div>
    </div>
  );
}
