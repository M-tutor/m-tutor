import React from "react";
import Navbar from "../components/navbar";
import Content from "../components/content";
import "./homepage.css";
import About from "./About/About";
import BackgroundImage from "../assets/Images/background.png";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="upper-div">
          <Navbar />
          <Content id="home" />
        </div>
        <About id="about" />
      </div>
    );
  }
}

export default HomePage;
