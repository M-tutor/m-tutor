import React from "react";
import CustomInput from "../components/CustomInput";
import MoraMaths from "../assets/Icons/MoraMaths";
import { LoginForm } from "../components/LoginForm";
import "./LoggingScreen.css";

function LoggingScreen(props) {
  return (
    <div className="flex">
      <div className="bg-dark grow lg:w-3/5 h-screen md:w-full">
        <div>
          <div className="flex items-center justify-center text-light">
            <MoraMaths className={"md:w-28 md:h-28"}></MoraMaths>
          </div>
          <div className="text-center">
            <h2 className="text-light md:text-2xl xl:text-3xl text-4xl font-bold mt-16">
              Login to your account
            </h2>
            <h2 className="text-light text-2xl xl:text-xl mb-8">
              Let's get started
            </h2>
          </div>
          <LoginForm />
        </div>
      </div>
      <div>
        <img
          src={require("../assets/Images/geomoetrical-cubes-paper 1.png")}
          className="md:hidden h-screen w-auto"
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default LoggingScreen;
