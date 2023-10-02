import React from "react";
import CustomInput from "../components/CustomInput";

function LoggingScreen(props) {
  return (
    <div style={{ backgroundColor: "#050511" }}>
      <img
        className="logging-page-img"
        src={require("../assets/Copy of Mora Maths- Vertical logo - Black text.png")}
      ></img>
      <CustomInput></CustomInput>
    </div>
  );
}

export default LoggingScreen;
