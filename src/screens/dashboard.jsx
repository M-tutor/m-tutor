// Dashboard.js
import React from "react";
// import Navbar from "../components/navbar/navbar";
import "./Dashboard.css";
import VolunteerImage from "../assets/volunteers-images/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes-removebg-preview 1.png";

export default function Dashboard() {
  const onDivClick = (divname) => {
    switch (divname) {
      case "Quizzes":
        window.location.href = "/quizpage";
        break;
      case "Tutorials":
        window.location.href = "/tutorialpage";
        break;
      case "Progress":
        window.location.href = "/progress";
        break;
      case "Profile":
        window.location.href = "/profile";
        break;
      default:
        console.log("Default");
    }
  };
  return (
    <div className="Dashboard">
      {/* <Navbar /> */}
      <div className="volunteer">
        <div className="volunteer-image">
          <img
            src={VolunteerImage}
            alt="Volunteer"
            style={{ width: 360, height: 360 }}
          />
        </div>
        <div className="volunteer-details">
          <h2 styles= {{color : 'white'}}>Meet our volunteers</h2>
          {/* Add your volunteer details here */}
          <p style={{color:'white'}}>
            sit amet, consectetur adipiscing elit. Quisque ullamcorper nibh nec
            varius varius. Suspendisse non tincidunt nisl. Fusce dictum risus
            eget lorem tempor eleifend non eget lacus. Maecenas consequat quis
            dolor id gravida. Pellentesque cursus non felis ut rhoncus. Vivamus
            aliquam eros vitae ornare varius
          </p>
        </div>
      </div>

      <div className="options">
        <div
          className="option"
          onClick={() => {
            onDivClick("Quizzes");
          }}
        >
          <div className="option-image background-image-quizzes">
            <h3
              className="title"
              style={{ color: "white", fontSize: 35, fontWeight: "bold" }}
            >
              Quizzes
            </h3>
          </div>
        </div>
        <div
          className="option"
          onClick={() => {
            onDivClick("Tutorials");
          }}
        >
          <div className="option-image background-image-tutorials">
            <h3
              className="title"
              style={{ color: "white", fontSize: 35, fontWeight: "bold" }}
            >
              Tutorials
            </h3>
          </div>
        </div>
        <div
          className="option"
          onClick={() => {
            onDivClick("Progress");
          }}
        >
          <div className="option-image background-image-progress">
            <h3
              className="title"
              style={{ color: "white", fontSize: 35, fontWeight: "bold" }}
            >
              Progress
            </h3>
          </div>
        </div>
        <div
          className="option"
          onClick={() => {
            onDivClick("Profile");
          }}
          style={{ borderRadius: 20 }}
        >
          <div className="option-image background-image-profile">
            <h3
              className="title"
              style={{ color: "white", fontSize: 35, fontWeight: "bold" }}
            >
              Profile
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
